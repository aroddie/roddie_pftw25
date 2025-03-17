import mastheadImg from "../assets/masthead.jpg"
import "./Masthead.css"

export default function Masthead() {
    return (
        <div className="masthead">
            <img src={mastheadImg} alt="Arden's CD Collection" />
            <h1>My CD Collection!</h1>
        </div>
    )
}