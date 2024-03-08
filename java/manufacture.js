class vehicle{
    constructor(manufacture, model, year) {
        this.manufacture = manufacture;
        this.model = model;
        this.year = year;
    }

    getInfo() {
        return `${this.manufacture} made in ${this.year} model is ${this.model}`;
    }
}
let newVehicle = new vehicle("jane", 1234, "new york");
console.log(newVehicle. getInfo());
