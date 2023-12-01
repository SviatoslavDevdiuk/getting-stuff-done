import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './slices/cardsSlice';
import columnReducer from './slices/columnsSlice';

const store = configureStore({
    reducer: {
        cards: cardReducer,
        columns: columnReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export default store;