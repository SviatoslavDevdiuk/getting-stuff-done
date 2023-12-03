import React, { useState } from "react";
import { Draggable, DraggableId } from "react-beautiful-dnd";
import styled, { color } from "@xstyled/styled-components";
import CardList from "./CardList";
import { ICardData } from "./Card";

export interface IColumnData {
  title: string;
  draggableId: DraggableId;
  cards: Array<ICardData>;
}

export interface IColumn {
  data: IColumnData;
  index: number;
}

const Container = styled.divBox`
  background-color: #ebecf0;
  border-radius: 8px;
  border: 2px solid #ccc;
  margin-bottom: 8px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding: 8px;
  width: 300px;
  height: 475px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Title = styled.divBox`
  padding: 8px;
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
  justify-content: space-between;
  border-radius: 8px;
  margin-bottom: 15px;
  background-color: #61bd4f; /* Trello green color */
  color: #fff;
  padding: 8px;
  &:hover {
    background-color: #4a8f29; /* Darker green on hover */
  }
`;

const AddCardButton = styled.buttonBox`
  background-color: #5aac44; /* Trello green color for the button */
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
`;

const Column: React.FC<IColumn> = ({ data, index }) => {
  console.log("column data : ", data);
  return (
    <Draggable
      key={data.draggableId}
      draggableId={data.draggableId}
      index={index}
    >
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Header>
            <Title>{data.title}</Title>
            <AddCardButton>+ Add a Card</AddCardButton>
          </Header>

          <CardList droppableId={data.draggableId} cards={data.cards} />
        </Container>
      )}
    </Draggable>
  );
};

export default Column;
