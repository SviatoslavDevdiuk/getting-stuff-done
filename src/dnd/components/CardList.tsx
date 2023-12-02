import React, { RefObject, forwardRef } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import styled from "@xstyled/styled-components";
import Card, { ICardData } from "./Card";

export interface ICardsList {
  cards: Array<ICardData>;
}

// export const getBackgroundColor = (
//   isDraggingOver: boolean,
//   isDraggingFrom: boolean
// ) => {
//   return isDraggingOver ? "#FFEBE6" : isDraggingFrom ? "#E6FCFF" : "#EBECF0";
// };

const InnerCardList: React.FC<ICardsList> = React.memo(function InnerCardList({
  cards,
}: ICardsList) {
  return cards.map((card: ICardData, index: number) => (
    <Card key={card.id} index={index} data={card} />
  ));
});

const Wrapper = styled.divBox`
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
