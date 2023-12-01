import React, { RefObject } from "react";
import "./card.css";
import { Draggable, DraggableId } from "react-beautiful-dnd";
import styled from "@xstyled/styled-components";

export interface ICardData {
  id: string;
  title: string;
  content?: string;
  columnId: string;
}

interface ICard {
  data: ICardData;
  index: number;
}

const Container = styled.divBox<{ isDragging: boolean }>`
  border-radius: 2px;
  border: 2px solid transparent;
  padding: 2px;
  margin-bottom: 2px;
  background-color: ${(props: any) =>
    props.isDragging ? "lightblue" : "white"};
`;
const Content = styled.divBox`
  flex-grow: 1;
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
`;

const changeBackgroundColor = (props: any) => {
  return props.isDragging ? "lightblue" : "white";
};

function getStyle(provided: any, style: any) {
  if (!style) {
    return provided.draggableProps.style;
  }

  return {
    ...provided.draggableProps.style,
    ...style,
  };
}

const Card: React.FC<ICard> = ({ data, index }) => {
  return (
    <Draggable key={data.id} draggableId={data.id} index={index}>
      {(dragProvided, dragSnapshot) => (
        <Container
          ref={dragProvided.innerRef}
          isDragging={dragSnapshot.isDragging}
          {...dragProvided.draggableProps}
          {...dragProvided.dragHandleProps}
        >
          <Content isDragging={dragSnapshot.isDragging}>{data.title}</Content>
        </Container>
      )}
    </Draggable>
  );
};

export default Card;
