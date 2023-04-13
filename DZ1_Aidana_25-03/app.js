var day = Number(prompt('Введите ДЕНЬ вашего рождения'))
var month = prompt('Введите МЕСЯЦ вашего рождения')

if (day<=0 ) {
    console.error('error')
}

else if (day >= 21 && day<=31 && month === "март" || day <= 20 && month === 'апрель') {
    console.log('Ваш знак зодиака -  овен')
}
else if (day >= 21 && day<=30 && month === 'апрель' || day <= 21 && month === 'май') {
    console.log('Ваш знак зодиака -  телец')
}
else if (day >= 22 && day<=31 && month === "май" || day <= 21 && month === 'июнь') {
    console.log('Ваш знак зодиака -  близнецы')
}
else if (day >= 22 && day<=30 && month === "июнь" || day <= 22 && month === 'июль') {
    console.log('Ваш знак зодиака -  рак')
}
else if (day >= 23 && day<=31 && month === "июль" || day <= 21 && month === 'август') {
    console.log('Ваш знак зодиака -  лев')
}
else if (day >= 22 && day<=31 && month === 'август' || day <= 23 && month === 'сентябрь') {
    console.log('Ваш знак зодиака -  дева')
}
else if (day >= 24 && day<=30 && month === "сентябрь" || day <= 23 && month === 'октябрь') {
    console.log('Ваш знак зодиака -  весы')
}
else if (day >= 24 && day<=31 && month === "октябрь" || day <= 22 && month === 'ноябрь') {
    console.log('Ваш знак зодиака -  скорпион')
}
else if (day >= 23 && day<=30 && month === "ноябрь" || day <= 22 && month === 'декабрь') {
    console.log('Ваш знак зодиака -  стрелец')
}
else if (day >= 23 && day<=31 && month === "декабрь" || day <= 20 && month === 'январь') {
    console.log('Ваш знак зодиака -  козерог')
}
else if (day >= 21 && day<=31 && month === "январь" || day <= 19 && month === 'февраль') {
    console.log('Ваш знак зодиака -  водолей')
}
else if (day >= 20 && day<=29 && month === "феваль" || day <= 20 && month === 'март') {
    console.log('Ваш знак зодиака -  рыбы')
}
else {
    console.error('error')
 }