import { configureStore } from '@reduxjs/toolkit'
import userDetail from '../Features/userDataSlice';


export const store = configureStore({
    reducer: {
        app: userDetail,
    }

});

