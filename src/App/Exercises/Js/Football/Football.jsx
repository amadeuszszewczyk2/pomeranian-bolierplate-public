import React, { useState } from 'react';
import { ALL_TEAMS } from './models';
import Leaderboard from './Leaderboard';
import './styles.css';

export function Exercise10092023() {
  const [currentMatch, setCurrentMatch] = useState(null);
  const [result, setResult] = useState({
    message: null,
    goals: [],
    yellowCards: [],
    redCards: [],
    fouls: [],
  });

  const resetTournament = () => {
    ALL_TEAMS.forEach((team) => {
      team.resetStats();
    });
    setResult({
      message: null,
      goals: [],
      yellowCards: [],
      redCards: [],
      fouls: [],
    });
  };

  const allMatchesPlayed = () => {
    return ALL_TEAMS.every((team) => team.matchesPlayed === 8);
  };

  const playGame = () => {
    const match = getNextMatchup();

    if (!match) {
      setResult({
        message: 'All matches completed!',
        goals: [],
        yellowCards: [],
        redCards: [],
        fouls: [],
      });
      return;
    }

    setCurrentMatch(match);
    const teamA = ALL_TEAMS[match[0]];
    const teamB = ALL_TEAMS[match[1]];

    const gameResult = teamA.playAgainst(teamB);

    const events = randomizeEvents(teamA, teamB);
    setResult({
      ...gameResult,
      yellowCards: events.yellowCards,
      redCards: events.redCards,
      fouls: events.fouls,
    });
  };

  const getNextMatchup = () => {
    for (let i = 0; i < ALL_TEAMS.length - 1; i++) {
      for (let j = i + 1; j < ALL_TEAMS.length; j++) {
        if (canTeamsPlay(ALL_TEAMS[i], ALL_TEAMS[j])) {
          return [i, j];
        }
      }
    }
    return null;
  };

  const canTeamsPlay = (teamA, teamB) => {
    const timesPlayed = teamA.playedAgainst.filter(
      (name) => name === teamB.name
    ).length;
    return (
      teamA.matchesPlayed < 8 && teamB.matchesPlayed < 8 && timesPlayed < 2
    );
  };

  const tournamentSummary = () => {
    let summary = 'Tournament Summary:\n';
    ALL_TEAMS.sort((a, b) => b.points - a.points);
    ALL_TEAMS.forEach((team, index) => {
      summary += `${index + 1}. ${team.name} - ${team.points} points\n`;
    });

    summary += `\nAdvanced: ${ALL_TEAMS[0].name} and ${ALL_TEAMS[1].name}`;
    return summary;
  };

  const randomizeEvents = (teamA, teamB) => {
    const events = {
      yellowCards: [],
      redCards: [],
      fouls: [],
    };

    if (Math.random() < 0.5) {
      events.yellowCards.push(`${teamA.name} received a yellow card.`);
    }
    if (Math.random() < 0.5) {
      events.yellowCards.push(`${teamB.name} received a yellow card.`);
    }
    if (Math.random() < 0.05) {
      events.redCards.push(`${teamA.name} received a red card.`);
    }
    if (Math.random() < 0.05) {
      events.redCards.push(`${teamB.name} received a red card.`);
    }
    if (Math.random() < 0.7) {
      events.fouls.push(`${teamA.name} committed a foul.`);
    }
    if (Math.random() < 0.7) {
      events.fouls.push(`${teamB.name} committed a foul.`);
    }

    return events;
  };

  return (
    <div className="game-container__soccer">
      <h1>UEFA Euro 2024 Qualifiers</h1>
      {!allMatchesPlayed() ? (
        <button className="button__play-next-game" onClick={playGame}>
          Play Match
        </button>
      ) : (
        <div>
          <button
            className="button__reset-tournament"
            onClick={resetTournament}
          >
            Start the tournament over
          </button>
          <pre className="tournament-summary">{tournamentSummary()}</pre>
        </div>
      )}
      {result.message && (
        <p className="message__game-result">{result.message}</p>
      )}
      <ul>
        {result.goals.map((goal, index) => (
          <li key={`goal-${index}`}>
            <strong>{goal}</strong>
          </li>
        ))}
        {result.yellowCards.map((card, index) => (
          <li key={`yc-${index}`}>{card}</li>
        ))}
        {result.redCards.map((card, index) => (
          <li key={`rc-${index}`}>{card}</li>
        ))}
        {result.fouls.map((foul, index) => (
          <li key={`foul-${index}`}>{foul}</li>
        ))}
      </ul>
      <Leaderboard />
    </div>
  );
}
