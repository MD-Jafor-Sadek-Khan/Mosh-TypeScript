class Ride{
    private static _activeRides: number = 0

    start(){ return Ride._activeRides ++}
    stop(){ return Ride._activeRides --}

    static get activeRides(){ return Ride._activeRides}
}

let ride2 = new Ride()
let ride3 = new Ride()

ride2.start()
ride3.start()
ride3.start()
ride3.start()

console.log(Ride.activeRides);
