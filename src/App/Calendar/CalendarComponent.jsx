import React, { useState } from 'react';

const Calendar1 = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // Zakładając, że chcesz zakres lat od 1990 do obecnego roku
  const years = Array.from(
    { length: new Date().getFullYear() - 1989 },
    (_, i) => 1990 + i
  );

  const handleMonthChange = (e) => {
    const newMonth = parseInt(e.target.value, 10);
    setDate((prevDate) => new Date(prevDate.getFullYear(), newMonth));
  };

  const handleYearChange = (e) => {
    const newYear = parseInt(e.target.value, 10);
    setDate((prevDate) => new Date(newYear, prevDate.getMonth()));
  };

  const handlePrevMonth = () => {
    const prevMonth = new Date(date.getFullYear(), date.getMonth() - 1);
    setDate(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(date.getFullYear(), date.getMonth() + 1);
    setDate(nextMonth);
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const renderCalendar = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = (new Date(year, month, 1).getDay() + 6) % 7;

    const calendar = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendar.push(<div className="calendar-day empty" key={`empty-${i}`} />);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = new Date(year, month, i);
      const isCurrentDay =
        currentDate.toDateString() === new Date().toDateString();
      const isSelected = selectedDay === i;
      const isWeekend =
        currentDate.getDay() === 0 || currentDate.getDay() === 6;

      calendar.push(
        <div
          className={`calendar-day ${isCurrentDay ? 'current-day' : ''} ${
            isSelected ? 'selected' : ''
          } ${isWeekend ? 'weekend' : ''}`}
          key={`day-${i}`}
          onClick={() => handleDayClick(i)}
        >
          {i}
        </div>
      );
    }

    return calendar;
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>&lt;</button>
        <select value={date.getMonth()} onChange={handleMonthChange}>
          {months.map((month, index) => (
            <option key={month} value={index}>
              {month}
            </option>
          ))}
        </select>
        <select value={date.getFullYear()} onChange={handleYearChange}>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="calendar-weekdays">
        {daysOfWeek.map((day) => (
          <div className="calendar-weekday" key={day}>
            {day}
          </div>
        ))}
      </div>
      <div className="calendar-days">{renderCalendar()}</div>
    </div>
  );
};

export default Calendar1;
