import { createSlice } from "@reduxjs/toolkit";
import Actgetcateg from "./act/Actgetcateg";
interface Categstorestate {
  records: { id: number; title: string; prefix: string; img: string }[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: Categstorestate = {
  records: [],
  loading: "idle",
  error: null,
};

export const Categstore = createSlice({
  name: "Categstore",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(Actgetcateg.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
          builder.addCase(Actgetcateg.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });
             builder.addCase(Actgetcateg.rejected, (state, action) => {
      state.loading = "failed";

      state.error = action.payload as string;
    });
  },
});

export  { Actgetcateg } 
export default Categstore.reducer;
