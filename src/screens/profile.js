import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findEntriesByUserThunk} from "../list-entries/entries-thunk";

const Profile = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {entries} = useSelector((state) => state.entries)
    const userId = currentUser?._id
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findEntriesByUserThunk(userId))
    }, [userId])

    return(
        <>
            <h1>PROFILE</h1>
            {
                currentUser &&
                <h2>Welcome user: {currentUser.username} </h2>
            }
            <div>
                <h2>My Games List</h2>
                <ul>
                    {
                        entries?.map((entry) =>
                        <li key={entry.gameId}>{entry.title}: {entry.status}</li>)
                    }
                </ul>
            </div>
        </>
    )
}
export default Profile;