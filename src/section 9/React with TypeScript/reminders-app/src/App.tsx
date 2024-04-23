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

  return (
    <div className="App">
      <ReminderList items={reminderList} />
    </div>
  )
}

export default App
