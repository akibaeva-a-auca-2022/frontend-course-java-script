console.log('Hello world');
/**/

//variables in JS ES5
var apple = "apple"

var name = "Aidana"
var lastName = "Akibaeva"
console.log(name, lastName)
// camelcase
var surnameAndName = " Akibaeva Aidana"
console.log(surnameAndName)

// types of data
// String
var nameSurname = "Akibaeva Aidana"
console.log(typeof nameSurname)
//method of strok
var group = 'Frontend'
var number = '25-03'
console.log(group + ' ' + number) // конкатенация строк

console.log(group.toUpperCase())
console.log(group.toLowerCase())
console.log('-'.repeat(10))
console.log(group.length)

// number
var num = 77
console.log(typeof num)
var num2 = 55
console.log('77 - 55 = ', num - num2)
console.log('77 + 55 = ', num + num2)
console.log('77 / 55 = ', num / num2)
console.log('77 * 55 = ', num * num2)
console.log('77 % 55 = ', num % num2) // выводит остаток
console.log('77 ** 55 = ', num ** num2) // восводит в степень

console.log("the average of the ages in our group is ", (14 + 29 + 16 + 18 + 14 + 14 + 14 + 14 + 29 + 15 + 16 + 16 + 17 + 18) / 14, '.')


// == - y не строгое равно сравнивает по внешнему виду
// === - строгое сравнивает по типу данных

var n1 = 7
var n2 = 5
console.log(n1 > n2)
console.log(n2 > n1)

var n3 = 8
var n4 = '8'
console.log(n3 != n4)

// boolean
// if else... if else- условные конструкции

var f = prompt

var userName = prompt('Enter your name')
var userSurname = prompt('Enter your surname')
var userAge = Number(prompt('Enter your age'))

if (userAge <= 18) {
    console.log('Hi', userName)
} else if (userAge > 18 && userAge <= 50) {
    console.log('Helo', userName + " " + userSurname)
} else if (userAge > 50 && userAge <= 85) {
    console.log('Welcome', userName + " " + userSurname)
} else {
    console.error("error")
}


var login = 'aidanka777'
var password = '1231Apple'
var login2 = prompt('enter the login')
var passwrord2 = prompt('enter the password')
if (login === login2 && passwrord2 === password) {
    console.log("congrats")
}
else {
    console.error('error')
}

&& 