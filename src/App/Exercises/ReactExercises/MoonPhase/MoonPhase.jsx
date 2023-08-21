import React, { useState } from 'react';
import './styles.css';
import Calendar from './Calendar.jsx';

const phases = ['🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘'];

export function MoonPhaseApp() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleChangeDate = (date) => {
    setSelectedDate(date);
  };

  const moonPhaseIndex = (date) => {
    const phase = date.getDate() / 30; // Assuming 30 days per lunar cycle
    return Math.floor(phase * phases.length) % phases.length;
  };

  return (
    <div className="moon-phase-app">
      <h1>Faza księżyca</h1>
      <div className="moon-phase-display">
        <div className="moon">{phases[moonPhaseIndex(selectedDate)]}</div>
      </div>
      <div className="mooncalendar">
        <Calendar selectedDate={selectedDate} onDateChange={handleChangeDate} />
      </div>
    </div>
  );
}

export default MoonPhaseApp;
