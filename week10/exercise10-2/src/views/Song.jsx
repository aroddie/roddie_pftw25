import { Link, useParams } from "react-router-dom"
export function Song({data}) {
    console.log("data should be the music list", data)
    const {slug} = useParams();
    console.log("slug", slug);
    const currentSong = data.find((song) => song.slug === slug);
    console.log(currentSong)
    return (
        <>
            <nav>
                <Link to="/">Go Back Home</Link>
            </nav>
            <h1>{currentSong.title}</h1>
            <img src={currentSong.cover} alt={currentSong.title} />
            <p>Artist: {currentSong.artist}</p>
            <p>Rank: {currentSong.rank}</p>
        </>
    )
}
