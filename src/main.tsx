import { createRoot } from "react-dom/client";
import AppRou from "./routes/AppRou";
//redux
import store from './store/store'
import { Provider } from 'react-redux'

createRoot(document.getElementById("root")!).render(
       <Provider store={store}>
<AppRou/>
    </Provider>


);
