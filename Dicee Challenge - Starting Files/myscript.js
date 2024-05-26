const try1=document.querySelector("#p1");
const text1=prompt("Enter the name of first Player:");
try1.innerText=text1;
let h1=document.querySelector("h1");

let gobtn= document.querySelector(".gobtn");

const try2=document.querySelector("#p2");
const text2=prompt("Enter the name of Second Player:");
try2.innerText=text2;

const dices=["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"];


//if you will implement id instead of class in img attribute
// img1.src= dices[rand1];
// img2.src= dices[rand2];


gobtn.addEventListener("click",()=>{

    var rand1=Math.floor(Math.random()*6);
    var rand2=Math.floor(Math.random()*6);

    document.querySelector(".img1").src= dices[rand1];
    document.querySelector(".img2").src= dices[rand2];

    if(rand1>rand2){
        h1.innerText=(text1+" has won the game");
    }
    else if(rand1<rand2){
        h1.innerText=(text2+" has won the game");
    }
    else{
        h1.innerText=("The match has draw:");
    }

})

