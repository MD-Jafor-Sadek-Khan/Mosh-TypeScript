import { useState } from "react"
import "./App.css"
import ReminderList from "./Components/ReminderList.component"
import Reminder from "./Models/Reminder"

function App() {
  const [reminderList, setReminderList] = useState<Reminder[]>([
    { id: 1, title: "Reminder 1" },
  ])

  return (
    <div className="App">
      <ReminderList items={reminderList} />
    </div>
  )
}

export default App
