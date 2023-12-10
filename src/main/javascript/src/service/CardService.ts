import {ICardData} from "../dnd/components/Card";

const requestOptions = (jsonData: string) => {
    return {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'

        },
        'body': jsonData
    }
}

export const createCardPost = (data: ICardData) => {
    const jsonData = JSON.stringify(data);
    const options = requestOptions(jsonData);
console.log("request: ", options)
    fetch('http://localhost:8080/card/create', options)
        .then(response => response.json())
        .then(data => console.log(data)).catch(error => console.log(error));
}