"use strict";
class Calender {
    constructor(name) {
        this.name = name;
    }
}
class GoogleCalender {
    constructor(name) {
        this.name = name;
    }
    sync() {
        console.log("Method not implemented.");
    }
    addEvent() {
        console.log("Method not implemented google.");
    }
    removeEvent() {
        console.log("Method not implemented.");
    }
}
class OutLookCalender extends Calender {
    constructor(name) {
        super(name);
    }
    addEvent() {
        console.log("Method not implemented outlook.");
    }
    removeEvent() {
        console.log("Method not implemented.");
    }
}
const google = new GoogleCalender('google');
const outlook = new OutLookCalender('outlook');
google.addEvent();
outlook.addEvent();
//# sourceMappingURL=interfaces.js.map