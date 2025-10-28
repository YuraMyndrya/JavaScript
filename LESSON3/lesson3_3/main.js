// let users = [
//     {name: 'vasya', age: 31, status: true},
//     {name: 'petya', age: 33, status: false},
//     {name: 'anna', age: 28, status: true},
//     {name: 'olya', age: 29, status: false},
//     {name: 'emma', age: 25, status: true},
//     {name: 'nadya', age: 27, status: false},
//     {name: 'stas', age: 30, status: true},
//     {name: 'taras', age: 32, status: false},
//     {name: 'dmytro', age: 26, status: true},
//     {name: 'yura', age: 34, status: false},
//     {name: 'vova', age: 24, status: true},
// ]
//
// // for (let i = 0; i < users.length; i++) {
// //     let user = users[i];
// //     document.write(`<h2> ${user.name}, ${user.age} - ${user.status} </h2>`);
// // }
//
// //itar + enter , побудує останній цикл який був
//
// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     document.write(`<h6> ${user.name}, ${user.age} - ${user.status} </h6>`);
// }


let products = [
    {title: 'juse', price: 100, image: 'https://images.silpo.ua/v2/products/1600x1600/webp/7210e0e5-9b72-43ed-80b1-84a1fcfc6a93.png'},
    {title: 'milk', price: 200, image: 'https://image.maudau.com.ua/webp/size/lg/products/19/b1/12/19b112190d7327cf0edcdd56223c00f1.jpg'},
    {title: 'tomato', price: 300, image: 'https://internet-kaplya.com.ua/upload/iblock/6a4/6a40016ca74c5083d32f9091c8428e3d.jpg'},
    {title: 'tea', price: 400, image: 'https://cdn.27.ua/799/61/c7/7102919_1.jpeg'},
]

for (let i = 0; i < products.length; i++) {
    let product = products[i];
    document.write
    (`<div class="target">
        <h3> ${product.title}, ${product.price} - UAH</h3>
        <img src="${product.image}" alt="">
    </div>`);
}

