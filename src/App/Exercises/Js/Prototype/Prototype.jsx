import React, { useState, useEffect } from 'react';

export function ExercisePrototype() {
  
function Car(make, model) {
  this.make = make;
  this.model = model;
};

Object.prototype.getMake = function() {
return this.make;
};

Object.prototype.getModel = function(){
return this.model;
};

const myCar = new Car('Toyota', 'Camry');
const myCarTwo = new Car('Fiat', '50');


Array.prototype.newArrayMethod = function () {
console.log('new Array');
};

const exampleArray = [1, 2, 3];

  return (
      <div>
       Make: {myCar.getMake()};
       Model: {myCar.getModel()};
       Make: {myCarTwo.getMake()};
       Model: {myCarTwo.getModel()};
       Array: {exampleArray}
      </div>
    );
  };

