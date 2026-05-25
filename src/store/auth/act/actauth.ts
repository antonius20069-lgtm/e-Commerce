import {  createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'

type formdata = {
    Firstname: string,
    Lastname: string,
    email: string,
    password: string
}

 const Actauth = createAsyncThunk('auth/Actauth', async (formdata : formdata, thunkAPI) => {
const { rejectWithValue } = thunkAPI;

try {
    const response = await axios.post('http://localhost:4000/users', formdata);
    return response.data
  } catch (error) {
  if (error instanceof AxiosError) {
      // Access structured Axios error info
      return rejectWithValue(error.response?.data ?? error.message)
    }
    return rejectWithValue('An unexpected error occurred')
  }
  }

)


export default Actauth