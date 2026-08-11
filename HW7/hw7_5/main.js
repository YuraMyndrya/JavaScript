function Client(id, name, surname, email, phone, ...products) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = products;
}

function Product(nazvatovaru, tsina) {
    this.tittle = nazvatovaru;
    this.price = tsina;
}

let Clients = [
    new Client(1, 'Taras', 'Teodor', '111@gmail.com', '+2456418564816', new Product('phone', 2000)),
    new Client(2, 'Yurii', 'Messi', '111@gmail.com', '+18565448566', new Product('tv', 11000), new Product('phone', 1000), new Product('soundbar', 86000)),
    new Client(3, 'Daniil', 'Danya', '111@gmail.com', '+3854785646', new Product('tv', 31000), new Product('phone', 3000)),
    new Client(4, 'Olga', 'Olyaroze', '111@gmail.com', '+426442465', new Product('tv', 41000), new Product('phone', 4000)),
    new Client(5, 'Igor', 'Tor', '111@gmail.com', '+598797465445', new Product('tv', 51000), new Product('phone', 5000)),
    new Client(6, 'Vitaliy', 'Italiy', '111@gmail.com', '+68565448566', new Product('tv', 764100), new Product('phone', 6000)),
    new Client(7, 'Jack', 'Jakson', '111@gmail.com', '+712435435543', new Product('tv', 4700)),
    new Client(8, 'Timon', 'Tim', '111@gmail.com', '+815463484385', new Product('tv', 83008), new Product('phone', 8000), new Product('iphone', 778000), new Product('telephone', 6565000)),
    new Client(9, 'Pumba', 'Pum', '111@gmail.com', '+9754648346', new Product('tv', 91000), new Product('phone', 9000)),
    new Client(10, 'Vadim', 'Vindizel', '111@gmail.com', '+104546643146', new Product('tv', 110000), new Product('phone', 10000)),
];
console.log(Clients);

// function Cl(one,two, ...products) {
//     this.id = one;
//     this.surname = two;
//     this.order2 = products;
// }
//
// function Prod(tovar , tsina2) {
//     this.tittle2 = tovar;
//     this.price2 = tsina2;
// }
//
// let Clients2 = [
//     new Cl(1, 'Yurii', new Prod('tv', 11000), new Prod('phone', 1000)),
//     new Cl(2, 'Taras',  new Prod('tv', 21000), new Prod('phone', 2000)),
//     new Cl(3, 'Daniil',  new Prod('tv', 31000), new Prod('phone', 3000)),
// ];
//
// console.log(Clients2);

const sorter = Clients.sort((a, b) => a.order.length - b.order.length);
console.log(sorter);
