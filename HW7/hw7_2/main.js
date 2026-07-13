//– Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)
function User(id, name, surname, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.phone = phone;
}

let users = [
    new User(1, 'Yurii', 'Messi', '+18565448566'),
    new User(2, 'Taras', 'Teodor', '+2456418564816'),
    new User(3, 'Daniil', 'Danya', '+3854785646'),
    new User(4, 'Olga', 'Olyaroze', '+426442465'),
    new User(5, 'Igor', 'Tor', '+598797465445'),
    new User(6, 'Vitaliy', 'Italiy', '+68565448566'),
    new User(7, 'Jack', 'Jakson', '+712435435543'),
    new User(8, 'Timon', 'Tim', '+815463484385'),
    new User(9, 'Pumba', 'Pum', '+9754648346'),
    new User(10, 'Vadim', 'Vindizel', '+104546643146')
]

// const filterFunction = (user) =>  user.id % 2 === 0;
// const usersFilter = users.filter (filterFunction);
// console.log(usersFilter);

const usersFilter = users.filter((user) => user.id % 2 === 0);
console.log(usersFilter);