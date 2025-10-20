// let temps = [
//     { day: 'Monday', value: [3, 11, 6] },
//     { day: 'Tuesday', value: [10, 15, 12] },
//     { day: 'Wednesday', value: [8, 10, 4] },
//     { day: 'Thursday', value: [12, 14, 10] },
//     { day: 'Friday', value: [14, 16, 12] },
//     { day: 'Saturday', value: [16, 18, 14] },
//     { day: 'Sunday', value: [20, 22, 20] },
// ]
// console.log(temps[3].day, temps[3].value[2]);
// console.log (temps[6]);

let temps = [
    { day: 'Monday', morning: 3 , afternoon: 11, evening: 6 },
    { day: 'Tuesday', morning: 10, afternoon: 15, evening: 12 },
    { day: 'Wednesday', morning: 8, afternoon: 10, evening: 4 },
    { day: 'Thursday', morning: 12, afternoon: 14, evening: 10},
    { day: 'Friday', morning: 14, afternoon: 16, evening: 12},
    { day: 'Saturday', morning: 16, afternoon: 18, evening: 14},
    { day: 'Sunday', morning: 20, afternoon: 22, evening: 20},
]

console.log(temps[0].day, temps[0].evening);
console.log(temps[1].day, temps[1].morning, temps[1].afternoon);
console.log(temps[2].day, temps[2].evening);
console.log(temps[3]);
console.log(temps[4].day, temps[4].evening);
console.log(temps[5].day, temps[5].morning);
console.log(temps[6]);

