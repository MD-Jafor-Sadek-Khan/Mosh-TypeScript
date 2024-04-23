import express from "express"

const app = express()

app.get('/',(req, res)=>{
    res.send("Wait for a minute or 2million")
})

app.listen(8000, () => console.log("server started"))
