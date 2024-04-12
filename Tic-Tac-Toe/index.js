let box = document.querySelectorAll(".box");
let turn0 = true;
let winpattern = [
[0, 1, 2],
[0, 3, 6],
[0, 4, 8],
[1, 4, 7],
[2, 5, 8],
[2, 4, 6],
[3, 4, 5],
[6, 7, 8],]
function Reset_game(){
   turn0 = true ;
   msgcontainer.classList.add("hide");
   box.forEach(box => {
    box.disabled = false;
    box.innerText="";
   });
}

box.forEach(box => {
    box.addEventListener("click", () => {
        
            if (turn0) {
                turn0 = false;
                box.innerText = "O"
            }
            else {
                turn0 = true;
                box.innerText = "X"
            }
         box.disabled = true ;
        check();
    })
})
let msg  = document.querySelector(".msg") ;
let msgcontainer = document.querySelector(".msg-container") ;
console.log(msgcontainer.classList)
function Show_Winner(win){
    msgcontainer.classList.remove("hide") ;
    msg.innerText = `The winner is : ${win}`;
    
    
}

function check() {
    winpattern.forEach(pattern => {
        let pos1 = box[pattern[0]].innerText;
        let pos2 = box[pattern[1]].innerText;
        let pos3 = box[pattern[2]].innerText;
        
        
        if( pos1 != "" && pos2 != "" && pos3 != "")
        {
          if(pos1 === pos2 && pos2 === pos3){
            // console.log("winner" ,pos1) ;
            Show_Winner(pos1);
          
            box.forEach(box => {
                box.disabled =true ;
            });

          }
          else{
            console.log("draw") ;
        }
        }
       
        

    })
}
let new_game = document.querySelector(".new-game") ;

let reset_btn = document.querySelector(".reset-btn")
reset_btn.addEventListener("click" , Reset_game)
new_game.addEventListener("click" , Reset_game)
/*
let boxes = document.querySelectorAll(".box");
let turnX = true;

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", () => {
        if (boxes[i].innerText === "" && turnX) {
            boxes[i].innerText = "X";
            turnX = !turnX;
        } else if (boxes[i].innerText === "" && !turnX) {
            boxes[i].innerText = "O";
            turnX = !turnX;
        }

        // Check if all boxes have been clicked
        let allBoxesClicked = true;
        for (let j = 0; j < boxes.length; j++) {
            if (boxes[j].innerText === "") {
                allBoxesClicked = false;
                break;
            }
        }

        // If all boxes have been clicked, disable all boxes
        if (allBoxesClicked) {
            for (let j = 0; j < boxes.length; j++) {
                boxes[j].disabled = true;
            }
        }
    });
}
*/