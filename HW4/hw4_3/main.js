// ----------площа циліндра загальна-------- S=2πr(r+h)  ----------//
function cylinderAreaAll(r, h) {
    return 2 * Math.PI * r * (r + h);
}

// ----------площа циліндра бічна-------- S=2πrh  ----------//
function cylinderAreaSide(r, h) {
    return 2 * Math.PI * r * h;
}


function cylinderAreaSide1(r, h) {
    return 2 * Math.PI * r * h;
}

let resultSide = cylinderAreaSide1(40, 50);
console.log(resultSide)


//-1--Якщо потрібно використовувати результат далі (let resultSide, let result1) //
function cylinderAreaAll1(r, h) {
    return 2 * Math.PI * r * (r + h);
}

let result1 = cylinderAreaAll1(4, 3);
console.log(result1);


//--------2-------тільки вивести результат-----
function cylinderAreaAll2(r, h) {
    return 2 * Math.PI * r * (r + h);
}

console.log(cylinderAreaAll2(2, 3));


