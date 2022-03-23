import React from "react";
import styled from "styled-components";

const SiteHeaderWrapper = styled.div`
  position: absolute;
  width: 100vw;

  display: block;
`;

const GlobalMenu = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

const SiteHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between; 
  width: 100%;
  height: 54px;
`;

const SiteLogoContainer = styled.h1`
  display: flex;
  align-items: center;
  width: 240px;
  height: 100%;
  padding-left: 32px;
`;

const SiteLogoLink = styled.a`
  display: inline-flex;
  padding: 0px 8px 0px 16px;
  font-size: 40px;
`;

const SiteLogo = styled.svg`
  color: #000;
  display: block;
  block-size: 24px;
  max-inline-size: 100%;
  min-block-size: 24px;
  min-inline-size: 24px;
  inline-size: 120px;
`;

function Nav() {
  return (
    <SiteHeaderWrapper>
      <GlobalMenu>
        <SiteHeader>
          <SiteLogoContainer>
            <SiteLogoLink href="https://www.tesla.com/ko_KR/">
              <SiteLogo viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 .1a9.7 9.7 0 007 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 007-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 006-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 00-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 13.8h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 14.1h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zM308.5 7h26a9.6 9.6 0 007-7h-40a9.6 9.6 0 007 7z"
                  fill="currentColor"
                ></path>
              </SiteLogo>
            </SiteLogoLink>
          </SiteLogoContainer>
          <ol>menu</ol>
          <ol></ol>
        </SiteHeader>
        <dialog>
          <div></div>
          <section></section>
        </dialog>
      </GlobalMenu>
    </SiteHeaderWrapper>
  );
}

export default Nav;
