import React, { RefObject, forwardRef } from "react";
import { Droppable, DroppableId } from "react-beautiful-dnd";
import styled from "@xstyled/styled-components";
import Card, { ICardData } from "./Card";

export interface ICardsList {
  cards: Array<ICardData>;
  droppableId: DroppableId;
}

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
  width: 250px;
`;

const CardList: React.FC<ICardsList> = (props) => {
  return (
    <Droppable
      type="sub"
      droppableId={props.droppableId}
      ignoreContainerClipping={true}
    >
      {(dropProvided, dropSnapshot) => (
        <Wrapper ref={dropProvided.innerRef} {...dropProvided.droppableProps}>
          <InnerCardList droppableId={props.droppableId} cards={props.cards} />
          {dropProvided.placeholder}
        </Wrapper>
      )}
    </Droppable>
  );
};

export default CardList;
