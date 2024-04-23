import { useEffect, useState } from "react"
import "./App.css"
import ReminderList from "./Components/ReminderList.component"
import Reminder from "./Models/Reminder"
import reminderService from "./Services/Reminder"

function App() {
  const [reminderList, setReminderList] = useState<Reminder[]>([])

  useEffect(() => {
    fetchReminders()
  }, [])

  async function fetchReminders() {
    const fetchedRemindersList = await reminderService.getReminders()
    setReminderList(fetchedRemindersList)
  }

  const removeReminder = (id: number) => {
    setReminderList((prevState) => {
      const newState = prevState.filter((reminder) => reminder.id !== id)
      return newState
    })
  }

  return (
    <div className="App">
      <ReminderList onRemoveReminder={removeReminder} items={reminderList} />
    </div>
  )
}

export default App
