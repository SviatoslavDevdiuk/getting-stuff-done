import React, { useState } from "react"
import { DragDropContext } from "react-beautiful-dnd"
import Column from "./Column";

export default function Board() {

    const [complete, setComplete] = useState([]);
    const [inProgress, setInProgress] = useState([]);



    return (<DragDropContext > 
        <h1>Getting Stuff Done</h1>
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection:"row"
        }}>
            <Column title={"Mailbox"} tasks={inProgress} id={"0"}/>
            <Column title={"In Progress"} tasks={inProgress} id={"01"}/>
            <Column title={"Done"} tasks={inProgress} id={"02"}/>

        </div>

    </DragDropContext>)
}