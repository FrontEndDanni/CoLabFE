import React from 'react';
import styled from "styled-components";
import PlanPalLogo from '../media/planpal.svg';

const Header = () => {
  const navigateToHome = () => {
    window.location.href = '/';
  };

  return (
    <Div2 onClick={navigateToHome}>
      <img
        src={PlanPalLogo}
        alt="PlanPal Logo"
        style={{ width: '133px', height: '35px', cursor: 'pointer' }}
      />
    </Div2>
  );
};

const Div2 = styled.div`
  align-self: stretch;
  text-wrap: nowrap;
  border-bottom: 1px solid #F5F5F5;
  box-shadow: 0px -3px 21px 0px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  width: 100%;
  padding-top: 34px;
  padding-right: 20px;
  padding-bottom: 19px;
  padding-left: 20px;
  @media (max-width: 991px) {
    font-size: 40px;
    text-wrap: initial;
    max-width: 100%;
  }
`
;

export default Header;
