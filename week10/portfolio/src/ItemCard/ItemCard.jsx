import { Link } from "react-router-dom";
import "./ItemCard.css";
export default function ItemCard({
    name,
    thumbnail,
    description,
    slug
}) {
    return (
        <div className="designCard">
            <Link to={`${slug}`}>
                <div className="cardImg">
                    <img src={thumbnail} alt={name} />
                </div>
                <div className="cardTitle">
                    <h2>{name}</h2>
                </div>
                <div>{description}</div>
            </Link>
        </div>
    )
}
