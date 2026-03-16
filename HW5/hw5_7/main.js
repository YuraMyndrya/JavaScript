// створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

const list = (text, howManyBoxes) => {
    document.write('<ul>')
    for (let i = 0; i < howManyBoxes; i++) {
        document.write(`<li><h2 class="styleh2">${text}</h2></li>`)
    }
    document.write('</ul>')
}

list ('someText',3)