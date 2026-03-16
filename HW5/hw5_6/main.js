//– створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

const list = (someText) =>
    document.write
    (`<ul>
       <li><h1>${someText}</h1></li> 
       <li><h2>${someText}</h2></li>
       <li><h2>${someText}</h2></li>
    </ul>`)

list('okten is cool');