

function App() {
  let llamaFacts = [
    "Llamas are related to camels", 
    "Llamas reach maturity around 2 to 3 years of age", 
    "Llamas weigh roughly 24 lbs at birth", 
    "The Emperor's New Groove is a movie about a man who gets turned into a llama", 
    "Llamas are very fuzzy", 
    "In Spanish, llama is pronounced [ˈʎama]", 
    "The scientific name for llama is Lama glama", 
    "The movie Napoleon Dynamite contains a llama",
    "One time I went to a llama farm"
  ]

  const randomIdx = Math.ceil(Math.random() * llamaFacts.length - 1);
  let socks = true;

  return (
    <div id="main">
      <header>
        <h1>Welcome to Questionable Llama Facts!</h1>
        <p className="subheader">Your source for some things llama.</p>
      </header>
      <div id="randomFact">
        <h2>Llama Fact of the Day:</h2>
        <div>
          {llamaFacts.splice(randomIdx, 1) /* display a random llama fact and remove it from the array */}!
            
        </div>

      </div>
      <div className="hide">        
        {llamaFacts.push(
          "I have a pair of socks made out of llama wool that my parents brought back from a trip to Peru",
          "I used to have a pair of socks made out of llama wool that my parents brought back from a trip to Peru"
          ) /* Add more items to the array*/}
      </div>
      <div>
        <h2>
          More llama facts!
        </h2>

        <div id="displayFacts">
          <div>{llamaFacts[0]}</div>
          <div>{llamaFacts[1]}</div>
          <div>{llamaFacts[2]}</div>
          <div>{llamaFacts[3]}</div>
          <div>{llamaFacts[4]}</div>
          <div>{llamaFacts[5]}</div>
          <div>{llamaFacts[6]}</div>
          <div>{llamaFacts[7]}</div>
          <div>{socks ? llamaFacts[8] : llamaFacts[9] /* Ternary for the last two array facts*/}</div>

        </div>
      </div>
    </div>
  )
}

export default App
