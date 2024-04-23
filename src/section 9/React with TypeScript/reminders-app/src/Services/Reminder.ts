import axios from "axios"
import Reminder from "../Models/Reminder"

class ReminderService {
  http = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
  })

  async getReminders() {
    const response = await this.http.get<Reminder[]>("/posts")
    return response.data
  }

  async postReminder(title: string) {
    const response = await this.http.post<Reminder>("/posts", { title })
    return response.data
  }

  async deleteReminder(id: number) {
    const response = await this.http.delete("/posts/" + id)
    return response.data
  }
}

export default new ReminderService()
