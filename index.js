const cardArray = [
  {
    name: "dog",
    img: "./images/dog.png",
  },
  {
    name: "dog",
    img: "./images/dog.png",
  },
  {
    name: "fishbowl",
    img: "./images/fishbowl.png",
  },
  {
    name: "fishbowl",
    img: "./images/fishbowl.png",
  },
  {
    name: "unicorn",
    img: "./images/unicorn.png",
  },
  {
    name: "unicorn",
    img: "./images/unicorn.png",
  },
  {
    name: "playfulcat",
    img: "./images/playfulcat.png",
  },
  {
    name: "playfulcat",
    img: "./images/playfulcat.png",
  },
  {
    name: "chiling",
    img: "./images/chiling.png",
  },
  {
    name: "chiling",
    img: "./images/chiling.png",
  },
  {
    name: "happy",
    img: "./images/happy.png",
  },
  {
    name: "happy",
    img: "./images/happy.png",
  },
];

let cardChoosen = [];
let cardPair = 0;
const score = document.querySelector("#result");

const grid = document.querySelector(".grid");

const getCard = (node) => {
  return cardArray[node.getAttribute("data-id")];
};

//check for match
const checkSimilar = (cardChoosen) => {
  let card1 = getCard(cardChoosen[0]);
  let card2 = getCard(cardChoosen[1]);
  if (card1.name == card2.name) {
    cardPair += 1;
    score.textContent = cardPair;
    if (cardPair === cardArray.length / 2) {
      console.log("you win");
    }
  } else {
    console.log("in else");
    cardChoosen[0].style.pointerEvent = "all";
    cardChoosen[1].style.pointerEvent = "all";
    setTimeout(() => {
      cardChoosen[0].setAttribute("src", "./images/tile.png");
      cardChoosen[1].setAttribute("src", "./images/tile.png");
    }, 500);
  }
};

// filp card
const filpcard = (node) => {
  const card = getCard(node);
  node.setAttribute("src", card.img);
  cardChoosen.push(node);
  console.log(cardChoosen.length);
  if (cardChoosen.length == 2) {
    console.log("on card choosen");
    checkSimilar(cardChoosen);
    cardChoosen = [];
  } else if (cardChoosen.length < 2) {
    return;
  }
};

//create your board

const createBoard = () => {
  for (let i = 0; i < cardArray.length; ++i) {
    const card = document.createElement("img");
    card.setAttribute("src", "./images/tile.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", (e) => {
      if (e.target.style.pointerEvent != "none") {
        e.target.style.pointerEvent = "none";
        return filpcard(e.target);
      }
    });
    grid.appendChild(card);
  }
};

const newGame = () => {
  cardChoosen = [];
  cardPair = 0;
  score.textContent = cardPair;
  cardArray.sort(() => Math.random() - 0.5);
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
  createBoard();
};

const startBtn = document.querySelector(".start-game");

startBtn.addEventListener("click", newGame);
