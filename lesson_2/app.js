var inn = '11208121200758'
var firstNumber = Number(inn [0])


if (firstNumber === 1 || firstNumber === 0 || firstNumber === 2 && inn.length === 14) {
    console.log('valid')
} else {
    alert('error')
}


var euSize = 'M'

if (euSize === 'M') {
    console.log('48')
} else if (euSize === 'S') {
    console.log('42')
} else if (euSize === 'L') {
    console.log('58')
} else {
    console.log('unknown size')
}

// swith
switch (euSize) {
    case 'S':
    case's':
        console.log('42')
        break
    case 'M':
    case 'm':
        console.log('48')
        break
    case 'L':
    case 'l':
        console.log("52")
        break
    default:
        console.log('unknown size')
}


var day = ''
switch (new Date().getDay()) {
    case 1:
        day = 'Sunday'
        break
    case 2:
        day = 'Monday'
        break
    case 3:
        day = 'Tuesday'
        break
    case 4:
        day = 'Wednesday'
        break
    case 5:
        day = 'Thursday'
        break
    case 6:
        day = 'Friday'
        break
    case 7:
        day = 'Saturday'
        break

}


// null
var phoneNumber = null
console.log(typeof phoneNumber)


// undefined
let age;


//object
var user = {
    name: 'Aidana',
    lastName: 'Akibaeva',
    phoneNumber: 996755070606,
    secondNumber: null,
    address: {
        city: Bishkek, Tokmok,
        street: undefined,
    },
    Married: false,
}

console.log(user.address.street)
user.course = 'GEEKS' // to add some properties to the object
console.log(user)
user['address'] ['street'] = Samanchina // to change the equaction to the new value
console.log(user)
delete user.secondNumber


// methods
console.log(Object.keys(user)) // poisk po klucham
console.log(Object.values(user)) //  pouisk po znacheniyam
console.log(Object.entries(user)) // keys && values
console.log(Object.hasOwnProperty('secondNubmer'))// gives the feedback about do u have this kind of property or not 1§§