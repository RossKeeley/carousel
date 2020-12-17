var cards = document.getElementsByClassName("card");
var cardsArray = [...cards];

function setEventListeners () {
    var next = document.getElementsByClassName("next")[0];
    var prev = document.getElementsByClassName("previous")[0];

    next.addEventListener("click", moveNext);
    prev.addEventListener("click", movePrev);
}

function moveNext() {
        cardsArray.unshift(cardsArray[cardsArray.length - 1]);
        cardsArray.pop();
        document.getElementsByClassName("gallery")[0].innerHTML = `<img src="${cardsArray[0].src}">`;
}

function movePrev() {
        cardsArray.push(cardsArray[0]);
        cardsArray.shift();
        document.getElementsByClassName("gallery")[0].innerHTML = `<img src="${cardsArray[0].src}">`;
}
setEventListeners();
