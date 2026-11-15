import { useState, useEffect } from 'react'
import Assingment from './Assingment'

function App() {
  const [time, setTime] = useState(0)
  const [isrunning, setIsrunning] = useState(false)

  useEffect(()=>{
  let timerId;
  if (isrunning) {
    timerId = setInterval(()=> {
    setTime((prev)=> prev + 1);
    },1000)
  }
  
  return ()=> clearInterval(timerId)
    
  },[isrunning] )

  const handleStart = ()=> {
    setIsrunning(true)
  }
  const handleStop = ()=>{
    setIsrunning(false)
  }
  const handleReset = ()=>{
    setIsrunning(false)
    setTime(0)
  }

  return (
    <>
      {/* assingment 0r exercise */}
      <Assingment/>

      {/* lesson */}
      {/* <h2>Stop watch {time} seconds</h2>
      <button disabled={isrunning} onClick={handleStart}>Start</button>
      <button disabled={!isrunning} onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button> */}
    </>
  )
}

export default App
