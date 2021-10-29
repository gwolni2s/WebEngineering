function Person(firstname, lastname, car) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.carObj = car;
}
function car(label, model, person) {
    this.label = label;
    this.model = model;
    this.person = person;
}
function conflict(car) {
    return car.person.length === 1;
}
