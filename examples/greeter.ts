interface Person{
    firstName: string,
    lastName: string
}

function greeter(person:Person) {
    return "Hello " + person.firstName + ' ' + person.lastName
}

let user:Person = {
    firstName: 'Michael',
    lastName: 'Hee'
}
console.log(greeter(user));