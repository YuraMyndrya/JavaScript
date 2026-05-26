// створити масив книжок (назва, кількість сторінок, автори , жанри).

const books = [
    {
        title: "Harry Potter1",
        pages: 412,
        author: ["Stiv Jobs","Stiven Spilberg"],
        genre: "fantasy"
    },

    {
        title: "Harry Potter2 Room",
        pages: 511,
        author: ["Stiven Spilberg"],
        genre: ["fantasy","сomedy"]
    },

    {
        title: "Harry Potter3",
        pages: 543,
        author: ["Stiv Jobs"],
        genre:"fantasy" ,
    },
]

// – знайти найбільшу книжку.
let maxPages = books[0];
for (let i = 1; i < books.length; i++) {
    if (books[i].pages > maxPages.pages) {
        maxPages = books[i]
    }
}
console.log(maxPages.title);


// – знайти книжку/ки з найбільшою кількістю жанрів
let maxGenre = books[0];
for (let a = 1; a < books.length; a++) {
    if (books[a].genre > maxGenre.genre) {
        maxGenre = books[a]
    }
}
console.log(maxGenre.title);
// – знайти книжку/ки з найдовшою назвою

let maxTitle = books[0]
for (let b = 1; b < books.length; b++) {
    if (books[b].title.length > maxTitle.title.length) {
        maxTitle = books[b]
    }
}
console.log(maxTitle.title);

// – знайти книжку/ки, які писали 2 автори
// for (let c = 0; c < books.length; c++) {
//     if (books[c].author.length === 2 ) {
//         console.log(books[c].title);
//     }
// }

for (const book of books) {
    if (book.author.length === 2) {
        console.log(book.title);
    }
}


console.log('--------------------------');
// – знайти книжку/ки, які писав 1 автор
for (const book of books) {
    if (book.author.length === 1) {
        console.log(book.title);
    }
}

