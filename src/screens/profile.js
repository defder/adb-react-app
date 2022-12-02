import React from "react";
import {useSelector} from "react-redux";
import {Navigate} from "react-router";

const Profile = () => {
    const {currentUser} = useSelector((state) => state.users)
    if (!currentUser) {
        return(
            <Navigate to={'/login'}/>
        )
    }
    return(
        <>
            <h1>PROFILE</h1>
            {
                currentUser &&
                <h2>Welcome user: {currentUser.username} </h2>
            }
        </>
    )
}
export default Profile;