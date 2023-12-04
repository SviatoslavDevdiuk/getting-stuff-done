import { ICardData } from "./components/Card";
import { IColumnData } from "./components/Column";

export const reorder = (
  list: IColumnData,
  startIndex: number,
  endIndex: number
) => {
  const clonedList = structuredClone(list);
  const removedElement = clonedList.cards.splice(startIndex, 1)[0];
  clonedList.cards.splice(endIndex, 0, removedElement);
  return clonedList;
};

//for moving cards & columns
export const reorderBoard = (
  lists: Array<IColumnData>,
  source: any,
  destination: any
) => {
  const clonedLists: Array<IColumnData> = structuredClone(lists);
  const { droppableId: sourceDroppableId, index: sourceIndex } = source;
  const { droppableId: destDroppableId, index: destIndex } = destination;

  const sourceListIndex = clonedLists.findIndex(
    (column) => column.draggableId == sourceDroppableId
  );

  if (sourceDroppableId === destDroppableId) {
    // Reordering within the same list
    if(sourceDroppableId === "board"){
      const movedColumn: IColumnData  = clonedLists.splice(sourceIndex, 1)[0];
      clonedLists.splice(destIndex, 0, movedColumn);
      return clonedLists;
    }
    const updatedList = reorder(
      clonedLists[sourceListIndex],
      sourceIndex,
      destIndex
    );
    clonedLists[sourceListIndex] = updatedList;
   return clonedLists;
  } else {
    // Moving between lists
    const destListIndex = clonedLists.findIndex(
      (column) => column.draggableId == destDroppableId
    );

    const sourceList = clonedLists[sourceListIndex];
    const destList = clonedLists[destListIndex];
    const movedElement: ICardData = sourceList.cards.splice(sourceIndex, 1)[0];
    movedElement.columnId = destDroppableId;
    destList.cards.splice(destIndex, 0, movedElement);

    return clonedLists;
  }
};
