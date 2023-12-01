import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Column from "./Column";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import styled from "@xstyled/styled-components";
import { IColumn } from "../../redux/slices/columnsSlice";
import { useDispatch } from "react-redux";
import { moveCard } from "../../redux/slices/cardsSlice";

export default function Board() {
  const columns: Array<IColumn> = useSelector(
    (state: RootState) => state.columns.columns
  );
  const dispatch = useDispatch();

  const handleDragEnd = (result: any) => {
    console.log("result:", result);
    const { source, destination } = result;

    if (
      !result.destination ||
      (source.droppableId === destination.droppableId &&
        source.index === destination.index)
    ) {
      return;
    }

    dispatch(
      moveCard({
        sourceIndex: source.index,
        destinationIndex: destination.index,
      })
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

  // const removeTask

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
