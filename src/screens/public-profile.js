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
            {
                publicProfile &&
                <div>
                    <h2>Games List</h2>
                    <div className="row">
                        <div className="col-5">
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