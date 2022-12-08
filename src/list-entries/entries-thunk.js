import {createAsyncThunk} from "@reduxjs/toolkit"
import {createEntry, findEntriesByUser} from "./entries-service";

export const createEntryThunk = createAsyncThunk(
    'createEntry',
    async (entry) => createEntry(entry)
)

export const findEntriesByUserThunk = createAsyncThunk(
    'findEntriesByUser',
    async (user) => findEntriesByUser(user)
)