import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { type RootState } from "../../store";
import type  { IOrder } from "../ordersstore";


type Tresponse = IOrder[]
  

const Actgetuser = createAsyncThunk(
  "Ordersstore/Actgetuser",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState ,signal } = thunkAPI;
    const {AuthSlice} = getState() as RootState;

 
    try {
      const response = await axios.get<Tresponse>(`http://localhost:4000/orders?userid=${AuthSlice.user?.id}`,{signal}); 
    return response.data;

      
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error);
      } else {
        return rejectWithValue("unexpected error");
      }
    }
  },
);

export default Actgetuser