import {useSelector} from "react-redux";
import {Navigate} from "react-router"
import React from "react";

const ProtectedLoginRegister = ({children}) => {
    const {currentUser} = useSelector((state) => state.users)
    if (currentUser) {
        return (<Navigate to={'/profile'}/>)
    } else {
        return (children)
    }
}
export default ProtectedLoginRegister