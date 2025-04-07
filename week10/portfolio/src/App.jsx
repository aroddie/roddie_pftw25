import { Routes, Route } from "react-router-dom";
import './App.css'
import { Home } from "./views/Home";
import { Project } from "./views/Project";
import portfolioData from "./assets/portfolio-data.json"

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":slug" element={<Project data={portfolioData} />} />
      </Routes>
    </>
  )
}

export default App
