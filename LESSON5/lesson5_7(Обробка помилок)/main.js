console.log('------------start1-----------');

console.log('start1');
try {
    console.log(a);
} catch (e) {
    console.log(e);
    //console.error(e); <-- або так: це виділить помилку червоним в консолі
} finally {
    console.log('finally block');
}

console.log('end1');

console.log('------------start2 з catch -----------');

console.log('start2');
try {
    console.log(b);
} catch (e) {
    console.log(`catch (e) - виконання коду не зупиняється , "b" not found, та продовження коду далі`);
} finally {
    console.log('finally block - виконується завжди');
}
console.log('end2');


console.log('------------start3 БЕЗ catch -----------');

console.log('start3');
try {
    console.log(c);
} finally {
    console.log(`БЕЗ catch виконання коду зупиняється ,  тому що "с" не існує ,  код зупиняється , але finally виконається завжди finally block - виконується завжди`);
}
console.log('end3');