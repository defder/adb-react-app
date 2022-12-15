import React, {useEffect} from "react"
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {findEntriesByUserThunk} from "../list-entries/entries-thunk";
import {findUserByIdThunk} from "../users/users-thunk";
import {Link} from "react-router-dom";
import StatusBadge from "../list-entries/status-badge";

const PublicProfile = () => {
    const {uid} = useParams()
    const {publicProfile} = useSelector((state) => state.users)
    const {entries} = useSelector((state) => state.entries)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(findUserByIdThunk(uid))
        dispatch(findEntriesByUserThunk(uid))
    }, [uid])

    return(
        <>
            {
                publicProfile &&
                <h1>{publicProfile.username}'s Profile </h1>
            }
            <hr/>
            {
                publicProfile &&
                <div>
                    <div className="row">
                        <div className="col-5">
                            <h2>About {publicProfile.username}</h2>
                            <div className="card mb-4">
                                <div className="row">
                                    <div className="col-sm-4 col-xs-4">
                                        <p className="mb-0">First Name</p>
                                    </div>
                                    <div className="col-sm-8 col-xs-8">
                                        <p className="text-muted mb-0">
                                            {publicProfile.firstName ? publicProfile.firstName : "N/A"}
                                        </p>
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-4 col-xs-4">
                                        <p className="mb-0">Last Name</p>
                                    </div>
                                    <div className="col-sm-8 col-xs-8">
                                        <p className="text-muted mb-0">
                                            {publicProfile.lastName ? publicProfile.lastName : "N/A"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-7">
                            <h2>{publicProfile.username}'s Games List</h2>
                            <ul className="list-group">
                                {
                                    entries?.map((entry) =>
                                        <Link to={`/details/${entry.gameId}`} className="text-decoration-none">
                                            <li className="list-group-item border" key={entry.gameId + entry.status}>
                                        <span className="fw-bold">
                                            {entry.title}
                                        </span>
                                                <StatusBadge status={entry.status}/>
                                            </li>
                                        </Link>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
export default PublicProfile