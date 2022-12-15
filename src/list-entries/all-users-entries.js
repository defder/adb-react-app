import React, {useEffect} from "react"
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import "../index.css"
import {findEntryByGameIdThunk} from "./entries-thunk";
import {Link} from "react-router-dom";
import StatusBadge from "./status-badge";

const AllUsersEntries = () => {
    const {gameId} = useParams()
    const {entries} = useSelector((state) => state.entries)
    const {details, loading} = useSelector((state) => state.games)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findEntryByGameIdThunk(gameId))
    }, [])

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
                    <Link to={`/details/${gameId}`} className="text-decoration-none">
                        <h1 className="text-light">{details.name}</h1>
                    </Link>
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
                            <h2>Users that added {details.name} to their lists</h2>
                            <ul className="list-group mt-3">
                                {
                                    entries?.map((entry) =>
                                        <Link to={`/profile/${entry.user._id}`} className="text-decoration-none border border-dark">
                                            <li className="list-group-item border" key={entry.gameId + entry.status}>
                                                <span className="fw-bold">
                                                    {entry.user.username}
                                                </span>
                                                <StatusBadge status={entry.status}/>
                                            </li>
                                        </Link>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default AllUsersEntries