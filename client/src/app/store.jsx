import {configureStore} from '@reduxjs/toolkit';
import apiSlice from '../features/api/apiSlice';
import globalReducer from '../features/global';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
    
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        global: globalReducer,
        auth: authReducer,
    },
    
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    
});


