import { createSlice } from '@reduxjs/toolkit'
import Actauth from './act/actauth'
import Actauthlog from './act/actauthlog'

 interface IAuth {
  accesstoken: string | null;
  user: {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
  } | null;
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: IAuth = {

  accesstoken: null,
  user: null,

  loading: "idle",
  error: null


}

export const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
reset: (state) => {
  state.loading = "idle"
  state.error = null
},
Actauthlogout: (state) => {
  state.accesstoken = null
  state.user = null
}}

  ,
  extraReducers: (builder) => {
    builder.addCase(Actauth.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
          builder.addCase(Actauth.fulfilled, (state) => {
      state.loading = "succeeded";
   
    });
             builder.addCase(Actauth.rejected, (state, action) => {
      state.loading = "failed";

      state.error = action.payload as string;
    });
    //logen
     builder.addCase(Actauthlog.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
          builder.addCase(Actauthlog.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.accesstoken = action.payload.accessToken
         state.user = action.payload.user

    });
             builder.addCase(Actauthlog.rejected, (state, action) => {
      state.loading = "failed";

      state.error = action.payload as string;
    });
  },


})

export { Actauthlog , Actauth }
export const {reset ,Actauthlogout} = AuthSlice.actions
export default AuthSlice.reducer

