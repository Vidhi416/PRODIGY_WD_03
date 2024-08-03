const boxes=document.querySelectorAll(".box");
const reset=document.querySelector(".rstbtn");
const newbtn=document.querySelector(".newbtn");
const msgbox=document.querySelector(".winner");
let msg=document.querySelector("#msg");
const pwc=document.querySelector(".comp");
const mp=document.querySelector(".user");

const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]




let val1,val2,val3;

let turnO=true;
let count=0;

boxes.forEach((box) => {
  box.addEventListener("click",()=>{
    console.log("clicked");
    count+=1;
    if(turnO)
        {
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        let iswinner=checkwinner();
        if(count===9 && !iswinner)
            drawgame();

        checkwinner();
        
})
})
const  checkwinner=()=>{
    for(let pattern of winpattern){
        val1=boxes[pattern[0]].innerText;
        val2=boxes[pattern[1]].innerText;
        val3=boxes[pattern[2]].innerText;
       if(val1!="" && val2!="" && val3!=""){
        if(val1===val2 && val2==val3){
            console.log("Winner ",val1);
        showwinner(val1);
        return true;
        }
       }

    }
}

const disableboxes=()=>{
  for(let box of boxes){
    box.disabled=true;
  }
}

const showwinner=(winner)=>
    {
        msg.innerText=`Winner is ${winner}`;
        msgbox.classList.remove("hide");
        disableboxes();
    }

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
      }
}   

const resetgame=()=>{
    val1="";
    val2="";
    val3="";
    count=0;
   turnO=true;
   enableboxes();
   msgbox.classList.add("hide");
}
newbtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);

const drawgame=()=>{
    msg.innerText=`Draw Game`;
    msgbox.classList.remove("hide");
    disableboxes();
}



                
              

