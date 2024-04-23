import { Router } from "express"
import CreateReminderDto from "../Dtos/CreateReminder"
import Reminder from "../Models/Reminder.class"

const router = Router()
const reminders: Reminder[] = []

router.get("/", (req, res) => {
  res.json(reminders)
})

router.post("/", (req, res) => {
  const { title } = req.body as CreateReminderDto
  const newReminder = new Reminder(title)
  reminders.push(newReminder)
  res.status(201).json(newReminder)
})

export default router
