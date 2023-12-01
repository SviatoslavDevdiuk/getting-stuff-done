import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { mockCardData } from '../../dnd/mockData';
import { ICardData } from '../../dnd/components/Card';
import { RootState } from '../store';




interface Cards {
    data: Array<ICardData>;
}

const CREATE_CARD = 'cards/CREATE_CARD';
const MOVE_CARD = 'cards/MOVE_CARD';

const initialState: Cards = {
    data: [...mockCardData],
}


const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        createCard(state, action) {
            const { droppableId, content: title } = action.payload;

            console.log("create card is clicked")

            // const newCard: ICardData = { id: `card-${Date.now()}`, title: title }
            //it's not mutating state actually, the "immer" library is used under the hood
            // state.data.push(newCard);
        },
        moveCard(state, action) {

            console.log("moveCard: ", action.payload);
            const { sourceIndex, destinationIndex } = action.payload;
            const [removedCard] = state.data.splice(sourceIndex, 1);
            state.data.splice(destinationIndex, 0, removedCard);

        }
    }
})

export const { createCard, moveCard } = cardSlice.actions;

export default cardSlice.reducer;