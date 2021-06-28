const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
var n=24,count=0;
var times = 0;
var counter=0;
var mins=0,seconds=0;
function push() {
    　setTimeout("location.reload()",1000);
}


//計時器
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function stopTimer() {
    clearTimeout(timex);
};

function reseTimer() {
    mins = 0; seconds = 0;
    $("#t1").text(checkTime(mins) + ":" + checkTime(seconds));
};

function startTimer() {
    timex = setTimeout(function () {
        seconds++;
        if (seconds > 59) {
            seconds = 0;
            mins++;
        }
        $("#t1").text(checkTime(mins) + ":" + checkTime(seconds));
        startTimer();
    }, 1000);
}
//翻牌
function flipCard() {
    if (counter == 0) {
        counter = 1;
        startTimer();
    }
  if (lockBoard) return;
  if (this === firstCard) return;
times+=1;
$("#count1").text("翻了"+Math.floor(times/2)+"次");
  this.classList.add('flip');

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;
    
    return;
  }

  // second click
  secondCard = this;

  checkForMatch();
 
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
 if (isMatch==true){
     count+=2;
 }
  isMatch ? disableCards() : unflipCards();
}
//檢查結束了沒
function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  if(count==n){
    $("#t2").text(checkTime(mins) + ":" + checkTime(seconds))
    stopTimer();
    $("#count2").text("翻了"+Math.floor(times/2)+"次")
    $(".endd").css("display","flex")
}
  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * n);
    card.style.order = randomPos;
    
  });
})();



cards.forEach(card => card.addEventListener('click', flipCard));

