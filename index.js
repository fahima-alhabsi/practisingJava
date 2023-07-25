
let nameInputElement = document.getElementById("playerName")
nameInputElement.style.backgroundColor='red'


function showNameId(){
  
  var name = document.getElementById("playerName").value
var id = document.getElementById("playerId").value

    let p =document.createElement('p')
    let parentDiv =document.getElementById('div')
    p.innerText= "K"+ name +" my id is :"+ id
    parentDiv.appendChild(p)

}
