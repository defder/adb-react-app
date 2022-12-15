import React, {useEffect, useState} from "react"
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {findGameByIdThunk} from "./games-thunk";
import "../index.css"
import {createEntryThunk, getExistingEntryThunk} from "../list-entries/entries-thunk";

const GameDetails = () => {
    const {gameId} = useParams()
    const [status, setStatus] = useState('Playing')
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const {details, loading} = useSelector((state) => state.games)
    const {currentEntry} = useSelector((state) => state.entries)
    useEffect(() => {
        dispatch(findGameByIdThunk(gameId))
        dispatch(getExistingEntryThunk(gameId))
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
        dispatch(getExistingEntryThunk(gameId))
    }

    if (loading) {
        return (
            <div className="container-fluid bg-3 border border-info">
                <h1 className="text-light">Loading...</h1>
            </div>
        )
    }
    else {
        return (
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
                                {
                                    currentEntry &&
                                    <p className="text-info fw-bolder">
                                        Entry is in your list, current status is:
                                        <span className="text-warning"> {currentEntry.status} </span>
                                    </p>
                                }
                                {currentUser &&
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
                                        {`${currentEntry ? 'Update game status' : 'Add Game to list'}`}
                                    </button>
                                }
                                {
                                    currentEntry &&
                                    <button className="btn btn-outline-danger mt-3 ms-3">Delete entry</button>
                                }
                            </div>
                        </div>
                        <div className="col-8">
                            PLACEHOLDER FOR REVIEWS
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default GameDetails