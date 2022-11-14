import  RainWorld  from './Components/RainWorld' 
import  DownPour  from './Components/DownPour' 
import  Credits  from './Components/Credits' 
import  Footer from './Components/Footer' 
import './App.css'

export default App => {
  return(
    <div className="container">
        <RainWorld />
        {/* <DownPour />
        <Credits />
        <Footer /> */}
    </div>
  )
}