import React from 'react';
import styled from "styled-components";
import PlanPalLogo from '../media/planpalw.svg';

const Footer = () => {
    return (
        <Div26>
          <img src={PlanPalLogo}/>
        </Div26>
    );
}
const Div26 = styled.div`
  color: #fff;
  font-family: Lora, sans-serif;
  font-size: 48px;
  font-weight: 700;
  align-self: stretch;
  text-wrap: nowrap;
  background-color: #68627b;
  margin-top: 65px;
  width: 100%;
  height:100px;
  padding-right: 20px;
  padding-top:32px;
  padding-left: 32px;
  @media (max-width: 991px) {
    font-size: 40px;
    text-wrap: initial;
    max-width: 100%;
  }
`;


export default Footer;
