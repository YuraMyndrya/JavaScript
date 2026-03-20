//-----------------------main-----------------------------------------//
function foobar(itWasText, itWasHowManyLi) {
    document.write('<ul>');
    for (let i = 0; i < itWasHowManyLi; i++) {
        document.write(`<li>${itWasText}</li>`)
    }
    document.write('</ul>');
}

foobar('OOOOOOOOOOkten is Cooooooooooool', 10);


//---------------------------------------------------------------------//
function my(itWasName, itWasHowManyDiv) {
    document.write('<div class="box_main">');

    for (let a = 0; a < itWasHowManyDiv; a++) {
        document.write(`<div class="box_in"> ${itWasName} </div>`)
    }

    document.write('</div>');
}

my('Name', 7);