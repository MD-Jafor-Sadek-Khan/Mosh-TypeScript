import express from "express"
import remindersRouter from "./Routes/Reminder"

const app = express()

app.use(express.json())
app.use("/reminders", remindersRouter)

app.get("/", (req, res) => {
  res.send("Home")
})

app.listen(8000, () => console.log("server started"))
