import { useState } from 'react'

import './App.css'
import quotes from '../src/quotes.json'
import QuoteBox from '../components/QuoteBox'
import AuthorCite from '../components/AuthorCite'

function App() {

  const numbersRandom = (value) => {
    const random = Math.floor(Math.random() * value.length)
    return random
  }
  
  const colors = ['#fbc4ab','#cbf3f0','#98fb98','#d8bbff','#b0e0e6','#d8bfd8','#f4a460','#dda0dd','#c0c0f5','#76c893','#cd9777','#ffd700','#cd5c5c']
  const bgColor = numbersRandom(colors)

  document.body.style = `background: ${colors[bgColor]}`
  

  const [position, setPosition] = useState(numbersRandom(quotes))
  const changeIndex = () => { setPosition(numbersRandom(quotes)) }

  return (
    <div className='App' style={{color: colors[bgColor]}}>

      <div className='mainCard'>
          <QuoteBox cita={quotes[position]} color={colors[bgColor]}/>
          <AuthorCite cita={quotes[position]}/>
          <button onClick={changeIndex} style={{background: `${colors[bgColor]}`}}><i class="fa-solid fa-angles-right"></i></button>
      </div>
    </div>
  )
}

export default App
