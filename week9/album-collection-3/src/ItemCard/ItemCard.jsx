import PropTypes from "prop-types";
import "./ItemCard.css";
import deleteIcn from "../assets/icons/xmark-solid.svg";
import cloneIcn from "../assets/icons/clone-solid.svg";
export default function ItemCard({
    album,
    artist,
    year,
    genre,
    inCar,
    burned,
    albumArt,
    id,
    deleteFn,
    duplicateFn

}) {
    return (
        <div className="albumCard">
            {burned && <div className="burned" title="Burned copy"></div>}
            {inCar && <div className="car" title="This is in my car"></div>}
            <div className="cardImg">
                <img src={albumArt} alt={album} />
            </div>
            <h2>{album}</h2>
            <div>by {artist}</div>
            <div>{year}</div>
            <div>Genre: {genre}</div>
            <div className="action">
                <a href="#" onClick={(evt) => {
                    evt.preventDefault();
                    deleteFn(id)
                }}><img src={deleteIcn} alt="delete" title="delete" /></a>
                <a href="#" onClick={(evt) => {
                    evt.preventDefault();
                    duplicateFn(id)
                }}><img src={cloneIcn} alt="duplicate" title="duplicate" /></a>
            </div>

        </div>
    )
}
ItemCard.propTypes = {
    album: PropTypes.string,
    artist: PropTypes.string,
    year: PropTypes.string,
    genre: PropTypes.string,
    inCar: PropTypes.bool,
    burned: PropTypes.bool,
    albumArt: PropTypes.string,
    id: PropTypes.string,
    duplicateFn: PropTypes.func,
    deleteFn: PropTypes.func,
}