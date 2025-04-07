import mastheadImg from "../assets/masthead.jpg"
import "./Masthead.css"

export default function Masthead() {
    return (
        <div className="masthead">
            <img src={mastheadImg} alt="Arden Roddie Art & Design" />
            <h1>Arden Roddie Art & Design</h1>
        </div>
    )
}