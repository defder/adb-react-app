import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findGamesBySearchTermThunk} from "../games/games-thunk";
import GameCard from "../games/game-card";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const {games} = useSelector((state) => state.games)
    const dispatch = useDispatch()

    return(
        <>
            <h1>SEARCH</h1>
            <div className="container-fluid d-flex justify-content-center">
                <input
                    className="form-control w-75 mb-3"
                    placeholder="Search games"
                    value={searchTerm}
                    onChange={(e) => {setSearchTerm(e.target.value)}}/>
                <button className="float-end btn btn-dark mb-3"
                        onClick={() => {dispatch(findGamesBySearchTermThunk(searchTerm))}}>Search</button>
            </div>
            {
                games.map((game) =>
                <div className="w-25 mb-3 float-start p-2">
                    <GameCard key={game.slug} game={game}/>
                </div>)
            }
        </>
    )
}
export default Search;