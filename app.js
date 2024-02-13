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
    level++;
    h2.innerText=`level ${level}`;
    let randIdx = Math.floor(Math.random() * 4);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    btnFlash (randBtn);
}






