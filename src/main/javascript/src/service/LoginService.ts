import {ILoginData} from "../components/Login";

const requestOptions = (jsonData: string) => {
    return {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        'body': jsonData
    }
}

export const logIn = (data: ILoginData) => {
    console.log()
    fetch("http://localhost:8080/login",
        requestOptions(JSON.stringify(data)))
        .then(response => console.log(response.json()))
        .catch(error => console.log(error))

}


