import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "../users/users-thunk";
import {Navigate} from "react-router";
import {Link} from "react-router-dom";
import "../index.css"

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
                <div className="col-6 border">
                    <h3>Login</h3>
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
                    <button
                        className="btn btn-dark w-75 mt-3 rounded-5"
                        onClick={handleLoginBtn}>
                        Sign in
                    </button>
                    <div className="mt-2">
                        <span>Need an account?
                        <Link to="/register"> Sign up</Link>
                        </span>
                    </div>
                </div>
                <div className="col-6 bg-2">
                </div>
            </div>
        </>
    )
}
export default Login;