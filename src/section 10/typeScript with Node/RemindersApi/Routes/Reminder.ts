import { Router } from "express"
import CreateReminderDto from "../Dtos/CreateReminder"
import Reminder from "../Models/Reminder.class"

const router = Router()
let reminders: Reminder[] = []

router.get("/", (req, res) => {
  res.json(reminders)
})

router.post("/", (req, res) => {
  const { title } = req.body as CreateReminderDto
  const newReminder = new Reminder(title)
  reminders.push(newReminder)
  res.status(201).json(newReminder)
})

router.delete("/:id", (req, res) => {
  const { id } = req.params
  reminders = reminders.filter((item) => item.id.toString() !== id)
  res.json(reminders)
})
export default router
