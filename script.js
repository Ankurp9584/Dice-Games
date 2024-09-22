let  image = document.getElementById("img");
let  image2 = document.getElementById("img2");
let num = (Math.floor(Math.random()*6)+1);
let num2 = (Math.floor(Math.random()*6)+1);
let attribute = image.setAttribute("src", `./images/dice${num}.png`);
let attribute2 = image2.setAttribute("src", `./images/dice${num2}.png`);

// console.log(num);
let winner = document.getElementById("winner");
if(num>num2){
    winner.innerText = "Player 1 Is Winner!!!";
}
else if(num<num2){
    winner.innerText = "Player 2 Is Winner!!!";
}
else{
    winner.innerText = "Match Tie!!!";
}
let reload = () => {
    window.location.reload();
}
document.getElementById("btn").addEventListener('click', reload);
