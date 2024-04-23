import { FormEvent, useState } from "react"

interface NewReminderProps {
  onAddNewReminder: (title: string) => void
}

export default function NewReminder({
  onAddNewReminder,
}: NewReminderProps): JSX.Element {
  const [title, setTitle] = useState("")

  const submitForm = (event: FormEvent) => {
    event.preventDefault()
    if (!title) return

    onAddNewReminder(title)
    setTitle("")
  }

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title">Reminder Title</label>
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        type="text"
        id="title"
        className="form-control"
      />
      <button type="submit" className="btn btn-primary rounded-pill my-3">
        Add Reminder
      </button>
    </form>
  )
}
