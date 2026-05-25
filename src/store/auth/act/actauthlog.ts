import {  createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'



type formdata = {

    email: string,
    password: string
}

type Tresponse = {
    accessToken: string
    user:{
        id: number
        firstname: string
        lastname: string
        email: string


    }
}

 const Actauthlog = createAsyncThunk('auth/actauthlog', async (formdata : formdata, thunkAPI) => {
const { rejectWithValue } = thunkAPI;

try {
    const response = await axios.post<Tresponse>('http://localhost:4000/login', formdata);
    console.log(response.data)
        return response.data

  } catch (error) {
  if (error instanceof AxiosError) {
      return rejectWithValue(error.response?.data ?? error.message)
    }
    return rejectWithValue('An unexpected error occurred')
  }
  }

)


export default Actauthlog