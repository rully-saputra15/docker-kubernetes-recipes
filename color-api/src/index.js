const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const promBundle = require('express-prom-bundle');
const { healthRouter } = require('./routes/health')
const { apiRouter } = require('./routes/api')
const { rootRouter } = require('./routes/root')

const app = express();
const port = 80;

const isDelayStartup = process.env.DELAY_STARTUP === 'true'

console.log(`DELAY STARTUP: ${isDelayStartup}`)

const metricsMiddleware = promBundle({
  includeMethod: true,
  includeStatusCode: true,
  includePath: true,
  includeUp: true,
});
app.use(metricsMiddleware);
app.use(bodyParser.json());
app.use('/api', apiRouter);
app.use('/', healthRouter);
app.use('/', rootRouter);

if(isDelayStartup) {
  const start = Date.now();

  // purposefully block event loop and execution for 60s
  // illustrate startup probes
  while (Date.now() - start < 60000) {}
}

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log('Connected to MongoDB');

    app.listen(port, () => {
      console.log(`Color API listening on port: ${port}`);
    });
  })
  .catch((err) => {
    console.error('Could not connect to MongoDB');
    console.error(err);
  });