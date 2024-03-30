import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'

export const fetchUserData = createAsyncThunk('user/fetchUserData',
async()=>{

})


const profileSlice = createSlice({
    name:'profile',
    initialState:{
        isLoading:false,
        data:null,
        error:false 
    }
})

export default profileSlice.reducer;