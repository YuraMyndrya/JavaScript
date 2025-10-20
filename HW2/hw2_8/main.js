let day = +prompt("Enter day of week 1-31");
if (day >0 && day<=10 ) {
    console.log('1 third');
}else if (day >10 && day<=20) {
    console.log('2 third')
}else if (day >20 && day<32) {
    console.log('3 third')
}else {
    console.log('invalid value')
}
