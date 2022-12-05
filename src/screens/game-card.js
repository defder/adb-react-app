import React from "react";
import {Link} from "react-router-dom";

const GameCard = ({game}) => {
    return(
        <Link to={`/details/${game.slug}`} className="nav-link">
            <div className="card border border-primary">
                <img className="card-img-top" height={175} src={game.background_image} alt={''}/>
                <div className="card-body bg-dark">
                    <div className="text-light">{game.name} </div>
                </div>
            </div>
        </Link>
    )
}
export default GameCard;