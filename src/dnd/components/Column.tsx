import React, { useState } from "react";
import { Draggable, DraggableId } from "react-beautiful-dnd";
import styled, { color } from "@xstyled/styled-components";
import "./column.css";
import { useDispatch, useSelector } from "react-redux";
import Card, { ICardData } from "./Card";
import { IColumn } from "../../redux/slices/columnsSlice";
import CardList from "./CardList";
import { RootState } from "../../redux/store";

const Container = styled.divBox`
  background-color: #f4f5f7;
  border-radius: 2.5 px;
  width: 300px;
  height: 475px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  border: 1px solid gray;
`;

const TaskList = styled.divBox`
  padding: 3px;
  transition: background-color 0.2s ease;
  background-color: #f4f5f7;
  flex-grow: 1;
  min-height: 100px;
`;

const Title = styled.divBox`
  padding: 8px;
  transition: background-color ease 0.2s;
  flex-grow: 1;
  position: relative;
  &:focus {
    outline: 2px solid #998dd9;
    outline-offset: 2px;
  }
`;

const Header = styled.divBox`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #7668c5;
  }
`;

// background-color: ${(isDragging:boolean ) =>
//     isDragging ? #f4f5f7 : #7668c5};
export default function Column({ draggableId, title, index }: IColumn) {
  const cards: Array<ICardData> = useSelector(
    (state: RootState) => state.cards.data
  );

  const getCards = (draggableId: DraggableId): Array<ICardData> => {
    return cards.filter((card) => card.columnId === draggableId);
  };

  return (
    <Draggable draggableId={draggableId} index={index}>
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Header isDragging={snapshot.isDragging}>
            <Title isDragging={snapshot.isDragging}>{title}</Title>
          </Header>
          <CardList cards={getCards(draggableId)} />
        </Container>
      )}
    </Draggable>
  );
}
