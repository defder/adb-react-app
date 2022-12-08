import {useSelector} from "react-redux";
import {Navigate} from "react-router"
import React from "react";

const ProtectedProfile = ({children}) => {
    const {currentUser} = useSelector((state) => state.users)
    if (currentUser) {
        return (children)
    } else {
        return (<Navigate to={'/login'}/>)
    }
}
export default ProtectedProfile