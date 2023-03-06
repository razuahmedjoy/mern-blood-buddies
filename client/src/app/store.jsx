import {configureStore} from '@reduxjs/toolkit';
import globalReducer from '../features/global';

export const store = configureStore({
    
    reducer: {
        global: globalReducer,
    },
    
});


