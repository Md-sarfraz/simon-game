let userSeq=[];
let gameSeq=[];
let started=false;
let level=0;
let btns=["yellow","red", "purple","green"];
let h2=document.querySelector("h2");



startBtn=document.querySelector(".start-btn button");
console.log(startBtn)
startBtn.addEventListener("click",function(){
    if(started==false)
    {
        started=true;
    }
    levelUp();
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 200);
}
 
 function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;
    let randIdx = Math.floor(Math.random() * 4);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor)
    console.log(gameSeq)
    btnFlash (randBtn);
}
function checkAns(idx){
    // console.log("current level :",level)
    // let idx=level-1;
    if(userSeq[idx]==gameSeq[idx])
    {
        if(userSeq.length==gameSeq.length){
           setTimeout(levelUp,1000)
        }
    }
    else{
        h2.innerHTML=`Game Over! Your Score Was <b>${level}</b> press any keys to start`
        document.querySelector("body").style.backgroundColor="red"
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"
        },150)
         reset();
    }
}

 function btnPress(){
    let btn=this;
    btnFlash(btn);
    userColor=btn.getAttribute("id")
    userSeq.push(userColor)
    console.log(userSeq)
    checkAns(userSeq.length-1);
}
allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
started=false
gameSeq=[];
userSeq=[];
level=0;
}
