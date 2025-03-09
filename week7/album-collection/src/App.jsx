import "./App.css";
import { AlbumRow } from "./AlbumRow";
function App() {

  const albums = [
    {
      album: "Let Go",
      artist: "Avril Lavigne",
      year: "2002",
      genre: "pop punk",
      inCar: false,
      burned: false,
      albumArt: "./let-go.jpg"
    },
    {
      album: "Evermore",
      artist: "Taylor Swift",
      year: "2020",
      genre: "folk pop",
      inCar: false,
      burned: false,
      albumArt: "./evermore.jpg"
    },
    {
      album: "Danger Days: The True Lives of the Fabulous Killjoys",
      artist: "My Chemical Romance",
      year: "2010",
      genre: "rock opera",
      inCar: true,
      burned: true,
      albumArt: "./danger-days.jpg"
    },
    {
      album: "Riot!",
      artist: "Paramore",
      year: "2007",
      genre: "pop punk",
      inCar: true,
      burned: false,
      albumArt: "./riot.jpg"
    },
    {
      album: "Fallen",
      artist: "Evanescence",
      year: "2003",
      genre: "gothic metal",
      inCar: true,
      burned: false,
      albumArt: "./fallen.jpg"
    },
    {
      album: "Kiss",
      artist: "Carly Rae Jepsen",
      year: "2012",
      genre: "dance pop",
      inCar: false,
      burned: false,
      albumArt: "./kiss.jpg"
    },
    {
      album: "Fush Yu Mang",
      artist: "Smash Mouth",
      year: "1997",
      genre: "ska punk",
      inCar: false,
      burned: false,
      albumArt: "./fush-yu-mang.jpg"
    },
    {
      album: "So Much (For) Stardust",
      artist: "Fall Out Boy",
      year: "2023",
      genre: "pop rock",
      inCar: true,
      burned: false,
      albumArt: "./stardust.jpg"
    },
    {
      album: "Highest Hopes: The Best of Nightwish",
      artist: "Nightwish",
      year: "2006",
      genre: "symphonic metal",
      inCar: true,
      burned: false,
      albumArt: "./highest-hopes.jpg"
    },
    {
      album: "Reise, Reise",
      artist: "Rammstein",
      year: "2004",
      genre: "German death metal",
      inCar: false,
      burned: true,
      albumArt: "./reise-reise.jpg"
    },
  ]
  return(
    <>
      <section className="intro">
        <h1>My CD Collection</h1>
        <p>I've been collecting CDs for the past 25 years or so. Here are some of them!</p>
        <p>Most of my CDs are professionally-pressed, but I do have several home-burned copies in my collection. 
          <br />
          Those are denoted with a dashed red outline around the album art.</p>
        <p>I like to keep several CDs in my car! Those are denoted with a 🚗 after the album name.</p>
      </section>
      <main>
        <table className="album-table">
          <thead>
            <tr>
              <th></th>
              <th>Album</th>
              <th>Artist</th>
              <th>Year Released</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {albums.map((album, index) => {
              return (
                <AlbumRow 
                key={album.albumArt}
                odd={index % 2 === 0}
                albumArt={album.albumArt}
                album={album.album}
                artist={album.artist}
                year={album.year}
                genre={album.genre}
                inCar={album.inCar}
                burned={album.burned}
                />
              )
            })}
          </tbody>
        </table>
      </main>
      <section className="footer">
        <p>Thank you for reading!</p>
      </section>
    </>
  )
}

export default App;