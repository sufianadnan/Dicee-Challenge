document.addEventListener("DOMContentLoaded", function() {
    const diceImages = [
      "./images/dice1.png",
      "./images/dice2.png",
      "./images/dice3.png",
      "./images/dice4.png",
      "./images/dice5.png",
      "./images/dice6.png",
    ];
  
    // Get references to the dice images and player paragraphs
    const img1 = document.querySelector(".img1");
    const img2 = document.querySelector(".img2");
    const player1 = document.querySelector(".dice p");
    const player2 = document.querySelectorAll(".dice p")[1];
  

    function updateWinner(diceValue1, diceValue2) {
        const winnerElement = document.getElementById("winner");
      
        if (diceValue1 > diceValue2) {
          winnerElement.textContent = "Player 1 wins!";
        } else if (diceValue2 > diceValue1) {
          winnerElement.textContent = "Player 2 wins!";
        } else {
          winnerElement.textContent = "It's a draw!";
        }
      }
    // Function to roll a random dice value (1 to 6)
    function rollDice() {
      return Math.floor(Math.random() * 6) + 1;
    }
  
    // Function to update the dice images and player text
    function updateDice() {
      const diceValue1 = rollDice();
      const diceValue2 = rollDice();
  
      img1.src = diceImages[diceValue1 - 1];
      img2.src = diceImages[diceValue2 - 1];
  
      player1.textContent = `Player 1: ${diceValue1}`;
      player2.textContent = `Player 2: ${diceValue2}`;
      updateWinner(diceValue1, diceValue2);
    }
  
    // Event listener for refreshing the dice
    const h1 = document.querySelector("h1");
    h1.addEventListener("click", updateDice);
  
    updateDice();
  });
  