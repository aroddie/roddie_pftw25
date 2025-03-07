import Camelid from "./components/Camelid"

function App() {
  const camelids = [
    {
      name: "Llama",
      img: "./llama.jpg",
      trivia: "Llamas produce coarse wool that is well suited for making rugs and ropes. They are generally less fluffy."
    },
    {
      name: "Alpaca",
      img: "alpaca.jpg",
      trivia: "Alpacas produce soft fleece that is well suited for high-quality garments. They are much fluffier, especially on their legs and top knots."
    }
  ]

  return (
    <div>
     <h1>Camelid Trivia</h1>
     <div className="camelidCompare">
        <Camelid 
          name={camelids[0].name} 
          img={camelids[0].img} 
          trivia={camelids[0].trivia} 
        />
        <Camelid 
          name={camelids[1].name} 
          img={camelids[1].img} 
          trivia={camelids[1].trivia} 
        />
    </div>
    </div>
  )
}

export default App
