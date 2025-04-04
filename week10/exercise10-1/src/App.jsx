import { Link, Route, Routes } from 'react-router-dom'
import { Home } from './views/Home'
import { Llamas } from './views/Llamas'
import { Alpacas } from './views/Alpacas'
import './App.css'

function App() {


  return (
    <div>
      <ul className="nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/llamas">Llamas</Link></li>
        <li><Link to="/alpacas">Alpacas</Link></li>
      </ul>
      {/* Routes Here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/llamas" element={<Llamas />} />
        <Route path="/alpacas" element={<Alpacas />} />
      </Routes>
    </div>
  )
}

export default App
