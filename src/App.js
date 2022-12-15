import './App.css';
import React from "react";
import {BrowserRouter} from "react-router-dom";
import Navigation from "./navigation";
import {Route, Routes} from "react-router";
import Home from "./screens/home";
import Search from "./screens/search";
import Profile from "./screens/profile";
import Login from "./screens/login";
import Register from "./screens/register";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {configureStore} from "@reduxjs/toolkit";
import usersReducer from "./users/users-reducer";
import {Provider} from "react-redux";
import CurrentUser from "./users/current-user";
import gamesReducer from "./games/games-reducer"
import 'font-awesome/css/font-awesome.min.css'
import GameDetails from "./games/game-details";
import entriesReducer from "./list-entries/entries-reducer"
import ProtectedPrivateProfile from "./users/protected-private-profile";
import PublicProfile from "./screens/public-profile";
import EditProfile from "./screens/edit-profile";
import reviewsReducer from "./reviews/reviews-reducer"
import AllUsersEntries from "./list-entries/all-users-entries";

const store = configureStore({
    reducer: {
        users: usersReducer,
        games: gamesReducer,
        entries: entriesReducer,
        reviews: reviewsReducer
    }
})

function App() {
  return (
    <div className="container">
        <Provider store={store}>
            <BrowserRouter>
                <CurrentUser>
                <Navigation/>
                    <Routes>
                        <Route index element={<Home/>}/>
                        <Route path="/search" element={<Search/>}/>
                        <Route path="/profile" element={
                          <ProtectedPrivateProfile>
                            <Profile/>
                          </ProtectedPrivateProfile>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/details/:gameId" element={<GameDetails/>}/>
                        <Route path="/profile/:uid" element={<PublicProfile/>}/>
                        <Route path="/profile/edit" element={
                            <ProtectedPrivateProfile>
                                <EditProfile/>
                            </ProtectedPrivateProfile>}/>
                        <Route path="/details/entries/:gameId" element={<AllUsersEntries/>}/>
                    </Routes>
                </CurrentUser>
            </BrowserRouter>
        </Provider>
    </div>
  );
}

export default App;
