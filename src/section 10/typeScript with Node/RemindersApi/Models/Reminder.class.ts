export default class Reminder {
  id: string
  isComplete: boolean
  constructor(public title: string) {
    const tempId = new Date()
    this.id = tempId.toString()
    this.isComplete = false
  }
}
