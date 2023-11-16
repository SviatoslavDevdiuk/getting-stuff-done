import React from "react";
import "./task.css";
import { Draggable } from "react-beautiful-dnd";



const changeBackgroundColor = (props) => {
    return props.isDragging ? "lightblue" : "white"
}

export default function Task({ task, index }) {

    return (
        <Draggable draggableId={`${task.id}`} key={task.id} index={index}>

            {(provided, snapshot) => (
                <div className="container" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} >
                    <div style={{ display: "flex", justifyContent: "start", padding: 2 }}>
                        <span>
                            <small>#{task.id}</small>
                            {" "}
                        </span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "start", padding: 2 }}>
                        <p>#{task.title}</p>
                        {""}
                    </div>
                </div>
            )}
        </Draggable>
    );
}