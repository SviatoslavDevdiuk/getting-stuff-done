import React, { RefObject } from "react";
import { Draggable, DraggableId } from "react-beautiful-dnd";
import styled from "@xstyled/styled-components";
import { css } from "styled-components";

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

const Container = styled.divBox`
  box-align: center;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
  cursor: pointer;
  margin-bottom: 8px;
  padding: 8px;
  width: 100%;

  ${(props: any) =>
    props.isDragging &&
    css`
      box-shadow: 0 0 3px green;
      background-color: #f4f5f7;
      transform: scale(1.03);
    `}

  &:hover {
    ${(props: any) =>
      !props.isDragging &&
      css`
        box-shadow: 0 0 3px green;
        background-color: #f4f5f7;
        transform: scale(1.03);
      `}
  }
`;

const Content = styled.divBox`
  color: #000100;
  font-size: 15px;
  line-height: 20px;
`;

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
          {...dragProvided.draggableProps}
          {...dragProvided.dragHandleProps}
          isDragging={dragSnapshot.isDragging}
        >
          <Content>{data.title}</Content>
        </Container>
      )}
    </Draggable>
  );
};

export default Card;
