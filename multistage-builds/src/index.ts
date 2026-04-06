import express from "express"

const app = express()
const port = process.env.PORT

app.get('/', (_, res) => {
    res.send(`hello from express multistage`)
})

app.listen(port, () => {
    console.log(`Server listening on port : ${port}`)
})