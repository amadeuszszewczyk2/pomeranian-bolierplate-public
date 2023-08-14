import React from 'react';

function RadioButtons({ name, options, value, onChange }) {
  return (
    <div>
      {options.map((option) => {
        const { value: optionValue, label } = option;

        return (
          <div className="radio" key={`radio-${name}-${optionValue}`}>
            <input
              id={`radio-${name}-${optionValue}`}
              name={name}
              type="radio"
              value={optionValue}
              onChange={(event) => onChange(name, event.target.value)}
              checked={optionValue === value}
            />
            <label htmlFor={`radio-${name}-${optionValue}`}>{label}</label>
          </div>
        );
      })}
    </div>
  );
}

export default RadioButtons;
