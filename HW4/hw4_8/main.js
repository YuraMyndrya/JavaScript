function massive(arrayOfPrimitive) {
    document.write('<ul>');
    for (const item of arrayOfPrimitive) {
        document.write(`<li>${item}</li>`);
    }
    document.write('</ul>');

}

massive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'okten', true]);