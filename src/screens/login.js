import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "../users/users-thunk";
import {Navigate} from "react-router";
import {Link} from "react-router-dom";

const Login = () => {
    const {currentUser} = useSelector((state) => state.users)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const handleLoginBtn = () => {
        dispatch(loginThunk({username, password}))
    }
    if (currentUser) {
        return(
            <Navigate to={'/profile'}/>
        )
    }
    return(
        <>
            <div className="row mt-2">
                <div className="col-6">
                    <h3>Login</h3>
                    <input
                        onChange={(e) => setUsername(e.target.value)}
                        className="form-control w-75 mb-2"
                        placeholder="Enter username"
                        value={username}/>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control w-75"
                        placeholder="Enter password"
                        type="password"
                        value={password}/>
                    <button
                        className="btn btn-primary w-75 mt-2 rounded-5"
                        onClick={handleLoginBtn}>
                        Sign in
                    </button>
                </div>
                <div className="col-6 form-check">
                    <h3>INSERT AESTHETICS HERE</h3>
                </div>
            </div>
            <div className="mt-4">
                <span>Need an account?
                    <Link to="/register"> Sign up</Link>
                </span>
            </div>
        </>
    )
}
export default Login;