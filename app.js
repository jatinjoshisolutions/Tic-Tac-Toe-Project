let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#resetButton");
let newGameBtn = document.querySelector("#newGame");
let msgContainer = document.querySelector(".winingContainer");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
  [0,1,2],[0,3,6],[0,4,8],
  [1,4,7],[2,5,8],[2,4,6],
  [3,4,5],[6,7,8]
];

const showWinner = (winner) => {
  msg.innerText = `Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};
// this function disables the button is ny one win
const disableBoxes=() =>{
    for(let box of boxes){
        box.disabled= true;
    }
}
const enbaleBoxes=() =>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText="";
    }
}
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("Winner found");
        showWinner(pos1);
      } else {
        console.log("tie");
      }
    }
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const resetGame=() =>{
    turnO=true;
    enbaleBoxes();
    msgContainer.classList.add("hide");
    


}

// This define when will bethe new game button triggred 
newGameBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
