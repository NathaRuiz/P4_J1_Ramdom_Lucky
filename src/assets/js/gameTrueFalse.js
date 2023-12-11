let No = 0;
let Si = 0;
let coin = document.querySelector("#coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");

flipBtn.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";
    if(i){
        setTimeout(function(){
            coin.style.animation = "spin-no 3s forwards";
        }, 100);
        No++;
    }
    else {
        setTimeout(function(){
            coin.style.animation = "spin-si 3s forwards";
        }, 100);
        Si++;
    }
    setTimeout(updateStats, 3000);
    disableButton();
});

function updateStats(){
    document.querySelector("#no-count").textContent = `No: ${No}`;
    document.querySelector("#si-count").textContent = `Si: ${Si}`;}


function disableButton(){
    flipBtn.disabled = true;
    setTimeout(function(){
        flipBtn.disabled = false;
    },3000);
}


resetBtn.addEventListener('click',() => {
    coin.style.animation = "none";
    No = 0;
    Si = 0;
    updateStats();
});
