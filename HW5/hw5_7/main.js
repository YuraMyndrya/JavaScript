// створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

const list = (text, howManyBoxes) => {
    document.write('<ul>')
    for (let i = 0; i < howManyBoxes; i++) {
        document.write(`<li><h2>${text}</h2></li>`)
    }
    document.write('</ul>')
}

list ('someText',3)

const list2 = (text2, howMany2) => {
    document.write( '<div>' )
    for (let i = 0; i < howMany2; i++) {
        document.write  (`<h2>${text2}</h2>`)
    }
    document.write ('</div>')
}

list2('OK',5)