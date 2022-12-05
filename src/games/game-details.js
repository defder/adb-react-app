import React, {useEffect} from "react"
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {findGameByIdThunk} from "./games-thunk";
import "../index.css"

const GameDetails = () => {
    const {gameId} = useParams()
    const dispatch = useDispatch()
    const {details} = useSelector((state) => state.games)
    useEffect(() => {
        dispatch(findGameByIdThunk(gameId))
    }, [])
    return(
        <>
            <div className="container-fluid bg-3 border border-info">
                <h1 className="text-light">{details.name}</h1>
                <div className="row">
                    <div className="col-4">
                        <div className="card border">
                            <img src={details.background_image} className="card-img-top" alt={''}/>
                            <div className="card-body">
                                <h5 className="card-title">Tags</h5>
                                <div className="card-text">
                                    {details.developers?.map((developer) => developer.name + ", ")}
                                </div>
                                {
                                    details.genres?.map((genre) => genre.name + ', ')
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-8 text-light">
                        <h5>Description</h5>
                        <p> {details.description_raw} </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default GameDetails