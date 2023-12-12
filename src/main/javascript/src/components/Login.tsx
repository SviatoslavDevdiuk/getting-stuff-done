import React, {useState} from 'react';
import styled from '@xstyled/styled-components';

import emailIcon from '../svg/email-icon.svg';
import passwordIcon from '../svg/password-icon.svg';


export interface ILoginData {
    email:string;
    password:string;
}
const LoginContainer = styled.divBox`
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

const LoginForm = styled.formBox`
    background: rgba(255, 255, 255, 0.8);
    //background: #f1ffec;
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

const Label = styled.labelBox`
    display: block;
    margin-bottom: 5px;
    color: #333;
`;

const Input = styled.inputBox`

    width: 90%;
    font-size: large;
    padding: 8px 8px 8px 40px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-top: 5px;
    margin-bottom: 5px;
    transition: border-color 0.3s;
    height: 40px;

    &:focus {
        border-color: #4CAF50;
    }
`;

const Icon = styled.imgBox`
    background-color: #5aac44;
    border-radius: 8px 0 0 8px;
    position: absolute;
    top: 50%;
    //left: 10px;
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

const ForgotPasswordButton = styled.buttonBox`
    margin-right: 15px;
  background-color: transparent;
  color: #5aac44;
  border: none;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    //text-decoration: none;
  text-decoration: underline;
  }
`;

const SignUpButton = styled.buttonBox`
  background-color: transparent;
  color: #5aac44;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  //margin-top: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const ErrorText = styled.textBox`
font-size: 16px;
color: red`

const Login = () => {

    const EMAIL_VALIDATION_ERROR: string = 'Please provide a valid email address';
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loginFormError, setLoginFormError] = useState<string>('');


    const changeEmailInput = (value: string)=>{
        setLoginFormError('');
        setEmail(value);
    }
    const isEmailValid = (email: string) => {
        // Regular expression for basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };


    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (isEmailValid(email)) {

        } else {
            setLoginFormError(EMAIL_VALIDATION_ERROR);
        };
        // Add your login logic here
        console.log('Username:', email);
        console.log('Password:', password);
    };

    return (
        <LoginContainer>
            <LoginForm onSubmit={handleSubmit}>
                <h2 style={{color: "#5aac44", marginBottom: "20px"}}>Login</h2>
                <SeparatorLine/>
                <InputGroup>
                    <Icon src={emailIcon} alt="Email Icon"/>
                    <Input
                        type="text"
                        id="username"
                        name="username"
                        value={email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeEmailInput(e.target.value)}
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
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        required
                    />
                </InputGroup>
                <SeparatorLine/>
                <ForgotPasswordButton>Forgot your password?</ForgotPasswordButton>
                <SignUpButton>Sign Up</SignUpButton>
                <SubmitButton type="submit">Login</SubmitButton>
                <ErrorText>{loginFormError}</ErrorText>
            </LoginForm>
        </LoginContainer>
    );
};

export default Login;