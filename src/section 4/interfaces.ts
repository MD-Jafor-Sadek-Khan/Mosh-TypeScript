abstract class Calender {
  constructor(public name: string) {}

  abstract addEvent(): void
  abstract removeEvent(): void
}

interface ICalender {
  name: String
  addEvent(): void
  removeEvent(): void
}

interface ICloudCalender extends ICalender {
  sync(): void
}

class GoogleCalender implements ICloudCalender {
  constructor(public name: string) {}

  sync(): void {
    console.log("Method not implemented.")
  }

  addEvent(): void {
    console.log("Method not implemented google.")
  }
  removeEvent(): void {
    console.log("Method not implemented.")
  }
}

class OutLookCalender extends Calender {
  constructor(name: string) {
    super(name)
  }
  override addEvent(): void {
    console.log("Method not implemented outlook.")
  }
  override removeEvent(): void {
    console.log("Method not implemented.")
  }
}

const google = new GoogleCalender('google')
const outlook = new OutLookCalender('outlook')

google.addEvent()
outlook.addEvent()