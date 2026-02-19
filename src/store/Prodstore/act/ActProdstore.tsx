import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// type Categstorestate ={id:number,title:string,prefix:string,img:string}[];

const ActProdstore = createAsyncThunk(
  "Prodstore/Actprodcy",
  async (id:string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await axios.get(`http://localhost:4000/products?cat_prefix=${id}`); //<Categstorestate>
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

export default ActProdstore;
