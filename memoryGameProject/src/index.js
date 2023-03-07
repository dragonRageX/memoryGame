let resultDisplay = document.querySelector(".result");
let cardsArray = [
    {
        name: "cheeseburger",
        image: "images/cheeseburger.png"
    },
    {
        name: "fries",
        image: "images/fries.png"
    },
    {
        name: "hotdog",
        image: "images/hotdog.png"
    },
    {
        name: "ice-cream",
        image: "images/ice-cream.png"
    },
    {
        name: "milkshake",
        image: "images/milkshake.png"
    },
    {
        name: "pizza",
        image: "images/pizza.png"
    },
    {
        name: "cheeseburger",
        image: "images/cheeseburger.png"
    },
    {
        name: "fries",
        image: "images/fries.png"
    },
    {
        name: "hotdog",
        image: "images/hotdog.png"
    },
    {
        name: "ice-cream",
        image: "images/ice-cream.png"
    },
    {
        name: "milkshake",
        image: "images/milkshake.png"
    },
    {
        name: "pizza",
        image: "images/pizza.png"
    }
];
cardsArray.sort(() => 0.5 - Math.random())   //THIS IS DONE TO SORT THE ELEMENTS OF THE ARRAY RANDOMLY.
console.log(cardsArray);
let grid = document.querySelector(".grid");

for(let i = 0; i < cardsArray.length; i++)
{
    let card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    grid.appendChild(card);
}

let unmatchedCardsLeftOnTheGrid = document.querySelectorAll("img");
console.log(unmatchedCardsLeftOnTheGrid);
let cardsChosen = [];
let cardsChosenIds = [];

function flipCard()
{
    let cardId = this.getAttribute("data-id");   //THIS LINE RETRIEVES THE data-id OF THE CARD THAT IS clicked.
    this.setAttribute("src", cardsArray[cardId].image);
    if(cardsChosen.length <= 1 && cardsChosenIds.length <= 1)
    {
        cardsChosen.push(cardsArray[cardId]);
        cardsChosenIds.push(cardId);
        if(cardsChosen.length === 2 && cardsChosenIds.length === 2)
        {
            setTimeout(checkForMatch, 700);
        }
        console.log(cardsChosen);
        console.log(cardsChosenIds)
    }
    else if(cardsChosen.length >= 2 && cardsChosenIds.length >= 2)
    {
        alert("You can choose only 2 cards at a time!");
        unmatchedCardsLeftOnTheGrid[cardsChosenIds[0]].setAttribute("src", "images/blank.png");
        unmatchedCardsLeftOnTheGrid[cardsChosenIds[1]].setAttribute("src", "images/blank.png");
        cardsChosen = [];
        cardsChosenIds = [];
    }
}

let score = 0;
function checkForMatch()
{
    if(cardsChosenIds[0] === cardsChosenIds[1])
    {
        alert("You have chosen the same card twice!");
        unmatchedCardsLeftOnTheGrid[cardsChosenIds[0]].setAttribute("src", "images/blank.png");
        unmatchedCardsLeftOnTheGrid[cardsChosenIds[1]].setAttribute("src", "images/blank.png");
        cardsChosen = [];
        cardsChosenIds = [];
    }
    else
    {
        if(cardsChosen[0].name === cardsChosen[1].name)
        {
            unmatchedCardsLeftOnTheGrid[cardsChosenIds[0]].setAttribute("src", "images/white.png");
            unmatchedCardsLeftOnTheGrid[cardsChosenIds[1]].setAttribute("src", "images/white.png");
            unmatchedCardsLeftOnTheGrid[cardsChosenIds[0]].removeEventListener("click", flipCard);
            unmatchedCardsLeftOnTheGrid[cardsChosenIds[1]].removeEventListener("click", flipCard);
            cardsChosen = [];
            cardsChosenIds = [];
            score = score + 10;
            resultDisplay.innerHTML = score;
            if(score === 60)
            {
                resultDisplay.innerHTML = "Congratulations! You have won! 🥳🎊🎉";
            }
        }
        else
        {        
            unmatchedCardsLeftOnTheGrid[cardsChosenIds[0]].setAttribute("src", "images/blank.png");
            unmatchedCardsLeftOnTheGrid[cardsChosenIds[1]].setAttribute("src", "images/blank.png");
            cardsChosen = [];
            cardsChosenIds = [];
        }
    }
}
