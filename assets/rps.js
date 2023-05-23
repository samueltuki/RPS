const options = document.querySelectorAll(".options");
    let pScore = 0;
    let cScore = 0;

    options.forEach((option) => {
      option.addEventListener("click", function () {
        const pInput = this.value;

        const cOptions = ["Rock", "Paper", "Scissors"];
        const cInput = cOptions[Math.floor(Math.random() * 3)];

        updateMoves(pInput, cInput);
        compareInputs(pInput, cInput);
        updateScore();
        if(checkWinner()){
          pScore = cScore= 0;
          updateScore();
        }
      });
    });

    function updateMoves(pInput, cInput){
      document.getElementById("p-move").src = `./assets/${pInput}.svg`;
      document.getElementById("c-move").src = `./assets/${cInput}.svg`;
    }


    function compareInputs(pInput, cInput) {
      const currentMatch = `${pInput} vs ${cInput}`;
      if (pInput === cInput) {
        alert(`${currentMatch} is a Tie`);
        return;
      }

      if (pInput === "Rock") {
        if (cInput === "Scissors") {
          alert(`${currentMatch} = You Win`);
          pScore++;
        } else {
          alert(`${currentMatch} = Computer Wins`);
          cScore++;
        }
      }
      //Check for Paper
      else if (pInput === "Paper") {
        if (cInput === "Rock") {
          alert(`${currentMatch} = You Win`);
          pScore++;
        } else {
          alert(`${currentMatch} = Computer Wins`);
          cScore++;
        }
      }
      //Check for Scissors
      else {
        if (cInput === "Paper") {
          alert(`${currentMatch} = You Win`);
          pScore++;
        } else {
          alert(`${currentMatch} = Computer Wins`);
          cScore++;
        }
      }
    }

    function updateScore() {
      document.getElementById("p-score").textContent = pScore;
      document.getElementById("c-score").textContent = cScore;
    }

    function checkWinner() {
      if (pScore === 5 || cScore === 5) {
        const winner =
          pScore === 5
            ? "You win the game! Congratulations!"
            : "Computer wins the game! Try again next time!";
        alert(winner);
        return true;
      }
      return false;
    }















// // variables to hold result
// let wins = 0;
// let looses = 0;
// let draw = 0;

// // array for AI's choices
// let aiChoices = ["r", "p", "s"];

// // wrapping the the game in a for loop  to it runs 5 times
// for (let i = 0; i < 5; i++) {
//   // collecting user choices and converting it tolowerCase to ensure accurate comparison and case-insensitivity
  



// }
