//– створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r (стрілочна функція)
//S=2πr(r+h)

const area_cylinder= (r,h) => 2 * Math.PI  * r * h;
console.log(area_cylinder(10,20));
