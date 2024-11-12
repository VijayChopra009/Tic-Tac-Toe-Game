let boxes = document.querySelectorAll(".box");
let container = document.querySelector(".container");
let reset = document.querySelector(".reset");
let msgcontainer=document.querySelector(".msg-container");
let newgame=document.querySelector("#new-game");
let msg=document.querySelector("#msg");

let turn0 = true;
const winArray = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "X"
            turn0 = false;
        } else {
            box.innerText = "O"
            turn0 = true;
        }
        box.disabled = true;
        winner();
    })
})

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText= "";
        container.classList.remove("hide");
        reset.classList.remove("hide")
    document.querySelector("h1").classList.remove("hide");

    }
}
const showWinner =(winner)=>{
    msg.innerText =`Congratulations, Winner is ${winner}`
    msgcontainer.classList.remove("hide");
    container.classList.add("hide");
    reset.classList.add("hide")
    document.querySelector("h1").classList.add("hide");
    disableBoxes();
}

const resetGame = () =>{
    turn0 =true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}
const winner = () => {
    for (const i of winArray) {
        let first = boxes[i[0]].innerText;
        let second = boxes[i[1]].innerText;
        let third = boxes[i[2]].innerText;
        if (first != "" && second != "" && third != "") {
       if(first == second && second == third){
        showWinner(first);
       }
        }
    }
}

reset.addEventListener("click",resetGame);
newgame.addEventListener("click",resetGame);