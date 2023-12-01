export const reorder = (
  list: Array<any>,
  startIndex: number,
  endIndex: number
) => {
  const clonedList = structuredClone(list);
  const [removedElement] = clonedList.splice(startIndex, 1);
  clonedList.splice(endIndex, 0, removedElement);
  return clonedList;
};

//for moving cards & columns
export const reorderBoard = (lists: any, source: any, destination: any) => {
  const clonneedLists = structuredClone(lists);
  const current = structuredClone(lists[source.droppableId]);
  const next = structuredClone(lists[destination.droppableId]);
  const targetElement = current[source.index];

  if (source.droppableId === destination.droppableId) {
    const reorderedList = reorder(current, source.index, destination.index);
    const result = { clonneedLists, [source.index]: reorderedList };
    return { lists: result };
  }

  current.splice(source.index, 1);
  next.splice(destination.index, 0, targetElement);

  const result = {
    clonneedLists,
    [source.droppableId]: current,
    [destination.draggableId]: next,
  };

  return { lists: result };
};
