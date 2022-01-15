const cards = [
  "1 de Espada",
  "2 de Espada",
  "3 de Espada",
  "4 de Espada",
  "5 de Espada",
  "6 de Espada",
  "7 de Espada",
  "10 de Espada",
  "11 de Espada",
  "12 de Espada",
  "1 de Basto",
  "2 de Basto",
  "3 de Basto",
  "4 de Basto",
  "5 de Basto",
  "6 de Basto",
  "7 de Basto",
  "10 de Basto",
  "11 de Basto",
  "12 de Basto",
  "1 de Copa",
  "2 de Copa",
  "3 de Copa",
  "4 de Copa",
  "5 de Copa",
  "6 de Copa",
  "7 de Copa",
  "10 de Copa",
  "11 de Copa",
  "12 de Copa",
  "1 de Oro",
  "2 de Oro",
  "3 de Oro",
  "4 de Oro",
  "5 de Oro",
  "6 de Oro",
  "7 de Oro",
  "10 de Oro",
  "11 de Oro",
  "12 de Oro",
];

const powerOrder = [
  "1 de Espada",
  "1 de Basto",
  "7 de Espada",
  "7 de Oro",
  "3",
  "2",
  "1",
  "12",
  "11",
  "10",
  "7",
  "6",
  "5",
  "4",
];

let playerCards: string[] = [];
let machineCards: string[] = [];
let rounds: string[] = [];

function shuffle(array: string[]) {
  var m = array.length,
    t,
    i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
}

function dealCards() {
  shuffle(cards);
  // console.log(cards);

  for (let i = 0; i < 3; i++) {
    let random1 = Math.floor(Math.random() * cards.length - 1);
    playerCards.push(cards[random1]);
    cards.splice(random1, 1);

    machineCards.push(cards[random1]);
    cards.splice(random1, 1);
  }
}

function checkWinnerCard(playerCard: string, machineCard: string) {
  let player;
  let machine;

  if (checkForSpecialCard(playerCard)) {
    player = playerCard;
  } else {
    player = playerCard.split(" ")[0];
  }

  if (checkForSpecialCard(machineCard)) {
    machine = machineCard;
  } else {
    machine = machineCard.split(" ")[0];
  }

  const indexOfPlayerCard = powerOrder.indexOf(player);

  const indexOfMachineCard = powerOrder.indexOf(machine);

  if (indexOfPlayerCard < indexOfMachineCard) {
    console.log(`Player wins: ${playerCard} vs. ${machineCard}`);
  } else if (indexOfMachineCard < indexOfPlayerCard) {
    console.log(`Machine wins: ${machineCard} vs. ${playerCard}`);
  } else {
    console.log(`Draw: ${playerCard} vs. ${machineCard} `);
  }

  // console.log({ machine, player, indexOfPlayerCard, indexOfMachineCard });
}

function checkForSpecialCard(card: string): boolean {
  switch (card) {
    case "1 de Espada":
      return true;
    case "1 de Basto":
      return true;
    case "7 de Espada":
      return true;
    case "7 de Oro":
      return true;
    default:
      return false;
  }
}

function checkCardsForEnvido(cards: string[]) {
  let espada: string[] = [];
  let basto: string[] = [];
  let copa: string[] = [];
  let oro: string[] = [];

  cards.forEach((card) => {
    if (card.includes("Espada")) {
      return espada.push(card);
    } else if (card.includes("Basto")) {
      return basto.push(card);
    } else if (card.includes("Copa")) {
      return copa.push(card);
    } else {
      return oro.push(card);
    }
  });

  let counter: number[] = [];
  let envido: number = 0;

  if (espada.length >= 2) {
    espada.forEach((card) => {
      counter.push(parseInt(card.split(" ")[0]));
    });
  } else if (basto.length >= 2) {
    basto.forEach((card) => {
      counter.push(parseInt(card.split(" ")[0]));
    });
  } else if (copa.length >= 2) {
    copa.forEach((card) => {
      counter.push(parseInt(card.split(" ")[0]));
    });
  } else if (oro.length >= 2) {
    oro.forEach((card) => {
      counter.push(parseInt(card.split(" ")[0]));
    });
  }

  if (counter.length >= 2) {
    envido = counter.reduce((acc, val) => {
      if (val >= 10) return acc;
      return acc + val;
    }, 20);
  }

  //   console.log({ espada, basto, copa, oro });
  console.log(counter);
  console.log(envido);
}

dealCards();
checkCardsForEnvido(playerCards);
console.log("player:", playerCards);
// console.log("machine:", machineCards);
// checkWinnerCard(playerCards[0], machineCards[0]);
// checkWinnerCard(playerCards[1], machineCards[1]);
// checkWinnerCard(playerCards[2], machineCards[2]);
