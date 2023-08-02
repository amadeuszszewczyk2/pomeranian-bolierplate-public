import React from 'react'; 

function Message({ textColor, text, test123 }) {
  console.log(test123);
  return (
    <h1 style={{ color: textColor }}>
      {text} ({textColor})
    </h1>
  );
}

export function ExerciseTry77() {
  return (
    <div>
      <Message text="wazna wiadomość" textColor="green" />
      <Message text="super wazna wiadomość" textColor="pink" test123={123} />
    </div>
  );
}

