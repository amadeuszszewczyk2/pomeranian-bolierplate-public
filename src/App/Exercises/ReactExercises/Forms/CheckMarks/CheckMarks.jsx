import React from 'react';

function CheckMarks({ name, options, selectedValues, onChange }) {
  const handleOptionChange = (optionValue) => {
    const updatedValues = selectedValues.includes(optionValue)
      ? selectedValues.filter((value) => value !== optionValue)
      : [...selectedValues, optionValue];
    onChange(updatedValues);
  };

  return (
    <div>
      {options.map((option) => {
        const { value: optionValue, label } = option;

        return (
          <div className="checkbox" key={`checkbox-${name}-${optionValue}`}>
            <input
              id={`checkbox-${name}-${optionValue}`}
              name={name}
              type="checkbox"
              value={optionValue}
              onChange={() => handleOptionChange(optionValue)}
              checked={selectedValues.includes(optionValue)}
            />
            <label htmlFor={`checkbox-${name}-${optionValue}`}>{label}</label>
          </div>
        );
      })}
    </div>
  );
}

export default CheckMarks;
