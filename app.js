const game = () => {
  let pScore = 0;
  let cScore = 0;

  //funcion que empieza el juego
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  //jugar partido
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });
    //opciones de la computadora
    const computerOptions = ["roca", "papel", "tijera"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        //seleccion de opciones de la computadora
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          //aca llamamos a la funcion compareHands
          compareHands(this.textContent, computerChoice);
          //actualizar imagenes
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);

        //animacion
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    //actualizar texto
    const winner = document.querySelector(".winner");
    //buscar empate
    if (playerChoice === computerChoice) {
      winner.textContent = "Empate";
      return;
    }
    // comprobamos si hay roca
    if (playerChoice === "roca") {
      if (computerChoice === "tijera") {
        winner.textContent = "Jugador wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computadora wins";
        cScore++;
        updateScore();
        return;
      }
    }

    //comprobamos si hay papel

    if (playerChoice === "papel") {
      if (computerChoice === "tijera") {
        winner.textContent = "Computadora wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Jugador wins";
        pScore++;
        updateScore();
        return;
      }
    }

    //comprobamos si hay tijera

    if (playerChoice === "tijera") {
      if (computerChoice === "roca") {
        winner.textContent = "Computadora wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Jugador wins";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  //llamar a todas las funciones internas
  startGame();
  playMatch();
};

//funcion que llama al juego
game();
