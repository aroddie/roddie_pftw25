
function App() {

  let myName = "Arden";
  let cats = ["Binx", "Gunner"]
  const catLove = true;
  return (
    <div>
      <h1>
        Hello, World!
      </h1>
      <p>My name is {myName}.</p>
      <p>I have {cats.length} cats. Their names are {cats[0]} and {cats[1]}.</p>
      {catLove ? (<p>I love them very much!</p>) : (<p>They're okay.</p>)}
    </div>
  )
}

export default App
