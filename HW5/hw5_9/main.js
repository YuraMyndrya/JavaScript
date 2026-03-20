//– створити функцію, яка приймає масив об’єктів з наступними полями
// id,name,age , та виводить їх в документ.
// Для кожного об’єкту окремий блок.

const objectList = (users) => {
    for (const user of users) {
        document.write ( `<div> ${user.id}, ${user.name}, ${user.age}, </div>` )
    }
}

objectList ([
    {id:1,name:'Iryna',age:25},
    {id:2,name:'Jordan',age:27},
    {id:3,name:'Silva',age:19},
    {id:4,name:'Filip',age:29},
    {id:5,name:'Sergio',age:32},
])
