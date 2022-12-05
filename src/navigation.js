import {Link} from "react-router-dom";
import {useLocation, useNavigate} from "react-router";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "./users/users-thunk";

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
        <ul className="nav nav-tabs mt-1">
            <li className="nav-item">
                <Link to="/"
                      className={`nav-link ${currentPath === ''? 'active' : ''}`}>
                    <span><i className="fa fa-home"/> Home</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/search"
                      className={`nav-link ${currentPath === 'search'? 'active' : ''}`}>
                    <span><i className="fa fa-search"/> Search</span>
                </Link>
            </li>
            <li className={`nav-item ${currentUser ? '' : 'd-none'}`}>
                <Link to="/profile"
                      className={`nav-link ${currentPath === 'profile'? 'active' : ''}`}>
                    <span><i className="fa fa-user"/> Profile</span>
                </Link>
            </li>
            <li className={`nav-item ${currentUser ? 'd-none' : ''}`}>
                <Link to="/login"
                      className={`nav-link ${currentPath === 'login'? 'active' : ''}`}>
                    <span><i className="fa fa-sign-in"/> Login</span>
                </Link>
            </li>
            <li className={`nav-item ${currentUser ? 'd-none' : ''}`}>
                <Link to="/register"
                      className={`nav-link ${currentPath === 'register'? 'active' : ''}`}>
                   <span><i className="fa fa-pencil"/> Register</span>
                </Link>
            </li>
            <li className={`nav-item float-end ${currentUser ? '' : 'd-none'}`}>
                <button className="btn btn-danger rounded-pill" onClick={handleLogout}> Log out</button>
            </li>
        </ul>
    )
}
export default Navigation;