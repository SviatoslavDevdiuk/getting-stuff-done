import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mockCardData } from "../../dnd/mockData";
import { ICardData } from "../../dnd/components/Card";
import { RootState } from "../store";
import { reorderBoard } from "../../dnd/reorder";
import { setColumns } from "./columnsSlice";

interface Cards {
  data: Array<ICardData>;
}

// interface MoveCardPayload {
//   sourceIndex: number;
//   destinationIndex: number;
// }

const CREATE_CARD = "cards/createCard";
const MOVE_CARD = "cards/moveCard";
const GET_CARDS = "cards/getCards";

const initialState: Cards = {
  data: [...mockCardData],
};

export const moveCard = createAsyncThunk(
  MOVE_CARD,
  async (payload: any, { getState, dispatch }) => {
    const state = getState() as RootState;

    const {source, destination} = payload;
    const updatedColumns = reorderBoard(state.columns, source, destination).lists;

    dispatch(setColumns(updatedColumns));
  }
);

export const getCards = createAsyncThunk(GET_CARDS, async (_, { getState }) => {
  const cards = getState() as RootState;

  return cards.cards;
});

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    createCard(state, action) {
      const { droppableId, content: title } = action.payload;

      console.log("create card is clicked");

      // const newCard: ICardData = { id: `card-${Date.now()}`, title: title }
      //it's not mutating state actually, the "immer" library is used under the hood
      // state.data.push(newCard);
    },
    // moveCard(state, action) {
    //   console.log("moveCard: ", action.payload);
    //   const { sourceIndex, destinationIndex } = action.payload;
    //   const [removedCard] = state.data.splice(sourceIndex, 1);
    //   state.data.splice(destinationIndex, 0, removedCard);
    // },
  }, extraReducers: (builder) =>{
    builder.addCase(moveCard.fulfilled, (state, action)=>{
        
    })
  }
});

export const { createCard } = cardSlice.actions;

export default cardSlice.reducer;
