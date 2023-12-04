import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Column, { IColumn, IColumnData } from "./Column";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import styled from "@xstyled/styled-components";
import { setCardsToColumns } from "../../redux/slices/columnsSlice";
import { useDispatch } from "react-redux";
import { moveElement } from "../../redux/slices/cardsSlice";
import { ICardData } from "./Card";

const ColumnWrapper = styled.divBox`
  display: flex;
  gap: 10px;
  padding: 10px;
  justify-content: space-evenly;
`;

export default function Board() {
  const columns: Array<IColumnData> = useSelector(
    (state: RootState) => state.columns.columns
  );

  const cards: Array<ICardData> = useSelector(
    (state: RootState) => state.cards.data
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCardsToColumns(cards));
  }, [cards]);

  useEffect(() => {}, [columns]);

  const handleDragEnd = (result: any) => {
    const { source, destination } = result;

    if (!result.destination) {
      return;
    }

    dispatch(
      moveElement({
        source: source,
        destination: destination,
      }) as any
    );
  };

  return (
    <div>
      <h1>Getting Stuff Done</h1>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable
          type="column"
          direction="horizontal"
          key="board"
          droppableId="board"
        >
          {(dropProvided, dropSnapshot) => (
            <ColumnWrapper
              ref={dropProvided.innerRef}
              {...dropProvided.droppableProps}
            >
              {columns.map((data: IColumnData, index: number) => (
                <Column data={data} index={index} />
              ))}
              {dropProvided.placeholder}
            </ColumnWrapper>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
