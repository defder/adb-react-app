import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {findGamesForHomeThunk} from "../games/games-thunk";
import GameCard from "../games/game-card";

const Home = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {currentlyPlaying} = useSelector((state) => state.entries)
    const {homeDisplay} = useSelector((state) => state.games)
    const dispatch = useDispatch()
    const homeDisplayTop = homeDisplay.slice(0, 4)
    const homeDisplayBot = homeDisplay.slice(4, 8)
    useEffect(() => {
        dispatch(findGamesForHomeThunk())
    }, [])
    return(
        <>
        <div className="container">
            <div className="mt-3 mb-3">
                {
                    currentUser ? <h2> Recommended games for you </h2> : <h2>Popular game releases</h2>
                }
            </div>
            <div className="row">
                {
                    homeDisplayTop.map((game) =>
                    <div className="col-3">
                        <GameCard key={game.id} game={game}/>
                    </div>)
                }
            </div>
            <div className="row mt-5">
                {
                    homeDisplayBot.map((game) =>
                        <div className="col-3">
                            <GameCard key={game.id} game={game}/>
                        </div>)
                }
            </div>
            <div className="d-flex justify-content-center mt-4">Powered by Rawg.io</div>
        </div>
        </>
    )
}
export default Home;