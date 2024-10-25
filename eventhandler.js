const EventEmitter = require("events");

const store = new EventEmitter();

store.on("bonusShirt", (numberOfShirts) => {
  console.log(
    `Congratulations! You bought ${numberOfShirts} shirts. You've earned a bonus shirt!`
  );
});

function buyShirts(quantity) {
  console.log(`You have bought ${quantity} shirt(s).`);

  if (quantity >= 3) {
    store.emit("bonusShirt", quantity);
  }
}
buyShirts(3);
buyShirts(5);
