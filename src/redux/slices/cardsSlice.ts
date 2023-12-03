import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { mockCardData } from "../../dnd/mockData";
import { ICardData } from "../../dnd/components/Card";
import { RootState } from "../store";
import { reorderBoard } from "../../dnd/reorder";
import { setCardsToColumns, setColumns } from "./columnsSlice";

interface Cards {
  data: Array<ICardData>;
}

const CREATE_CARD = "cards/createCard";
const MOVE_CARD = "cards/moveCard";
const GET_CARDS = "cards/getCards";

const initialState: Cards = {
  data: [...mockCardData],
};

export const moveElement = createAsyncThunk(
  MOVE_CARD,
  async (payload: any, { getState, dispatch }) => {
    console.log("move card payload: ", payload);
    const state = getState() as RootState;

    const { source, destination } = payload;
    const reorderedColumns = reorderBoard(
      state.columns.columns,
      source,
      destination
    );
    console.log("updated columns: ", reorderedColumns);
    dispatch(setColumns(reorderedColumns));
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

      const newCard: ICardData = { id: `card-${Date.now()}`, title: title, columnId: droppableId }
     // it's not mutating state actually, the "immer" library is used under the hood
      state.data.push(newCard);
    },
    // moveCard(state, action) {
    //   console.log("moveCard: ", action.payload);
    //   const { sourceIndex, destinationIndex } = action.payload;
    //   const [removedCard] = state.data.splice(sourceIndex, 1);
    //   state.data.splice(destinationIndex, 0, removedCard);
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(moveElement.fulfilled, (state, action) => {});
  },
});

export const { createCard } = cardSlice.actions;

export default cardSlice.reducer;
