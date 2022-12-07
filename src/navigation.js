import {Link} from "react-router-dom";
import {useLocation, useNavigate} from "react-router";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "./users/users-thunk";
import "./index.css"

const Navigation = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {pathname} = useLocation();
    const splitPath = pathname.split('/');
    const currentPath = splitPath[1];
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(logoutThunk())
        navigate('/login')
    }
    return(
        <ul className="nav nav-tabs mt-1 bg-dark">
            <li className="nav-item">
                <Link to="/"
                      className={`nav-link ${currentPath === ''? 'active' : 'text-light'}`}>
                    <span><i className="fa fa-home"/> Home</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/search"
                      className={`nav-link ${currentPath === 'search'? 'active' : 'text-light'}`}>
                    <span><i className="fa fa-search"/> Search</span>
                </Link>
            </li>
            <li className={`nav-item ${currentUser ? '' : 'd-none'}`}>
                <Link to="/profile"
                      className={`nav-link ${currentPath === 'profile'? 'active' : 'text-light'}`}>
                    <span><i className="fa fa-user"/> Profile</span>
                </Link>
            </li>
            <li className={`nav-item ${currentUser ? 'd-none' : ''}`}>
                <Link to="/login"
                      className={`nav-link ${currentPath === 'login'? 'active' : 'text-light'}`}>
                    <span><i className="fa fa-sign-in"/> Login</span>
                </Link>
            </li>
            <li className={`nav-item ${currentUser ? 'd-none' : ''}`}>
                <Link to="/register"
                      className={`nav-link ${currentPath === 'register'? 'active text-dark' : 'text-light'}`}>
                   <span><i className="fa fa-pencil"/> Register</span>
                </Link>
            </li>
            <li className={`nav-item float-end little-margin-left ${currentUser ? '' : 'd-none'}`}>
                <button className="btn btn-warning rounded-3" onClick={handleLogout}> Log out</button>
            </li>
        </ul>
    )
}
export default Navigation;