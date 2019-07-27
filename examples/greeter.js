function greeter(person) {
    return "Hello " + person.firstName + ' ' + person.lastName;
}
var user = {
    firstName: 'Michael',
    lastName: 'Hee'
};
console.log(greeter(user));
