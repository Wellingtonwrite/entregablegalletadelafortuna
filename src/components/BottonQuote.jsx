import getRandomElemArray from "../utils/getRandomElemArray"

const BtnQuote = ({setQuote, phrases, setNumberBg}) => {

  const handleRandomPhrase = () => {
      setQuote(getRandomElemArray(phrases))
      setNumberBg(getRandomElemArray([1, 2, 3, 4]))
  }
    return (
      <button className='container_btn' onClick={handleRandomPhrase}>Cookie</button>
    )
  }
  
  export default BtnQuote