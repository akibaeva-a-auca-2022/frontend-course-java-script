for (var i = 0; i < 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log('FizzBuz')
    } else if (i % 5 === 0) {
        console.log('Buzz')
    } else if (i % 3 === 0 && i) {
        console.log('Fizz')
    } else {
        console.log(i)
    }
}