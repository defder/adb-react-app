import React, {useEffect, useState} from "react"
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {findGameByIdThunk} from "./games-thunk";
import "../index.css"
import {createEntryThunk, deleteEntryByIdThunk, getExistingEntryThunk} from "../list-entries/entries-thunk";

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
    const deleteGameEntryBtn = () => {
        dispatch(deleteEntryByIdThunk(gameId))
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
                        <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-6 col-sm-6 col-6">
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
                        <div className="col-xxl-8 col-xl-8 col-lg-7 col-md-6 col-sm-6 col-6 text-light">
                            <h5 className="d-none d-lg-block">Description</h5>
                            <p className="d-none d-lg-block"> {details.description_raw} </p>
                        </div>
                    </div>
                    <div className="row text-light">
                        <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-6 col-sm-6 col-6">
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
                                    <button className="btn btn-outline-danger mt-3 ms-3" onClick={deleteGameEntryBtn}>
                                        Delete entry
                                    </button>
                                }
                            </div>
                        </div>
                        <div className="col-xxl-8 col-xl-8 col-lg-7 col-md-6 col-sm-6 col-6 text-light">
                            <h2>Reviews</h2>
                            <hr/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default GameDetails