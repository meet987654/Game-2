let boxes= document.querySelectorAll(".box");
let resetBn = document.querySelector("#reset");
let msgcont = document.querySelector(".msg");
let winmsg = document.querySelector("#winmsg");
let newbtn = document.querySelector("#newbtn");

let turnO= true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was clicked");

        if(turnO){
        box.innerText="X";
        turnO=false;
        }
        else{
            box.innerText="O";
        turnO=true;
        }
        box.disabled=true;

        checkWinner();
    })

})

const resetgame= () =>{
    turnO=true;
    enableboxes();
    msgcont.classList.add("hide");
}

let enableboxes= () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}



let disableboxes= () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}

let showWin= (pos1) =>{
    winmsg.innerText=`Congratulations,Winner is  ${pos1}`;
    msgcont.classList.remove("hide");
    disableboxes();
}

const checkWinner= () =>{
    for(pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
    if(pos1!=0 && pos2!=0 && pos3!=0)
        if (pos1==pos2 && pos2==pos3){
            console.log("winner is",pos1);

            showWin(pos1);
        }
    }
}

newbtn.addEventListener("click",()=>{
    resetgame()
});
resetBn.addEventListener("click",()=>{
    resetgame()
});