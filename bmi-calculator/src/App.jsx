import { useMemo, useState } from 'react';
import './App.css'

function App() {

  const [weight,setWeight]=useState(80);
  const [height,setHeight]=useState(150);

  const output=useMemo(()=>{
    const calculateHeight =height /100;

    return(weight/(calculateHeight*calculateHeight)).toFixed(1);
  },[weight,height]); 

  return(
      <main>
        <h1>BMI Calculator</h1>

        <div className='input-section'>
          <p className='slider-output'>Weight:{weight} kg</p>
          <input className='"input-slider' type='range'
            step="1"
            min="40"
            max="200"
            onChange={(e)=> setWeight(e .target.value)}
          />
          <p className='slider-output'>Height:{height} cm</p>
          <input className='"input-slider' 
          type='range'
           min="140"
            max="220"
          onChange={(e)=> setHeight(e.target.value)}
          />
        </div>
        <div className='output-section'>
              <p>BMI is :</p>
              <p className='output'>{output}</p>
        </div>
      </main>
  )
}

export default App
