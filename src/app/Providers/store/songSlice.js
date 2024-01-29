import { createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
    name : "songs" ,
    initialState : [] ,
    reducers : {
        addSongs : ( state , action ) => {
            return  action.payload
        } ,
        removeSong : ( state , payload ) => {
            return state.filter(item => item.id !== payload.id)
        }
    }
})

export const {addSongs , removeSong} = songSlice.actions;
export default songSlice.reducer