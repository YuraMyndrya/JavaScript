// #nkMXISv
// – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об’єктами Client

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
    new Client(1, 'Yurii', 'Messi', '111@gmail.com', '+18565448566', new Product('tv', 11000), new Product('phone', 1000)),
    new Client(2, 'Taras', 'Teodor', '111@gmail.com', '+2456418564816', new Product('tv', 21000), new Product('phone', 2000)),
    new Client(3, 'Daniil', 'Danya', '111@gmail.com', '+3854785646', new Product('tv', 31000), new Product('phone', 3000)),
    new Client(4, 'Olga', 'Olyaroze', '111@gmail.com', '+426442465', new Product('tv', 41000), new Product('phone', 4000)),
    new Client(5, 'Igor', 'Tor', '111@gmail.com', '+598797465445', new Product('tv', 51000), new Product('phone', 5000)),
    new Client(6, 'Vitaliy', 'Italiy', '111@gmail.com', '+68565448566', new Product('tv', 61000), new Product('phone', 6000)),
    new Client(7, 'Jack', 'Jakson', '111@gmail.com', '+712435435543', new Product('tv', 71000), new Product('phone', 7000)),
    new Client(8, 'Timon', 'Tim', '111@gmail.com', '+815463484385', new Product('tv', 81000), new Product('phone', 8000)),
    new Client(9, 'Pumba', 'Pum', '111@gmail.com', '+9754648346', new Product('tv', 91000), new Product('phone', 9000)),
    new Client(10, 'Vadim', 'Vindizel', '111@gmail.com', '+104546643146', new Product('tv', 110000), new Product('phone', 10000)),
];

console.log(Clients);