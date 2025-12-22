let products = [

    {
        title: 'milk',
        price: 22,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOJDosJVsQj0P-kykfa-aGNX54PI-DMIhYEQ&s'
    },

    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },

    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },

    {
        title:'tea',
        price: 15,
        image: 'https://korisno.com.ua/image/cache/catalog/product001/3083/chay-v-paketah-asort-fruktovo-yag-dniy-20sht-hello-tea-1-600x600.png'
    },
];

for ( const product of products) {

document.write (`

<div class="product_card">
    <h3 class="product_title">${product.title}: Price-${product.price}</h3>
    <img src="${product.image}" alt="" class="product_image">
</div>

`)

}

