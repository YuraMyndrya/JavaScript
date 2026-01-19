// function writer(productTitle, price, descr){
//     document.write(`
//     <div>
//         <h2> ${productTitle} ${price} </h2>
//         <p> ${descr}</p>
//     </div>
// `);
// }
//
// writer('milk', 32, 'good_milk');
// writer('meat', 260, 'chiken_meat');
// writer('bread', 20, 'white_bread');




document.write("<h1>Spain football table</h1>")
function football_table(team_name,grade, games, goal_difference) {

    document.write(`<main class="table" >`)

      document.write(`<div>${team_name}</div>`)
      document.write(`<div>${grade}</div>`)
      document.write(`<div>${games}</div>`)
      document.write(`<div>${goal_difference}</div>`)

    document.write(`</main>`)

}

football_table('Barcelona',40, 15, 15);
football_table('real_madrid' , 39,15, -3);
football_table('Atl',35, 15, 7);