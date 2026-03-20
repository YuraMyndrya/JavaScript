//– створити функцію, яка приймає масив примітивних елементів
// (числа,стрінги,булеві), та будує для них список

const buildList = (arr) => {
    document.write ('<ul>')
    for (const item of arr) {
        document.write (`<li> ${item} </li>`)
    }

    document.write ('</ul>')
}

buildList([5,7,8,4,1,2,'Oleksandr',true])