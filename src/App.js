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

const store = configureStore({
    reducer: {
        users: usersReducer,
        games: gamesReducer
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
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/details/:gameId" element={<GameDetails/>}/>
                    </Routes>
                </CurrentUser>
            </BrowserRouter>
        </Provider>
    </div>
  );
}

export default App;
