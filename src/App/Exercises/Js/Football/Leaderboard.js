import React from 'react';
import { ALL_TEAMS } from './models';

function Leaderboard() {
  return (
    <div>
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Team</th>
            <th>Matches Played</th> {/* Nowa kolumna */}
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {ALL_TEAMS.sort((a, b) => b.points - a.points).map((team, idx) => (
            <tr key={idx}>
              <td>{team.name}</td>
              <td>{team.matchesPlayed}</td>
              <td>{team.points}</td>
              {/* Wyświetlenie liczby rozegranych meczów */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
