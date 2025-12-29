
//---------------------------------------------------------------------------------------------------------------------
let some_number1 = 15;
let some_number2 = 7;

//------------------------------ 1 варіант -----------------------------
let results = some_number1 - some_number2;
console.log('Resault:' + results);

//------------------------------ 2 варіант -----------------------------
let some_number3 = 25;
let some_number4 = 10;
console.log('Resault:'+(some_number3 - some_number4));
console.log('Resault:'+(some_number3 + some_number4));
console.log('Resault:'+(some_number3 * some_number4));
console.log('Resault:'+(some_number3 / some_number4));
console.log('Resault:'+(some_number3 % some_number4)); //-----залишок при діленні-------

//---------------------------------------------------------------------------------------------------------------------
let numb3 = 5;
let numb4 = '10';
console.log(numb3 + numb4);//-------- число 5 + текст '10' = все стає текстом '510'------------

let numb5 = 5;
let numb6 = Number('10'); //------переведення  тексту '10' в число 10-------- 1 варіант
console.log(numb5 + numb6);
//або...
let numb7 = 40;
let numb8 = '50';
console.log(numb7 + Number(numb8)); //------переведення  тексту '50' в число 50-------- 2 варіант

//---------------------------------------------------------------------------------------------------------------------
// скорочені математичні дії
numb7 += 22;                       //numb7 += 22;    =      numb7 = numb7 + 22;
console.log(numb7)//62
numb7 -= 57;
console.log(numb7)//5
numb7 *= 3;
console.log(numb7)//15
numb7 /= 10;
console.log(numb7)//1.5
numb7 %= 1;
console.log(numb7)//0.5
numb7 ++;
console.log(numb7)//1.5        // додавання 1
numb7 --;
console.log(numb7)//1.5        // віднімання 1

//---------------------------------------------------------------------------------------------------------------------

let numbpi = Math.PI;
console.log(numbpi);

let numb9 = Math.E;
console.log(Math.E);
//=
console.log(numb9);
//---------------------------------
console.log(Math.min(1,5,7)); // (Math.min(1,5,7))  = виводить найменше число
console.log(Math.max(1,5,7)); // (Math.min(1,5,7))  = виводить найбільше число
