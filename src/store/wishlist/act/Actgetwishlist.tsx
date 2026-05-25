import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const Actgetwishlist = createAsyncThunk(
  "Wishlist/Actgetwishlist",
  async (id: number, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
  

    try {

      const response = await axios.get(`http://localhost:4000/wishList?userid=1&productid=${id}`);

      if (response.data.length > 0) {
    
        const recordId = response.data[0].id;
        await axios.delete(`http://localhost:4000/wishList/${recordId}`);
        return { type: "remove", id };

      } else {
      await axios.post(`http://localhost:4000/wishList`, { 
  userid: 1, 
  productid: Number(id)
});
        return { type: "add", id };
      }

    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue("unexpected error");
      }
    }
  }
);

export default Actgetwishlist;