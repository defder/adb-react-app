import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findEntriesByUserThunk, getEntriesCountThunk} from "../list-entries/entries-thunk";
import StatusBadge from "../list-entries/status-badge";
import {Link} from "react-router-dom";

const Profile = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {entries, counts} = useSelector((state) => state.entries)
    const userId = currentUser?._id
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findEntriesByUserThunk(userId))
        dispatch(getEntriesCountThunk())
    }, [userId])
    return (
        <>
            {
                <h1>Hi {currentUser.username}, here is your profile</h1>
            }
            <hr/>
            <div>
                <div className="row">
                    <div className="col-xxl-4 col-xl-4 col-lg-3 col-md-4 col-sm-5 col-4">
                        <h2>My Information</h2>
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-4 col-xs-4">
                                        <p className="mb-0">First Name</p>
                                    </div>
                                    <div className="col-sm-8 col-xs-8">
                                        <p className="text-muted mb-0">{currentUser.firstName}</p>
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-4 col-xs-4">
                                        <p className="mb-0">Last Name</p>
                                    </div>
                                    <div className="col-sm-8 col-xs-8">
                                        <p className="text-muted mb-0">{currentUser.lastName}</p>
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-4 col-xs-4">
                                        <p className="mb-0">Role</p>
                                    </div>
                                    <div className="col-sm-8 col-xs-8">
                                        <p className="text-muted mb-0">{currentUser.role}</p>
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-4 col-xs-4">
                                        <p className="mb-0">Email</p>
                                    </div>
                                    <div className="col-sm-8 col-xs-8">
                                        <p className="text-muted mb-0">{currentUser.email}</p>
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-4 col-xs-5">
                                        <p className="mb-0">Phone Number</p>
                                    </div>
                                    <div className="col-sm-8 col-xs-7">
                                        <p className="text-muted mb-0">{currentUser.phoneNumber}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link to="/profile/edit" className="btn btn-primary text-light">
                            Edit Profile Info
                        </Link>
                    </div>
                    <div className="col-xxl-5 col-xl-6 col-lg-7 col-md-8 col-sm-7 col-8">
                        <h2>My Games List</h2>
                        <ul className="list-group mt-3">
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
                    <div className="col-xxl-3 col-xl-2 col-lg-2 d-none d-lg-block">
                        <h2>Statistics</h2>
                        <div className="card d-none d-md-block">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-11 text-success fw-bold">
                                        Completed
                                    </div>
                                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-1 badge bg-success rounded-pill">
                                        {counts.completed}
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-11 text-primary fw-bold">
                                        Playing
                                    </div>
                                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-1 badge bg-primary rounded-pill">
                                        {counts.playing}
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-11 text-secondary fw-bold">
                                        Plan To Play
                                    </div>
                                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-1 badge bg-secondary rounded-pill">
                                        {counts.planToPlay}
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-11 text-danger fw-bold">
                                        Dropped
                                    </div>
                                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-1 badge bg-danger rounded-pill">
                                        {counts.dropped}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Profile;