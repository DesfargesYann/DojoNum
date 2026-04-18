import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Accueil } from './Pages/Accueil.jsx'
import { PageProfil } from './Pages/PageProfil.jsx'
import { PageQuiz } from './Pages/PageQuiz.jsx'

function App() {
  // Route path="/" route par défaut

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Accueil/>}/> 
        <Route path="/PageQuiz" element={<PageQuiz/>}/> 
        <Route path="/PageProfil" element={<PageProfil/>}/> 
      </Routes>
    </Router>
    </>
  )
}

export default App
