
import { createAsyncThunk  } from '@reduxjs/toolkit'
import axios from 'axios'

interface ICartState {
  items: { [key: string]: number };
  productFullInfo: {
    id: number;
    title: string;
    prefix: string;
    img: string;
    quantity?: number;
    max: number;
  }[],
    loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const Actcart = createAsyncThunk("cart/Actcart",async (_, thunkAPI) =>{
  const { rejectWithValue ,getState ,fulfillWithValue} = thunkAPI;
  const {cartstore} = getState() as {cartstore: ICartState}
  const cartItems = Object.keys(cartstore.items)
  //  const concat=cartItems.map((e)=> `id=${e}`).join('&')
if(cartItems.length === 0){

  return fulfillWithValue([])
}

    try {
    const promises = cartItems.map((id) =>
      axios.get(`http://localhost:4000/products/${id}`)
    );
    const responses = await Promise.all(promises);
    return responses.map((res) => res.data);
  } catch (error) {
         if (axios.isAxiosError(error)) {
      return rejectWithValue(error.message); 
      } else {
        return rejectWithValue("unexpected error");
      }
  }
}

)

export default  Actcart