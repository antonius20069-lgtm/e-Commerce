import { createSlice } from "@reduxjs/toolkit";
import Actprodcy from "./act/ActProdstore";
interface Cateprodstorestate {
  records: { id: number; title: string; prefix: string; img: string ,price:number ,max:number}[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: Cateprodstorestate = {
  records: [],
  loading: "idle",
  error: null,
};

export const Prodstore = createSlice({
  name: "Prodct",
  initialState,
reducers: {
  cleanup: (state) => {
    state.records = [];
  },
},

  extraReducers: (builder) => {
    builder.addCase(Actprodcy.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
          builder.addCase(Actprodcy.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });
             builder.addCase(Actprodcy.rejected, (state, action) => {
      state.loading = "failed";

      state.error = action.payload as string;
    });
  },
});

export const { cleanup } = Prodstore.actions
export  { Actprodcy } 
export default Prodstore.reducer;
