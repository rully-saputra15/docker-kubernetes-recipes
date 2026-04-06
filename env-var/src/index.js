const express = require("express")

const app = express()
const port = process.env.PORT;

app.get('/', (_, res) => {
    res.send(`hello from express ${process.env.APP_NAME}`)
})

app.listen(port, () => {
    console.log(`Server listening on port : ${port}`)
})