import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Column from "./Column";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import styled from "@xstyled/styled-components";
import { IColumn, setCardsToColumns } from "../../redux/slices/columnsSlice";
import { useDispatch } from "react-redux";
import { moveCard } from "../../redux/slices/cardsSlice";
import { ICardData } from "./Card";

export default function Board() {
  const columns: Array<IColumn> = useSelector(
    (state: RootState) => state.columns.columns
  );

  const cards: Array<ICardData> = useSelector(
    (state: RootState) => state.cards.data
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCardsToColumns(cards));
  }, []);

  const handleDragEnd = (result: any) => {
    console.log("result:", result);
    const { source, destination } = result;

    if (!result.destination) {
      return;
    }

    dispatch(
      moveCard({
        source: {
          droppableId: result.source.droppableId,
          index: result.source.index,
        },
        destination: {
          droppableId: result.destination.droppableId,
          index: result.destination.index,
        },
      }) as any
    );
  };

  const ColumnWrapper = styled.divBox`
    display: flex;
    gap: 10px;
    padding: 10px;
    justify-content: space-evenly;
    background-color: ${(props: any) =>
      props.isDraggingOver ? "#E6FCFF" : "transparent"};
  `;

  return (
    <div>
      <h1>Getting Stuff Done</h1>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable key="board" droppableId="board">
          {(dropProvided, dropSnapshot) => (
            <ColumnWrapper
              ref={dropProvided.innerRef}
              {...dropProvided.droppableProps}
            >
              {columns.map((column) => (
                <Column
                  key={column.draggableId}
                  draggableId={column.draggableId}
                  title={column.title}
                  cards={column.cards}
                  index={column.index}
                />
              ))}
              {dropProvided.placeholder}
            </ColumnWrapper>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
