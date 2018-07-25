import * as React from 'react';

interface LoginProps {
    navigateToHome: () => void
}

const LoginPage = (props: LoginProps) => {
    const doSomething = () => {
        console.log("Hi there");
    }
    return (
        <div>
            <button onClick={props.navigateToHome}>Home</button>
            <h1> Login </h1>
            <form onSubmit={doSomething}>
                <p>Username:</p>
                <input type="text" name="username" />
                <p>Password:</p>
                <input type="password" name="password" />
                <input type="submit" value="Log in" />
            </form>
        </div>
    );
}

export default LoginPage;