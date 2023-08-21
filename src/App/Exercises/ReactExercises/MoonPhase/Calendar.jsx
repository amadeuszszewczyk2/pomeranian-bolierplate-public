import React, { useState, useEffect } from 'react';
import './styles.css';

const Calendar = ({ selectedDate, onDateChange }) => {
  const [date, setDate] = useState(selectedDate || new Date());
  const [selectedDay, setSelectedDay] = useState(selectedDate.getDate());

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  useEffect(() => {
    setSelectedDay(selectedDate.getDate());
  }, [selectedDate]);

  const handleYearChange = (event) => {
    const selectedYear = parseInt(event.target.value);
    const newDate = new Date(date);
    newDate.setFullYear(selectedYear);
    setDate(newDate);
  };

  const handleMonthChange = (event) => {
    const selectedMonth = parseInt(event.target.value);
    const newDate = new Date(date);
    newDate.setMonth(selectedMonth);
    setDate(newDate);
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
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
    const newDate = new Date(date.getFullYear(), date.getMonth(), day);
    onDateChange(newDate);
  };

  const renderYearOptions = () => {
    const years = [];
    for (let year = 1970; year <= 2050; year++) {
      years.push(
        <option value={year} key={year}>
          {year}
        </option>
      );
    }
    return years;
  };

  const renderMonthOptions = () => {
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
    return months.map((month, index) => (
      <option value={index} key={index}>
        {month}
      </option>
    ));
  };

  const renderCalendar = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);

    const calendar = [];

    let emptyCells = (firstDayOfMonth + 6) % 7;

    for (let i = 0; i < emptyCells; i++) {
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
          <span className="day-number">{i}</span>
          {isCurrentDay && <span className="tooltip">Today</span>}
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
          {renderMonthOptions()}
        </select>
        <select value={date.getFullYear()} onChange={handleYearChange}>
          {renderYearOptions()}
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

export default Calendar;
