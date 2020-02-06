import React, { useState }  from 'react'
import styled from 'styled-components';
import { Button, FormGroup, FormControl } from "react-bootstrap";


const Styles = styled.div `

    .Login {
        padding: 60px 0;
    }

    .Login form {
        margin: 0 auto;
        max-width: 320px;
    }

`;

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }
    return (
        <Styles>
            <div className="Login">
                <form onSubmit={handleSubmit}>
                    <FormGroup controlId="email" bsSize="large">
                        <FormControl
                            autoFocus type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <FormControl
                            value={password} placeholder="Password" onChange={e => setPassword(e.target.value)} type="password"
                        />
                    </FormGroup>
                    <Button block bsSize="large" disabled={!validateForm()} type="submit">Login</Button>
                </form>
            </div>
        </Styles>
    );
}

export default Login;