//--------------------------1----------------------
function list(someText) {
    document.write(`
<ul>
     <li>${someText}</li>
     <li>${someText}</li>
     <li>${someText}</li>
  
</ul>
`)

}

list('hi, okten');


//--------------------------2----------------------
function list2(Name1, Name2, Name3, Name4, Name5) {
    document.write(`
    
                <ol type="A">
                      <li>${Name1}</li>
                      <li>${Name2}</li>
                      <li>${Name3}</li>
                      <li>${Name4}</li>
                      <li>${Name5}</li>
                </ol>
    
    `)
}

list2('Player1', 'Player2', 'Player3', 'Player4', 'Player5');