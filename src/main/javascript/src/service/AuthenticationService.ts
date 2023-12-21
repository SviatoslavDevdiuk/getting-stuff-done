import {ILoginData} from "../components/Login";
import {AUTHENTICATION, LOGIN, SIGNUP} from "../constants/routes";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

export interface IAuthenticationData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

const requestOptions = (jsonData: string) => {
    return {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: jsonData,
    };
};

export const logIn = (data: ILoginData) => {
    console.log("login: ", data);
    fetch("http://localhost:8080" + AUTHENTICATION + LOGIN, requestOptions(JSON.stringify(data)))
        .then((response) => console.log(response.json()))
        .catch((error) => console.log(error));
};

export const signUp = (data: IAuthenticationData, fallback: (response: any) => void) => {
    console.log("sing up: ", data);

    fetch("http://localhost:8080" + AUTHENTICATION + SIGNUP, requestOptions(JSON.stringify(data)))
        .then((response) => fallback(response)).catch((error) => console.log("error: " +
        error))
}
