import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { type RootState } from "../../store";




const Actorder = createAsyncThunk(
  "Ordersstore/Actorder",
  async (subtotal: number, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;

    const {cartstore,AuthSlice} = getState() as RootState;
    const orders = cartstore.productFullInfo.map((e) =>( {
       id : e.id,
       quantity : cartstore.items[e.id],
       price : e.price,
       img:e.img,
       title:e.title
    
    }))
 
    try {
      const response = await axios.post(`http://localhost:4000/orders`,
      {
        userid: AuthSlice.user?.id,
        items: orders,
        subtotal
      }
      ); 
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

export default Actorder;
