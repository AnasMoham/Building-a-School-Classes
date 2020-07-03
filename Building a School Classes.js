class school{
    schools: string;
    constructor(message: string) {
        this.schools = message;
    }
    scol() {
        return "Hello, " + this.schools;
    }
}

let school = new School("world");




function school(anas) {
    return "Hello, " + anas;
}

let user = "Jane User";

document.body.textContent = school(user);