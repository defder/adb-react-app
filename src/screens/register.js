import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "../users/users-thunk";
import {Navigate} from "react-router";
import "../index.css"

const Register = () => {
    const {currentUser} = useSelector((state) => state.users)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState("REGULAR")
    const dispatch = useDispatch()
    const handleRegisterBtn = () => {
        dispatch(registerThunk({username, password, role}))
    }

    if (currentUser) {
        return (<Navigate to={'/profile'}/>)
    }

    return(
        <>
            <div className="row mt-2">
                <div className="col-6 border">
                    <h3>Create an account</h3>
                    <input
                        onChange={(e) => setUsername(e.target.value)}
                        className="form-control w-75 mb-3 border-dark"
                        placeholder="Enter username"
                        value={username}/>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control w-75 border-dark"
                        placeholder="Enter password"
                        type="password"
                        value={password}/>
                    <h3 className="mt-3 mb-3">Choose a role</h3>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input border-dark" type="radio" value="REVIEWER"
                               name="role-selection" id="reviewer-role"
                               onChange={(e) => setRole(e.target.value)}/>
                        <label className= "form-check-label" htmlFor="reviewer-role">Reviewer</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input border-dark" type="radio" value="REGULAR"
                               name="role-selection" id="regular-role"
                               onChange={(e) => setRole(e.target.value)}/>
                        <label className= "form-check-label" htmlFor="regular-role">Regular</label>
                    </div>
                    <button
                        className="btn btn-dark w-75 mt-3 rounded-5"
                        onClick={handleRegisterBtn}>
                        Register
                    </button>
                </div>
                <div className="col-6 bg">
                </div>
            </div>
        </>
    )
}
export default Register;