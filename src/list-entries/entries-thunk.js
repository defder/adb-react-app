import {createAsyncThunk} from "@reduxjs/toolkit"
import {createEntry, findEntriesByUser, getEntryByGameIdAndUserId, getEntryCategoriesCount} from "./entries-service";

export const createEntryThunk = createAsyncThunk(
    'createEntry',
    async (entry) => createEntry(entry)
)

export const findEntriesByUserThunk = createAsyncThunk(
    'findEntriesByUser',
    async (user) => findEntriesByUser(user)
)

export const getEntriesCountThunk = createAsyncThunk(
    'getEntriesCount',
    async () => getEntryCategoriesCount()
)

export const getExistingEntryThunk = createAsyncThunk(
    'getExistingEntry',
    async (gameId) => getEntryByGameIdAndUserId(gameId)
)