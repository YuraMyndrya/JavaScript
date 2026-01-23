// function writer(productTitle, price, descr){
//     document.write(`
//     <div>
//         <h2> ${productTitle} ${price} </h2>
//         <p> ${descr}</p>
//     </div>
// `);
// }
//
// writer('milk', 32, 'good_milk');
// writer('meat', 260, 'chiken_meat');
// writer('bread', 20, 'white_bread');

//-----------------------------------------box_football--------------------------------//
// document.write("<h1>Spain football table</h1>")
//
// function football_table(team_name, grade, games, goal_difference) {
//     document.write(`<main class="table" >`)
//
//     document.write(`<div>${team_name}</div>`)
//     document.write(`<div>${grade}</div>`)
//     document.write(`<div>${games}</div>`)
//     document.write(`<div>${goal_difference}</div>`)
//
//     document.write(`</main>`)
// }
//
// football_table('Barcelona', 40, 15, 17);
// football_table('real_madrid', 39, 15, -3);
// football_table('Atl', 35, 15, 7);
// football_table('atletik', 28, 15, 2);
//
//
// document.write(`<hr>`)
//
//
// document.write("<h2> Mobile assesories </h2>")
//
// // -----------------------------------------box_cases--------------------------------//
// function assesories(name, price, model, in_stock) {
//     document.write(`<div class="box_main"> <h3>${name}: ${price} - ${model}, in stock: ${in_stock} </h3> </div>`);
// }
//
// assesories('чохол', '3$', 'apple 17 pro max', 'yes');
// assesories('чохол', '4.5$', 'apple 17 pro max magsafe', 'no');
// assesories('чохол', '2.5$', 'apple 16 pro ', 'yes');
// assesories('чохол', '2.7$', 'apple 16 pro magsafe', 'yes');
// assesories('скло', '1$', 'apple 17 pro', 'yes');
// assesories('скло', '1.5$', 'apple 17 pro max', 'no');
// assesories('скло', '0.8$', 'apple 16 pro ', 'yes');
//
// document.write(`<h1> ${item.name}, ${item.age}, ${item.email}</h1>`);


function nameoffunctions(some_massiv) {
    for (const item2 of some_massiv) {
        console.log(item2);
    }
}

let users2 = [
    {
        name: "Olena",
        age: 25,
        email: "olena@example.com"
    },

    {
        name: "Ivan",
        age: 30,
        email: "ivan@example.com"
    },

    {
        name: "Maria",
        age: 22,
        email: "maria@example.com"
    },

    {
        name: "Dmytro",
        age: 28,
        email: "dmytro@example.com"
    },

    {
        name: "Sofiia",
        age: 27,
        email: "sofiia@example.com"
    }
];
nameoffunctions(users2)

console.log(`-------------------------------------------------------------------------------------------`);

let products2 = [
    {name: "Яблуко", category: "Фрукти", price: 10, weight: "1 кг"},
    {name: "Банан", category: "Фрукти", price: 15, weight: "1 кг"},
    {name: "Молоко", category: "Молочні", price: 25, weight: "1 л"},
    {name: "Хліб", category: "Випічка", price: 20, weight: "0.5 кг"},
    {name: "Сир", category: "Молочні", price: 80, weight: "0.3 кг"},
    {name: "Картопля", category: "Овочі", price: 12, weight: "1 кг"},
    {name: "Морква", category: "Овочі", price: 8, weight: "1 кг"},
    {name: "Яйця", category: "Молочні", price: 40, weight: "10 шт"},
    {name: "Помідор", category: "Овочі", price: 18, weight: "1 кг"},
    {name: "Кефір", category: "Молочні", price: 22, weight: "1 л"},
];
nameoffunctions(products2)


// function nazva_func(zminna) {
//     for ( let item of zminna) {
//         console.log(item);
//     }
// }
// let products = [
//     { name: "Яблуко", category: "Фрукти", price: 10, weight: "1 кг" },
//     { name: "Банан", category: "Фрукти", price: 15, weight: "1 кг" },
//     { name: "Молоко", category: "Молочні", price: 25, weight: "1 л" },
//     { name: "Яйця", category: "Молочні", price: 40, weight: "10 шт" },
//     { name: "Помідор", category: "Овочі", price: 18, weight: "1 кг" },
//     { name: "Кефір", category: "Молочні", price: 22, weight: "1 л" },
// ];
// nazva_func(products);

console.log(`-------------------------------------------------------------------------------------------`);
function userfactory(imya, age, el_adress) {
    let user = {
        name: imya,
        age: age,
        email: el_adress,
    }
    return user;
}

let us1 = userfactory('Olena', 22, 'olena@example.com');
let us2 = userfactory('Igor', 34, 'Igor@example.com');
let us3 = userfactory('Babatunde', 21, 'Babatunde@example.com');
console.log(us1);
console.log(us2);
console.log(us3);