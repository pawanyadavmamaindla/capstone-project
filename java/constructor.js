class person {
    constructor(name, id, city) {
        this.name = name;
        this.id = id;
        this.city = city;
    }
    showInfo() {
        return `${this.name} lives in ${this.city} and thir id is ${this.id}`;

    }
}

class librarian extends person {}

class student extends person {
    constructor(name, id, city, houseno) {
        super(name, id, city);
        this.houseno = houseno;
    }
    showInfo() {
        return `${this.name} lives in ${this.city} and thir id is ${this.id} and ther houseno is ${this.houseno}`;
    }
}

let newLibrarian = new librarian("jane", 1234, "new york");
console.log(newLibrarian.showInfo());

let jonh = new student("jane", 1234, "new york");
console.log(jonh.showInfo());
