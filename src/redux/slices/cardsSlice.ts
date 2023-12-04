import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { mockCardData } from "../../dnd/mockData";
import { ICardData } from "../../dnd/components/Card";
import { RootState } from "../store";
import { reorderBoard } from "../../dnd/reorder";
import { setColumns } from "./columnsSlice";

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
    const state = getState() as RootState;

    const { source, destination } = payload;
    const reorderedColumns = reorderBoard(
      state.columns.columns,
      source,
      destination
    );
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
      const { droppableId, title } = action.payload;

      const newCard: ICardData = {
        id: `card-${Date.now()}`,
        title: title,
        columnId: droppableId,
      };
      // it's not mutating state actually, the "immer" library is used under the hood
      state.data.splice(0, 0, newCard);
    },
    editCard(state, action) {
      const { title, id } = action.payload;
      const targetCard = state.data.filter((card) => {
        return card.id === id;
      })[0];
      targetCard.title = title;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(moveElement.fulfilled, (state, action) => {});
  },
});

export const { createCard, editCard } = cardSlice.actions;

export default cardSlice.reducer;
