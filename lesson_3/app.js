// классы опреторов
// 1) унарные : - + !
// 2) бинарные: ** (степень) / %
// 3) тернарные:

var num = 2
// if (num > 10) {
//     console.log("more than 10")
// } else {
//     console.log("less than 10")
// }
console.log(num > 10 ? 'more than 10 ' : 'less than 10')


var age = prompt('how old are you')
console.log(age >= 18 && age <= 50 ? "you are accepted" : "you are not accepted")

var age2 = 70
var str = age2 < 18 ? "kid" : (age2 > 18 && age2 < 60) ? "worker" : "pensioner"

// 7) symbol
// 8) bigint
var bigint = 89n
console.log(typeof bigint)

// truthy and falsy - выражения
// falsy -> 0, 0n, '', "", ``, undefined, null, not a number, false

var el = '0'  // это не число а стринг

console.log(el ? "true" : "false")


// massiv - array
var array = [2, 'aidana', undefined, true, [], {}]
console.log(array)
console.log([4])
console.log([0])
console.log(array.length - 1)
// methods of array
var numbers = [12, 13, 14]
// 1) push
numbers.push (3,6,6) // added these numbers at the end
console.log(numbers)
// 2) concat
var newArr= numbers.concat([0,0])
// added some numbers in the new Array that has name newArr
// BUT it does not change the first array
console.log(newArr)
// 3) unshift
numbers.unshift(4)
// addes the number in the beginning of the array
console.log(numbers)
// 4) pop
//deletes only the last variable in array
// but saves it as a another variable
var lastNum= numbers.pop()
console.log(lastNum)
//5) join
// prevrashaet massiv v stroky
var joinNum = numbers.join()// v skobkah may add razdelyaushii symbol
console.log(joinNum)

// цикл FOR
for (var i=0; i<=100; i ++) {
    console.log(i)
}

var names = ['aidana', 'ainura', "atai", 'ashat' ,'bakai', 'jack', 'ana']
var blackList= ['jack', 'ana']

for (var i =0; i<names.length; i++) {
    if ( blackList.includes(names[i])) {
        console.warn(`${[i]} in blacklist`)
        continue
    }
    console.log(`Welcome dear guest, ${[i]}`)
}