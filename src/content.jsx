import { useState } from 'react'
import './style/content.css'
import MemoryGame from './components/MemoryGame';

function MainContent() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <>
    <div className='mainContent'>
      <div className='scoreHolder'>
        <div className='currentScore'>Current score: {currentScore}</div>
        <div className='bestScore'>Best score: {bestScore}</div>
      </div>
      <MemoryGame cScore={currentScore} bScore={bestScore} updateCurrentScore={setCurrentScore} updateBestScore={setBestScore}></MemoryGame>
    </div>
    </>
  )
}

export default MainContent
