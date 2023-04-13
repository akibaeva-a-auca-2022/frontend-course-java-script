var drinks =['milk', 'beer', 'beer', 'milk', 'milk', 'water', 'juice']
var goodDrink = ['milk']
var badDrink = ['beer']

for (var i=0; i<drinks.length; i++) {
    if (goodDrink.includes(drinks[i])) {
        console.log('good')
    } else if (badDrink.includes(drinks[i])) {
        console.log('bad')
    } else {
        console.log('neutral')
    }
}