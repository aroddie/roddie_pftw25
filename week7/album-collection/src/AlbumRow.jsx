import "./AlbumRow.css";

export function AlbumRow({albumArt, album, artist, year, genre, inCar, odd, burned}) {

    return (
        <tr className={odd ? "odd" : "even"}>
          <td className={burned ? "burned" : "bought"}><img src={albumArt} alt="{album}, {artist}" /></td>  
          <td className={inCar ? "car" : undefined}>{album}</td>
          <td>{artist}</td>
          <td>{year}</td>
          <td>{genre}</td>
        </tr>
    )
}