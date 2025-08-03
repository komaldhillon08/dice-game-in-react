import './App.css'
import Home from './components/Home'
import Score from "./components/Score.jsx"
import { BrowserRouter , Route, Routes } from 'react-router-dom'
function App() {
  return (
  
        <div className="container">
         <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}  />
            <Route path='/game' element={<Score/>}  />
          </Routes>
         
         </BrowserRouter>
        </div>
      
  
  )
}

export default App
