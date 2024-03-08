class courier{
    constructor(weight, destination, source, bookedby) {
        this.weight = weight;
        this.destination =destination;
        this.source = source;
        this.bookedby = bookedby;
    }

    bookcourier() {
        this.price = this.weight > 20 ? 200 : 100;
        return `courier booked! the price is ${ this.price}`;
    }

    showCourier() {
        return `this courier is headed to ${this.destination} it was booked by ${this.bookedby} at ${this.source} prodect od weight of ${this.weight}`
    }
}

let choice = -1;

do {
    let mycourier = new courier(25, "hyd", "telangana", "pawan");
    console.log("choose one : \n1. Book courier\n2. see details\n3. quit");
    choice = parseInt(prompt("Enter u r choice:  "));
    switch (choice) {
            case 1:
            console.log(mycourier.bookcourier());
            break;
            case 2:
            console.log(mycourier.showCourier());
             break;
            case 3:
            console.log("thanks for stopping by!");
            break;
            default:
                console.log("invalid choice");
    }
} while (choice > 0 && choice < 3)