import React, { useState } from "react";
import { Draggable, DraggableId } from "react-beautiful-dnd";
import styled, { color } from "@xstyled/styled-components";
import CardList from "./CardList";
import Card, { ICardData } from "./Card";
import { useDispatch } from "react-redux";
import { createCard } from "../../redux/slices/cardsSlice";

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

const NewCardContainer = styled.divBox`
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
  cursor: pointer;
  margin-bottom: 8px;
  padding: 5px;
  width: 95%;
`;

const NewCardInput = styled.inputBox`
  border: none;
  width: 75%;
  font-size: 16px; /* Adjust the font size as needed */
  min-height: 20px; /* Set a minimum height */
  outline: none;
`;

export const NewCardSubmitButton = styled.buttonBox`
  background-color: #4caf50; /* Green */
  position: relative;
  /* overflow: hidden; */
  color: white;
  padding: 0px 8px;
  border: none;
  border-radius: 5px;
  /* vertical-align: top; */
  flex: auto;
  cursor: pointer;
  font-size: 24px;
  &:hover {
    background-color: #226b26; /* Darker green on hover */
  }

  &:active {
    background-color: #3e8e41;
    box-shadow: 0 2px #666;
    transform: translateY(3px);
  }
`;

export const CloseButton = styled.buttonBox`
  background-color: #f44336; /* Red */
  color: white;
  padding: 2px 8px;
  border: none;
  border-radius: 5px;
  vertical-align: top;
  cursor: pointer;
  font-size: 20px;
  margin-left: 4px;
  &:hover {
    background-color: #d32f2f; /* Darker red on hover */
  }
`;

const Column: React.FC<IColumn> = ({ data, index }) => {
  const [createCardClicked, setCreateCardClicked] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const renderNewCard = () => {
    setCreateCardClicked(!createCardClicked);
  };

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleSubmitButtonClick = (columndId: DraggableId) => {
    dispatch(createCard( {droppableId: columndId, title: inputValue} ));
    setCreateCardClicked(false);
  };

  // const

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
            <AddCardButton
              onClick={() => {
                renderNewCard();
              }}
            >
              Create a Card
            </AddCardButton>
          </Header>
          {createCardClicked && (
            <NewCardContainer>
              <NewCardInput
                onChange={(event: any) => {
                  handleInputChange(event);
                }}
              ></NewCardInput>
              <NewCardSubmitButton onClick={() => handleSubmitButtonClick(data.draggableId)}>+</NewCardSubmitButton>
              <CloseButton onClick={() => setCreateCardClicked(false)}>
                X
              </CloseButton>
            </NewCardContainer>
          )}

          <CardList droppableId={data.draggableId} cards={data.cards} />
        </Container>
      )}
    </Draggable>
  );
};

export default Column;
