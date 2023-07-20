import React, { useState, useEffect } from 'react';

export function ExerciseThis() {

const person = {
    name: 'Maciej',
    sayHello() {
      console.log(this.name);
    },
  };

  person.sayHello();

  return (
    <div>
      Test
    </div>
  );
}

