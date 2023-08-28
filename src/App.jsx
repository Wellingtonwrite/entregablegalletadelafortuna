import { useState } from 'react'
import './index.css'
import './App.css'
import BtnQuote from './components/BottonQuote'
import Quote from './components/Quote'
import phrases from './utils/phrases.json'
import getRandomElemArray from './utils/getRandomElemArray'




function App() {

const phraseRamdon = getRandomElemArray(phrases)
const numberRandom = getRandomElemArray([1, 2, 3, 4])

  const [quote, setQuote] = useState(phraseRamdon)
  const [numberBg, setNumberBg] = useState(numberRandom)
  
  
  const bgStyle = {
    backgroundImage: `url(/fondo${numberBg}.jpg)`

  }
  return (

    <div className='container' style={bgStyle}>
      <h1 className='container__title'>Galleta de la fortuna</h1>

      <Quote phrase={quote} />
      <BtnQuote  
      setQuote={setQuote} 
      phrases={phrases} 
      setNumberBg = {setNumberBg}
      />
        </div>

  )

}

export default App
