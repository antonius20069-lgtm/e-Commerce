// ActgetFullInfo



import { createAsyncThunk  } from '@reduxjs/toolkit'
import axios from 'axios'
import { type RootState } from '../../store'; // تأكد من المسار الصحيح لملف الـ store
interface IWishlistItem {
  id: string;
  userid: number;
  productid: number;
}
type Tdatay= "productsfullInfo"|"products"


const ActgetFullInfo = createAsyncThunk("Wishlist/ActgetFullInfo",async ( datat:Tdatay , thunkAPI) =>{
  const { rejectWithValue  , getState} = thunkAPI;

const state = getState() as RootState
const userId  = state.AuthSlice.user?.id

if (!userId) {
      return rejectWithValue("User is not logged in");
    }
try {
    const wishlistRes = await axios.get <IWishlistItem[]>(`http://localhost:4000/wishList?userId=${userId}`)

    if(!wishlistRes.data.length){

  return  { data: [], datat: "empty" };
}

if(datat == "products") {

const productIds = wishlistRes.data.map((item) => item.productid);
        return { data: productIds, datat: "products" };
}else{
       
        const responses = await Promise.all(
          wishlistRes.data.map((item) =>
            axios.get(`http://localhost:4000/products/${item.productid}`)
          )
        );
        const productsData = responses.map((res) => res.data);
        return { data: productsData, datat: "productsfullInfo" };
      }
} catch (error) {
         if (axios.isAxiosError(error)) {
      return rejectWithValue(error.message); 
      } else {
        return rejectWithValue("unexpected error");
      }
  }
}

)

export default  ActgetFullInfo