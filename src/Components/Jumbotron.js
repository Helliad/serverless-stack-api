import React from 'react'
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import bgImage from '../Images/cooltext348433452769085.png'


const Styles = styled.div `
    .jumbotron {
        background:url(${bgImage}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 200px;
        position: relative;
        z-index: -2;
      }
      .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
      }
`;

const Jumbotron = () => {
    return (
        <Styles>
            <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
                <Container>
                    <h1>Talent Search</h1>
                    <p>Search for your talents</p>
                </Container>
            </Jumbo>
        </Styles>
    )
}

export default Jumbotron;