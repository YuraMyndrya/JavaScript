function foobar() {
    console.log(arguments);
    if (arguments.length === 2) {
        return (arguments[0] + arguments[1]);
    } else if (arguments.length === 3) {
        return (arguments[0] + arguments[1] + arguments[2]);
    } else {
        return ("not right");
    }

}

console.log(foobar(1, 2));
console.log(foobar(3, 4, 5));
console.log(foobar(3, 4, 5, 6));


console.log('---------------------------------------------------------------------------------');

function foobar2() {
    console.log(arguments);
    if (arguments.length === 2) {
        return (arguments[0] + arguments[1]);
    } else if (arguments.length === 3) {
        return (arguments[0] + arguments[1] + arguments[2]);
    } else {
        return ('to match');
    }

}

console.log(foobar2(101, 35));
console.log(foobar2(141, 33, 148));
console.log(foobar2(141, 35, 141, 22));


console.log('--------------------------------------');

function foobar3() {
    console.log(arguments);
    if (arguments.length === 1) {
        return (arguments[0] * 10);
    } else if (arguments.length === 2) {
        return (arguments[0] * arguments[1]);
    }
}

console.log(foobar3(2));
console.log(foobar3(2, 4));
