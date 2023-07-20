import React, { useState, useEffect } from 'react';
import './styles.css'
import { ApiCallExercise } from './ApiCall'

export function ExerciseTry4() {
  const [getPost, setPosts] = useState()

  return (
    <div className='cointainer--try-catch'>
      <ApiCallExercise />
    </div>
  );
}



