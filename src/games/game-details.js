import React, {useEffect, useState} from "react"
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {findGameByIdThunk} from "./games-thunk";
import "../index.css"
import {createEntryThunk} from "../list-entries/entries-thunk";

const GameDetails = () => {
    const {gameId} = useParams()
    const [status, setStatus] = useState('Playing')
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const {details} = useSelector((state) => state.games)
    useEffect(() => {
        dispatch(findGameByIdThunk(gameId))
    }, [])

    const handleStatus = (e) => {
        setStatus(e.target.value)
    }

    const addGameEntryBtn = () => {
        dispatch(createEntryThunk({
            status,
            gameId,
            title: details.name
        }))
    }

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
                <div className="row text-light">
                    <div className="col-4">
                        <div className="mt-3">
                        {   currentUser &&
                            <select className="form-select" value={status} onChange={handleStatus}>
                                <option value="Playing">Playing</option>
                                <option value="Completed">Completed</option>
                                <option value="Plan to Play">Plan to Play</option>
                                <option value="Dropped">Dropped</option>
                            </select>
                        }
                        {
                            currentUser &&
                            <button className="btn btn-outline-info mt-3" onClick={addGameEntryBtn}>
                                Add to your games list
                            </button>
                        }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default GameDetails