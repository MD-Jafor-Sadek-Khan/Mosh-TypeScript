"use strict";
class Ride {
    start() { return Ride._activeRides++; }
    stop() { return Ride._activeRides--; }
    static get activeRides() { return Ride._activeRides; }
}
Ride._activeRides = 0;
let ride2 = new Ride();
let ride3 = new Ride();
ride2.start();
ride3.start();
ride3.start();
ride3.start();
console.log(Ride.activeRides);
//# sourceMappingURL=static%20members.js.map