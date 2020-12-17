// javascript

var cards = document.getElementsByClassName("card");
var slide = 0;
var moving = false;

// function setInitialClasses () {
//     cards[cards.length - 1].classList.add("prevCard");
//     cards[0].classList.add("active");
//     cards[1].classList.add("nextCard");
// }

function setEventListeners () {
    var next = document.getElementsByClassName("next")[0];
    var prev = document.getElementsByClassName("previous")[0];

    next.addEventListener("click", moveNext);
    prev.addEventListener("click", movePrev);
}

function moveNext() {
    if(!moving) {
        disableInteraction();
        cards.unshift(cards[cards.length - 1]); 
        cards.pop();
    //     if (slide === (cards.length - 1)) {
    //         slide = 0;
    //     } else {
    //         slide++;
    //     }
    }
}

function movePrev() {
    if(!moving) {
        disableInteraction();
        cards.push(cards[0]);
        cards.shift();
        // if (slide === 0) {
        //     slide = (cards.length - 1);
        // } else {
        //     slide--;
        // }
    }
}

function disableInteraction() {
    moving = true;
    setTimeout(function() {
        moving = false;
    }, 500);
}

function moveForward() {
    disableInteraction();
    cards.unshift(cards[cards.length - 1]); 
    cards.pop();   
}

function moveBack() {
    disableInteraction();
    cards.push(cards[0]);
    cards.shift();
}

// function moveCarouselTo(slide) {
//     if(!moving) {
//         disableInteraction();
        
//         var newPrev = slide - 1;
//         var newNext = slide + 1;
//         var oldPrev = slide - 2;
//     }
// }

