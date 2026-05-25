import { createRoot } from "react-dom/client";
import AppRou from "./routes/AppRou";
//redux
import {store, persistor} from './store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById("root")!).render(
       <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
<AppRou/>
</PersistGate>
    </Provider>


);
