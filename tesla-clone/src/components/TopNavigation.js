import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";

const Wrapper = styled.div`
  height: 54px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`;

const LogoContainer = styled.div`
  width: 240px;
  height: 100%;
  display: grid;
  place-items: center;
`;

const Logo = styled.img`
  width: 120px;
  height: 24px;
  padding-left: 32px;
`;

const NavigationContainer = styled.ol`
  padding: 0px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const NavigationButton = styled.li`
  height: 24px;
  width: auto;

  padding: 8px 4px;
  display: grid;
  place-items: center;
`;

const NavigationButtonText = styled.span`
  margin: 0px 8px;
`;

const UserContainer = styled.div`
  padding-right: 32px;
  width: 240px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserButton = styled.div``;

function TopNavigation() {
  return (
    <Wrapper>
      <LogoContainer>
        <Logo src={logo} alt="No Logo" />
      </LogoContainer>

      <NavigationContainer>
        <NavigationButton>
          <NavigationButtonText>Model S</NavigationButtonText>
        </NavigationButton>
        <NavigationButton>
          <NavigationButtonText>Model 3</NavigationButtonText>
        </NavigationButton>
        <NavigationButton>
          <NavigationButtonText>Model X</NavigationButtonText>
        </NavigationButton>
        <NavigationButton>
          <NavigationButtonText>Model Y</NavigationButtonText>
        </NavigationButton>
        <NavigationButton>
          <NavigationButtonText>Cybertr</NavigationButtonText>uck
        </NavigationButton>
        <NavigationButton>
          <NavigationButtonText>Powerwa</NavigationButtonText>ll
        </NavigationButton>
      </NavigationContainer>
      <UserContainer>
        <UserButton>Shop</UserButton>
        <UserButton>계정</UserButton>
        <UserButton>메뉴</UserButton>
      </UserContainer>
    </Wrapper>
  );
}

export default TopNavigation;
