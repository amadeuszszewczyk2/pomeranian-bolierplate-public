class Player {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  scoreGoal() {
    const minute = Math.floor(Math.random() * 90) + 1; // Random minute between 1 and 90
    return `${this.getFullName()} scored at ${minute} minute`;
  }
}

class Team {
  constructor(name, color, players) {
    this.name = name;
    this.color = color;
    this.resetStats();
    this.playerArray = players || [];
  }

  resetStats() {
    this.score = 0;
    this.points = 0;
    this.matchesPlayed = 0;
    this.playedAgainst = [];
  }

  canPlay(opponent) {
    return (
      this.matchesPlayed < 8 && !this.playedAgainst.includes(opponent.name)
    );
  }

  playAgainst(opponent) {
    this.matchesPlayed++;
    opponent.matchesPlayed++;

    this.playedAgainst.push(opponent.name);
    opponent.playedAgainst.push(this.name);

    const teamAScore = Math.floor(Math.random() * 5);
    const teamBScore = Math.floor(Math.random() * 5);

    const gameMessage = this.getGameResultMessage(
      opponent,
      teamAScore,
      teamBScore
    );
    const goalMessages = this.getGoalMessages(opponent, teamAScore, teamBScore);

    return {
      message: gameMessage,
      goals: goalMessages,
    };
  }

  getGameResultMessage(opponent, teamAScore, teamBScore) {
    if (teamAScore > teamBScore) {
      this.points += 3;
      return `${this.name} vs ${opponent.name}: ${teamAScore}:${teamBScore}. ${this.name} wins!`;
    } else if (teamBScore > teamAScore) {
      opponent.points += 3;
      return `${this.name} vs ${opponent.name}: ${teamAScore}:${teamBScore}. ${opponent.name} wins!`;
    } else {
      this.points += 1;
      opponent.points += 1;
      return `${this.name} vs ${opponent.name}: ${teamAScore}:${teamBScore}. It's a draw!`;
    }
  }

  getGoalMessages(opponent, teamAScore, teamBScore) {
    const goalMessages = [];
    for (let i = 0; i < teamAScore; i++) {
      const randomPlayer = this.getRandomPlayer();
      goalMessages.push(`${randomPlayer.scoreGoal()} for ${this.name}`);
    }
    for (let i = 0; i < teamBScore; i++) {
      const randomPlayer = opponent.getRandomPlayer();
      goalMessages.push(`${randomPlayer.scoreGoal()} for ${opponent.name}`);
    }
    return goalMessages;
  }

  getRandomPlayer() {
    return this.playerArray[
      Math.floor(Math.random() * this.playerArray.length)
    ];
  }
}

const ALL_TEAMS = [
  new Team('Czechy', 'red', [
    new Player('Jan', 'Novák'),
    new Player('Lukáš', 'Dlouhý'),
    new Player('Petr', 'Krátký'),
    new Player('Tomáš', 'Malý'),
    new Player('Pavel', 'Velký'),
  ]),

  new Team('Albania', 'black', [
    new Player('Besnik', 'Hasani'),
    new Player('Arber', 'Rexha'),
    new Player('Bledar', 'Krasniqi'),
    new Player('Dritan', 'Shala'),
    new Player('Egzon', 'Berisha'),
  ]),

  new Team('Polska', 'white', [
    new Player('Robert', 'Lewandowski'),
    new Player('Piotr', 'Zieliński'),
    new Player('Matty', 'Cash'),
    new Player('Nicola', 'Zalewski'),
    new Player('Grzegorz', 'Krychowiak'),
  ]),

  new Team('Mołdawia', 'blue', [
    new Player('Sergiu', 'Popescu'),
    new Player('Vladimir', 'Ionescu'),
    new Player('Andrei', 'Mocanu'),
    new Player('Mihail', 'Vasile'),
    new Player('Dan', 'Negru'),
  ]),

  new Team('Wyspy Owcze', 'green', [
    new Player('Magnus', 'Johansen'),
    new Player('Eirikur', 'Petersen'),
    new Player('Hogni', 'Olsen'),
    new Player('Johannus', 'Nielsen'),
    new Player('Bjarni', 'Hansen'),
  ]),
];

export { Player, Team, ALL_TEAMS };
