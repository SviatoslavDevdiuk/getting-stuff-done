import React, {useState} from "react";
import styled from "@xstyled/styled-components";

import emailIcon from "../svg/email-icon.svg";
import passwordIcon from "../svg/password-icon.svg";
import userIcon from "../svg/user-icon.svg";
import {EMAIL_VALIDATION_ERROR, PASSWORD_MATCH_ERROR} from "../constants/messages";
import {signUp} from "../service/AuthenticationService";
import {useNavigate} from "react-router-dom";

export interface ISignupData {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

const SignupContainer = styled.divBox`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const SeparatorLine = styled.divBox`
    width: 90%;
    height: 1px;
    background-color: #ccc;
    margin: 20px 15px;
`;

const SignupForm = styled.formBox`
    background: rgba(255, 255, 255, 0.8);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    text-align: center;
    max-width: 300px;
    width: 100%;
`;

const InputGroup = styled.divBox`
    position: relative;
    margin-bottom: 15px;
`;

const Input = React.memo(styled.inputBox`
    width: 90%;
    font-size: large;
    padding: 8px 8px 8px 40px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 8px;
    transition: border-color 0.3s;
    height: 40px;

    &:focus {
        border-color: #4caf50;
    }
`);

const Icon = styled.imgBox`
    background-color: #5aac44;
    border-radius: 8px 0 0 8px;
    position: absolute;
    top: 50%;
    padding: 10px;
    transform: translateY(-50%);
    width: 15px;
    height: 20px;
`;

const SubmitButton = styled.buttonBox`
    background-color: #5aac44;
    width: 90%;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
    margin-top: 20px;
    margin-bottom: 20px;

    &:hover {
        background-color: #45a049;
    }
`;

const LoginButton = styled.buttonBox`
    margin-right: 15px;
    background-color: transparent;
    color: #5aac44;
    border: none;
    cursor: pointer;
    font-size: 14px;

    &:hover {
        text-decoration: underline;
    }
`;

const SignupSuccess = styled.divBox`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    max-width: 300px;
    width: 100%`;

const RedirectToLoginButton = styled.buttonBox`
    background-color: #5aac44;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
    margin-top: 20px;
    margin-bottom: 20px;

    &:hover {
        background-color: #45a049;
    }
`;


const Signup = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [signupFormError, setSignupFormError] = useState<string>('');
    const [signupSuccess, setSignupSuccess] = useState<boolean>(false);
    const navigate = useNavigate();

    const changeEmailInput = (value: string) => {
        setSignupFormError("");
        setEmail(value);
    };


    const isEmailValid = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isEmailValid(email)) {
            if (password === confirmPassword) {
                signUp({
                    email: email,
                    password: password,
                    firstName: firstName,
                    lastName: lastName
                }, response => handleSignupResponse(response))
            } else {
                setSignupFormError(PASSWORD_MATCH_ERROR);
            }
        } else {
            setSignupFormError(EMAIL_VALIDATION_ERROR);
        }
    };

    const handleSignupResponse = (response: any) => {
        if (response.error) {
            console.log("ERROR: ")
            console.log(response.error);
            setSignupFormError(response.error);
            setSignupSuccess(false);
        } else {
            setSignupSuccess(true);
            clearSignupForm();

        }
    }

    const handleLoginButtonClick = () => {
        navigate("/login")
    }

    const clearSignupForm = () => {
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setFirstName('');
        setLastName('');
    }

    const Success = () => {
        return (<SignupSuccess>
            You successfully signed up, you can log in now with your credentials (email & password)
            <RedirectToLoginButton onClick={handleLoginButtonClick}>Go to Login page</RedirectToLoginButton>
        </SignupSuccess>)
    }
    return (signupSuccess ? <Success/> : <SignupContainer>
            <SignupForm onSubmit={handleSubmit}>
                <h2 style={{color: "#5aac44", marginBottom: "20px"}}>Sign Up</h2>
                <SeparatorLine/>
                <InputGroup>
                    <Icon src={emailIcon} alt="Email Icon"/>
                    <Input
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            changeEmailInput(e.target.value)
                        }
                        placeholder="Email"
                        required
                    />
                </InputGroup>
                <InputGroup>
                    <Icon src={passwordIcon} alt="Password Icon"/>
                    <Input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setPassword(e.target.value)
                        }
                        placeholder="Password"
                        required
                    />
                </InputGroup>
                <InputGroup>
                    <Icon src={passwordIcon} alt="Password Icon"/>
                    <Input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setConfirmPassword(e.target.value)
                        }
                        placeholder="Confirm Password"
                        required
                    />
                </InputGroup>
                <InputGroup>
                    <Icon src={userIcon} alt="person icon"/>
                    <Input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={firstName}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setFirstName(e.target.value)
                        }
                        placeholder="First Name"
                        required
                    />
                </InputGroup>
                <InputGroup>
                    <Icon src={userIcon} alt="person icon"/>
                    <Input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={lastName}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setLastName(e.target.value)
                        }
                        placeholder="Last Name"
                        required
                    />
                </InputGroup>
                <p></p>
                <SeparatorLine/>
                <LoginButton>Already have an account? Login</LoginButton>
                <SubmitButton type="submit">Sign Up</SubmitButton>
                <p style={{color: "#5aac44", marginTop: "10px"}}>
                    Need help? Contact
                    <br/>
                    getting-stuff-done@gmail.com
                </p>
            </SignupForm>
        </SignupContainer>
    );
};

export default Signup;