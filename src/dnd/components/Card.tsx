import React, { RefObject, useState } from "react";
import { Draggable, DraggableId } from "react-beautiful-dnd";
import styled from "@xstyled/styled-components";
import { css } from "styled-components";
import pencilButton from "../../svg/pencil-button.svg";
import { editCard } from "../../redux/slices/cardsSlice";
import { useDispatch } from "react-redux";

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

const PencilIcon = styled.imgBox`
  width: 20px;
  height: 20px;
  font-weight: bold;
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  opacity: 0;
`;

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

  &:focus-within {
    background-color: #f4f5f7;
  }

  &:hover {
    ${(props: any) =>
      !props.isDragging &&
      css`
        box-shadow: 0 0 3px green;
        background-color: #f4f5f7;
        transform: scale(1.03);
      `}
    ${PencilIcon} {
      opacity: 1;
    }
  }
`;

const Content = styled.divBox`
  color: #000100;
  font-size: 15px;
  line-height: 20px;
`;

const Input = styled.inputBox`
  color: #000100;
  font-size: 15px;
  line-height: 20px;
  border: 0;
  outline: none;
  &:focus {
    background-color: #f4f5f7;
  }
`;

const Card: React.FC<ICard> = ({ data, index }) => {
  const [pencilClicked, setPencilClicked] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>();

  const dispatch = useDispatch();

  const handlePencilClick = (value: string) => {
    setPencilClicked(!pencilClicked);
    setInputValue(value);
  };

  const handleInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleCardTitleChange = () => {
    dispatch(editCard({ title: inputValue, id: data.id }));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCardTitleChange();
    }
  };

  return (
    <Draggable key={data.id} draggableId={data.id} index={index}>
      {(dragProvided, dragSnapshot) => (
        <Container
          ref={dragProvided.innerRef}
          {...dragProvided.draggableProps}
          {...dragProvided.dragHandleProps}
          isDragging={dragSnapshot.isDragging}
        >
          {pencilClicked ? (
            <Content>{data.title}</Content>
          ) : (
            <Input
              value={inputValue}
              onChange={handleInputValueChange}
              autoFocus
              onKeyDown={handleKeyDown}
            ></Input>
          )}
          <PencilIcon
            src={pencilButton}
            alt="Pencil Icon"
            onClick={() => {
              handlePencilClick(data.title);
            }}
          />
        </Container>
      )}
    </Draggable>
  );
};

export default Card;
