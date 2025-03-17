import "./App.css";
import { useState } from "react";
import Masthead from "./Masthead/Masthead";
import ItemCard from "./ItemCard/ItemCard";
import { nanoid } from "nanoid";
function App() {
  const [albums, setAlbums] = useState([
    {
      album: "Let Go",
      artist: "Avril Lavigne",
      year: "2002",
      genre: "pop punk",
      inCar: false,
      burned: false,
      albumArt: "./let-go.jpg",
      id: 1
    },
    {
      album: "Evermore",
      artist: "Taylor Swift",
      year: "2020",
      genre: "folk pop",
      inCar: false,
      burned: false,
      albumArt: "./evermore.jpg",
      id: 2
    },
    {
      album: "Danger Days",
      artist: "My Chemical Romance",
      year: "2010",
      genre: "rock opera",
      inCar: true,
      burned: true,
      albumArt: "./danger-days.jpg",
      id: 3
    },
    {
      album: "Riot!",
      artist: "Paramore",
      year: "2007",
      genre: "pop punk",
      inCar: true,
      burned: false,
      albumArt: "./riot.jpg",
      id: 4
    },
    {
      album: "Fallen",
      artist: "Evanescence",
      year: "2003",
      genre: "gothic metal",
      inCar: true,
      burned: false,
      albumArt: "./fallen.jpg",
      id: 5
    },
    {
      album: "Kiss",
      artist: "Carly Rae Jepsen",
      year: "2012",
      genre: "dance pop",
      inCar: false,
      burned: false,
      albumArt: "./kiss.jpg",
      id: 6
    },
    {
      album: "Fush Yu Mang",
      artist: "Smash Mouth",
      year: "1997",
      genre: "ska punk",
      inCar: false,
      burned: false,
      albumArt: "./fush-yu-mang.jpg",
      id: 7
    },
    {
      album: "So Much (For) Stardust",
      artist: "Fall Out Boy",
      year: "2023",
      genre: "pop rock",
      inCar: true,
      burned: false,
      albumArt: "./stardust.jpg",
      id: 8
    },
    {
      album: "Highest Hopes: The Best of Nightwish",
      artist: "Nightwish",
      year: "2006",
      genre: "symphonic metal",
      inCar: true,
      burned: false,
      albumArt: "./highest-hopes.jpg",
      id: 9
    },
    {
      album: "Reise, Reise",
      artist: "Rammstein",
      year: "2004",
      genre: "German death metal",
      inCar: false,
      burned: true,
      albumArt: "./reise-reise.jpg",
      id: 10
    },
  ]);
  function deleteCard(id) {
    console.log("delete me", id);
    const updatedArray = albums.filter((cdAlbum) => {
      return cdAlbum.id !==id; // skips item with matching id
    })
    setAlbums(updatedArray)
  }
  function duplicateCard(id) {
    console.log("duplicate me", id);
    const matchingAlbum = albums.find((cdAlbum) => {
      return cdAlbum.id === id
    });
    const updatedAlbum = {...matchingAlbum, id: nanoid()}
    setAlbums([...albums, updatedAlbum]);
  }
  return(
    <div className="page">
      <Masthead />
      <div className="collection">
        {albums.map((cdAlbum) => {
          return (
            <ItemCard 
            key={cdAlbum.id} 
            deleteFn={deleteCard}
            duplicateFn={duplicateCard}
            {...cdAlbum} />
          )
        })}
      </div>
    </div>
  )
}

export default App;