import React, { RefObject, forwardRef } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import styled from "@xstyled/styled-components";
import Card, { ICardData } from "./Card";

export interface ICardsList {
  cards: Array<ICardData>;
}

export const getBackgroundColor = (
  isDraggingOver: boolean,
  isDraggingFrom: boolean
) => {
  return isDraggingOver ? "#FFEBE6" : isDraggingFrom ? "#E6FCFF" : "#EBECF0";
};

const InnerCardList: React.FC<ICardsList> = React.memo(function InnerCardList({
  cards,
}) {
  return cards.map((card: ICardData, index: number) => (
    <Card index={index} data={card} />
  ));
});

const Wrapper = styled.divBox<{
  isDraggingOver: boolean;
  isDraggingFrom: boolean;
}>`
  background-color: ${(props: any) =>
    getBackgroundColor(props.isDraggingOver, props.isDraggingFrom)};
  display: flex;
  flex-direction: column;
  padding: 2px;
  border: 2px;
  padding-bottom: 0;
  transition: background-color 0.2s ease;
  width: 250px;
`;

const CardList: React.FC<ICardsList> = (props) => {
  return (
    <Droppable droppableId={"LIST"} ignoreContainerClipping={true}>
      {(dropProvided, dropSnapshot) => (
        <Wrapper
          ref={dropProvided.innerRef}
          isDraggingFrom={dropSnapshot.draggingFromThisWith}
          isDraggingOver={dropSnapshot.isDraggingOver}
          {...dropProvided.droppableProps}
        >
          <InnerCardList cards={props.cards} />
          {dropProvided.placeholder}
        </Wrapper>
      )}
    </Droppable>
  );
};

export default CardList;
