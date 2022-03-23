import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Highlight from "./Highlight";

const SiteHeaderWrapper = styled.div`
  position: absolute;
  width: 100vw;
  display: block;
  * {
    font-family: "Gotham";
  }
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

const NavigationWrapper = styled.ol`
  display: inline-flex;
  align-items: center;
`;

const NavigationTab = styled.li`
  display: list-item;
  position: relative;
`;

const NavigationLink = styled.a`
  text-decoration: none;
  color: inherit;
  position: relative;
  display: block;
  padding: 4px 8px;
  z-index: 2;
`;

const NavigationText = styled.span`
  margin: 0px 8px;
  font-weight: 400;
  font-size: 14px;
`;

const RightMenuWrapper = styled.ol`
  display: inline-flex;
  align-items: center;
  width: 240px;
`;

const RightMenuTab = styled.li`
  display: list-item;
  position: relative;
`;

const RightMenuLink = styled.a`
  text-decoration: none;
  color: inherit;
  position: relative;
  display: block;
  padding: 4px 8px;
  z-index: 2;
`;

const RightMenuText = styled.span`
  margin: 0px 8px;
  font-weight: 400;
  font-size: 14px;
`;

function Nav() {
  const [focused, setFocused] = useState(null);
  const tabs = [
    "Model S",
    "Model 3",
    "Model X",
    "Model Y",
    "Cybertruck",
    "Powerwall",
  ];
  const rightMenus = ["Shop", "계정", "메뉴"];

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
          <NavigationWrapper onMouseLeave={() => setFocused(null)}>
            {tabs.map((item) => (
              <NavigationTab
                key={item}
                onFocus={() => setFocused(item)}
                onMouseEnter={() => setFocused(item)}
              >
                <NavigationLink
                  href={`https://www.tesla.com/ko_kr/${item
                    .replace(/\s/g, "")
                    .toLowerCase()}`}
                >
                  <NavigationText>{item}</NavigationText>
                </NavigationLink>
                {focused === item ? (
                  <Highlight
                    transition={{
                      layout: {
                        duration: 0.35,
                        ease: "easeInOut",
                      },
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    layoutId="highlight"
                  />
                ) : null}
              </NavigationTab>
            ))}
          </NavigationWrapper>
          <RightMenuWrapper onMouseLeave={() => setFocused(null)}>
            {rightMenus.map((item) => (
              <RightMenuTab
                key={item}
                onFocus={() => setFocused(item)}
                onMouseEnter={() => setFocused(item)}
              >
                <RightMenuLink>
                  <RightMenuText>{item}</RightMenuText>
                  {focused === item ? <Highlight /> : null}
                </RightMenuLink>
              </RightMenuTab>
            ))}
          </RightMenuWrapper>
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
