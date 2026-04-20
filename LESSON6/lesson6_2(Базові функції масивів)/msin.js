let arr = [];
let arr2 = [11,22,33];
let str = 'HeLLo oktenL';

console.log(Array.isArray(arr));
console.log(arr.push('new element1'));// ---push--- створює новий елемент додає в кінець масиву
console.log(arr.push('new element2'));
console.log(arr.push('new element3'));
console.log(arr.push('new element4'));
console.log(arr.push('new element5'));
console.log(arr);

arr.pop(); //---pop--- видаляє останній елемент  масиву
console.log(arr);

arr.unshift('startOfMassive1_1'); // ---unshift---додає елемент на початок масиву
console.log(arr);

console.log(arr.shift());// ---shift--- видаляє елемент на початку масиву
arr.shift()// видаляє елемент/об'єкт на початку масиву
console.log(arr);

let join = arr.join('----'); // ---join--- об'єднує всі елементи масиву в один рядок та розділяє вказаним в  лапках
console.log(join);

let concat_Arr1_Arr2 = arr.concat(arr2) // -----concat-----б’єднує два масиви  в один новий масив
console.log(concat_Arr1_Arr2);

console.log(arr2);
arr2.reverse(); // ---reverse--- Зворотній порядок масиву
console.log(arr2);

let masSlice = concat_Arr1_Arr2.slice(0,3); //---slice--- обрізає залишаючи тільки вказані діапазони між індексами
// НЕ включно 3
console.log(masSlice);

let Some_massiv = masSlice.splice(1,1,'1-st new ','2-d new '); // ---splice--- змінює сам масив
// Водночас повертає видалені елементи у вигляді нового масиву
console.log(masSlice);
console.log(Some_massiv); // Some_massiv це видалений елемент 1 шт
console.log(masSlice); // новий масив з доданими елементами


//-------------------------------------------
console.log(concat_Arr1_Arr2);

//---unshift--- додав на початок масиву новий_елемент1
concat_Arr1_Arr2.unshift('new element1');
console.log(concat_Arr1_Arr2);


//---- indexOf------ знаходить місце/положення/індекс де саме знаходиться вказаний елемент
console.log(concat_Arr1_Arr2.indexOf(11));

//-- знайшов індекс елементу 11 та  вирізав 1 елемент
concat_Arr1_Arr2.splice(concat_Arr1_Arr2.indexOf(11),1);


//---includes---це метод масиву, який перевіряє, чи містить масив певний елемент.
console.log(concat_Arr1_Arr2.includes(22));

//---includes---це метод масиву, який перевіряє, чи містить стрінга певний елемент.
console.log(str.includes('L'));










