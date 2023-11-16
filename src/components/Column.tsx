import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import "./column.css"
import Task from '../components/Task';


interface IColumn {
    title: string;
    tasks: string[];
    id: string;
}
const Container = styled.div`
background-color: #f4f5f7;
border-radius: 2.5 px;
width: 300px;
height: 475px;
overflow-y: scroll;
-ms-overflow-style: none;
scrollbar-width: none;
border: 1px solid gray;`;

const TaskList = styled.div`
padding: 3px;
transition: background-color 0.2s ease;
background-color: #f4f5f7;
flex-grow: 1;
min-height: 100px;`



export default function Column({ title, tasks, id } : IColumn) {
    return (
        <Container className="column">
            <h3 className="column-title">
                {title}
            </h3>
            <Droppable droppableId={id} >
                {(provided, snapshot) => {
                   
                     <TaskList ref={provided.innerRef} {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver}>
<Task task={{id: 1, title: "first task"}} index={1}/>
                         {provided.placeholder}
                     </TaskList>
                }}
            </Droppable> 
        </Container>
    )
}