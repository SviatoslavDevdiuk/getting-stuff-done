import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICardData } from "../../dnd/components/Card";
import { RootState } from "../store";
import { DraggableId } from "react-beautiful-dnd";


export interface IColumn {
    title: string;
    draggableId: DraggableId;
    index: number;
}

interface Columns {
    columns: Array<IColumn>
}

const initialState: Columns = {
    columns: [{ title: "Mailbox", draggableId: "1", index: 1 },
    { title: "In Progress", draggableId: "2", index: 2 }]
}

const columnsSlice = createSlice({
    name: 'column',
    initialState,
    reducers: {
        setColumns: (state, action) => {
            state.columns = action.payload;
        }
    },
})

export const { setColumns } = columnsSlice.actions;

export default columnsSlice.reducer;