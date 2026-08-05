// – Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

function User(id, name, surname, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.phone = phone;
}

let users = [
    new User(3, 'Daniil', 'Danya', '+3854785646'),
    new User(2, 'Taras', 'Teodor', '+2456418564816'),
    new User(6, 'Vitaliy', 'Italiy', '+68565448566'),
    new User(5, 'Igor', 'Tor', '+598797465445'),
    new User(1, 'Yurii', 'Messi', '+18565448566'),
    new User(4, 'Olga', 'Olyaroze', '+426442465'),
    new User(10, 'Vadim', 'Vindizel', '+104546643146'),
    new User(7, 'Jack', 'Jakson', '+712435435543'),
    new User(9, 'Pumba', 'Pum', '+9754648346'),
    new User(8, 'Timon', 'Tim', '+815463484385'),
];

// function sorter(u1,u2) {
//     return u1.id - u2.id;
// }
// console.log(users.sort(sorter));

console.log(users.sort((u1,u2) => u1.id - u2.id));