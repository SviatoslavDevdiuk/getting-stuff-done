import React, { RefObject, useState } from "react";
import { Draggable, DraggableId } from "react-beautiful-dnd";
import styled from "@xstyled/styled-components";
import { css } from "styled-components";
import pencilButton from "../../svg/pencil-button.svg";
import deleteButton from "../../svg/delete-button.svg";
import { deleteCard, editCard } from "../../redux/slices/cardsSlice";
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
  right: 10%;
  transform: translateY(-50%);
  opacity: 0;
`;

const RemoveIcon = styled.imgBox`
  width: 20px;
  height: 20px;
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  right: 2%;
  opacity: 0;
`;

const Content = styled.divBox`
  color: #000100;
  font-size: 15px;
  line-height: 20px;
  width: 85%;
  padding-left: 5%;
`;

const Container = styled.divBox`
  box-align: center;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
  cursor: pointer;
  margin-bottom: 8px;
  padding: 8px;
  width: 112%;

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
        transform: scale(1.05);
      `}
    ${PencilIcon} {
      opacity: 1;
    }

    ${RemoveIcon} {
      opacity: 1;
    }
    ${Content} {
      padding-left: 0;
    }
  }
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

  const handleEditClick = (value: string) => {
    setPencilClicked(!pencilClicked);
    setInputValue(value);
  };

  const handleInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleCardTitleChange = () => {
    console.log("input Value");
    dispatch(editCard({ title: inputValue, id: data.id }));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log("enter down");
      handleCardTitleChange();
      setPencilClicked(!pencilClicked);
    }
  };

  const handleCardDelete = () => {
    dispatch(deleteCard({ id: data.id }));
  };

  return (
    <Draggable key={data.id} draggableId={data.id} index={index}>
      {(dragProvided, dragSnapshot) => (
        <Container
          ref={dragProvided.innerRef}
          {...dragProvided.draggableProps}
          {...dragProvided.dragHandleProps}
          isDragging={dragSnapshot.isDragging}
          onClick={() => handleEditClick(data.title)}
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
              handleEditClick(data.title);
            }}
          />
          <RemoveIcon
            src={deleteButton}
            alt="Delete Icon"
            onClick={handleCardDelete}
          />
        </Container>
      )}
    </Draggable>
  );
};

export default Card;
