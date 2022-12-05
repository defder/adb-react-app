import * as gameService from "./games-service"
import {createAsyncThunk} from "@reduxjs/toolkit"

export const findGamesForHomeThunk = createAsyncThunk(
    'findGamesForHome',
    () => gameService.findGamesForHome()
)

export const findGameByIdThunk = createAsyncThunk(
    'findGameById',
    (gameId) => gameService.findGameById(gameId)
)
