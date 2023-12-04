import { createSlice } from "@reduxjs/toolkit";
import { ICardData } from "../../dnd/components/Card";
import { IColumnData } from "../../dnd/components/Column";

interface Columns {
  columns: Array<IColumnData>;
}

const initialState: Columns = {
  columns: [
    { title: "Mailbox", draggableId: "1", cards: [] },
    { title: "In Progress", draggableId: "2", cards: [] },
    { title: "Done", draggableId: "3", cards: [] },
  ],
};

const columnsSlice = createSlice({
  name: "column",
  initialState,
  reducers: {
    setColumns: (state, action) => {
      state.columns = action.payload;
    },
    setCardsToColumns: (state, action) => {
      const updatedColumns = state.columns.map((column) => {
        const columnCards = action.payload.filter(
          (card: ICardData) => column.draggableId === card.columnId
        );
        return { ...column, cards: columnCards };
      });

      return { ...state, columns: updatedColumns };
    },
  },
});

export const { setColumns, setCardsToColumns } = columnsSlice.actions;

export default columnsSlice.reducer;
