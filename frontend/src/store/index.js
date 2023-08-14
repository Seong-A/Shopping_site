import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import {
    FLUSH, PAUSE, PERSIST, PURGE, REGISTER, 
    REHYDRATE, persistReducer, persistStore 
} from "redux-persist";
import storage from "redux-persist/lib/storage";

export const rootReducer = combineReducers({
    user: userReducer
});

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer, // 수정: persistReducer 대신에 persistedReducer 사용
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    }),
});

export const persistor = persistStore(store);
