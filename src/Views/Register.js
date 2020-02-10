import React, { useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import styled from 'styled-components';
import { render } from "@testing-library/react";


const Styles = styled.div `

    .Register {
        padding: 60px 0;
    }

    .Register form {
        margin: 0 auto;
        max-width: 320px;
    }

`;


const Register = () => {
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
        <div className="Register">
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
                
                <FormGroup controlId="password" bsSize="large">
                    <FormControl
                        value={password} placeholder="Confirm Password" onChange={e => setPassword(e.target.value)} type="password"
                    />
                </FormGroup>
                <Button block bsSize="large" disabled={!validateForm()} type="submit">Register</Button>
            </form>
        </div>
    </Styles>
  )
}

export default Register;

