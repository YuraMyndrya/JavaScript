function arrayMinValue(numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let number = numbers[i];
        if (number < min) {
            min = number;
        }
    }

    return min;
}

console.log(arrayMinValue([9, 2, 3, 4, 5, 6, 7]));


function maxValue(numbers) {
    let max = numbers[0];
    for (let a = 1; a < numbers.length; a++) {
        let number = numbers[a];
        if (number > max) {
            max = number;
        }
    }

    return max;
}

console.log(maxValue([9, 2, 3, 4,10004, 5, 6, 7,]));