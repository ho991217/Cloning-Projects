// import React from "react";
// import styled from "styled-components";
// import { AnimateSharedLayout, motion } from "framer-motion";
// import { useState } from "react";

// const Wrapper = styled.div`
//   height: 54px;
//   width: 100vw;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;

// const LogoContainer = styled.div`
//   width: 240px;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
//   padding-left: 32px;
//   position: relative;
// `;

// const Logo = styled.svg`
//   width: 120px;
//   height: 24px;
//   margin: 0px 14px;
// `;

// const Buttons = styled.div`
//   display: flex;
//   align-items: center;
//   width: 100%;
// `;

// const NavigationContainer = styled.ol`
//   padding: 0px 8px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   height: 100%;
// `;

// const NavigationButton = styled(motion.li)`
//   height: 32px;
//   width: auto;
//   padding: 4px 8px;
//   background-color: ${(props) =>
//     props.isHover ? "rgba(0, 0, 0, 0.1)" : "transparent"};
//   border-radius: 12px;
// `;

// const NavigationButtonText = styled.a`
//   width: 100%;
//   height: 100%;
//   margin: 0px 8px;
//   text-decoration: none;
//   color: inherit;
//   font-family: "Gotham", -apple-system;
//   font-weight: 300;
//   font-size: 14px;
//   letter-spacing: 0.4px;
//   -webkit-text-stroke: 0.5px #000;
// `;

// const UserContainer = styled.ol`
//   padding-right: 32px;
//   width: 240px;
//   /* height: 54px; */
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;

// const UserButton = styled(motion.li)`
//   padding: 4px 8px;
//   border-radius: 12px;
//   font-size: 14px;
//   height: 100%;
//   display: inline-block;
//   text-align: center;
//   color: inherit;
//   font-family: "Gotham";
//   font-weight: 400;
//   font-size: 14px;
//   letter-spacing: 0.4px;
// `;

// function TopNavigation() {
//   const [hovering, setHovering] = useState(-1);
//   console.log(hovering);
//   return (
//     <Wrapper>
//       <LogoContainer>
//         <Logo viewBox="0 0 342 35">
//           <path
//             d="M0 .1a9.7 9.7 0 007 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 007-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 006-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 00-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 13.8h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 14.1h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zM308.5 7h26a9.6 9.6 0 007-7h-40a9.6 9.6 0 007 7z"
//             fill="currentColor"
//           ></path>
//         </Logo>
//       </LogoContainer>

//       <AnimateSharedLayout>
//         <Buttons onMouseLeave={() => setHovering(-1)}>
//           <NavigationContainer>
//             <NavigationButton
//               onMouseEnter={() => setHovering((prev) => 0)}
//               layout
//               isHover={hovering === 0}
//             >
//               <NavigationButtonText href="https://www.tesla.com/ko_kr/models">
//                 Model S
//               </NavigationButtonText>
//             </NavigationButton>
//             <NavigationButton
//               onMouseEnter={() => setHovering((prev) => 1)}
//               layout
//               isHover={hovering === 1}
//             >
//               <NavigationButtonText href="https://www.tesla.com/ko_kr/model3">
//                 Model 3
//               </NavigationButtonText>
//             </NavigationButton>
//             <NavigationButton
//               onMouseEnter={() => setHovering((prev) => 2)}
//               layout
//               isHover={hovering === 2}
//             >
//               <NavigationButtonText href="https://www.tesla.com/ko_kr/modelx">
//                 Model X
//               </NavigationButtonText>
//             </NavigationButton>
//             <NavigationButton
//               onMouseEnter={() => setHovering((prev) => 3)}
//               layout
//               isHover={hovering === 3}
//             >
//               <NavigationButtonText href="https://www.tesla.com/ko_kr/modely">
//                 Model Y
//               </NavigationButtonText>
//             </NavigationButton>
//             <NavigationButton
//               onMouseEnter={() => setHovering((prev) => 4)}
//               layout
//               isHover={hovering === 4}
//             >
//               <NavigationButtonText href="https://www.tesla.com/ko_kr/cybertruck">
//                 Cybertruck
//               </NavigationButtonText>
//             </NavigationButton>
//             <NavigationButton
//               onMouseEnter={() => setHovering((prev) => 5)}
//               layout
//               isHover={hovering === 5}
//             >
//               <NavigationButtonText href="https://www.tesla.com/ko_kr/powerwall">
//                 Powerwall
//               </NavigationButtonText>
//             </NavigationButton>
//           </NavigationContainer>

//           <UserContainer>
//             <UserButton
//               onMouseEnter={() => setHovering((prev) => 6)}
//               layout
//               isHover={hovering === 6}
//             >
//               Shop
//             </UserButton>
//             <UserButton
//               onMouseEnter={() => setHovering((prev) => 7)}
//               layout
//               isHover={hovering === 7}
//             >
//               계정
//             </UserButton>
//             <UserButton
//               onMouseEnter={() => setHovering((prev) => 8)}
//               layout
//               isHover={hovering === 8}
//             >
//               메뉴
//             </UserButton>
//           </UserContainer>
//         </Buttons>
//       </AnimateSharedLayout>
//     </Wrapper>
//   );
// }

// export default TopNavigation;

// const Tabs = () => {
//   const [focused, setFocused] = React.useState(null);
//   const [selected, setSelected] = React.useState("Item 1");
//   const tabs = ["Item 1", "Item 2", "Item 3"];

//   return (
//     <Wrapper onMouseLeave={() => setFocused(null)}>
//       {tabs.map((item) => (
//         <Tab
//           key={item}
//           onClick={() => setSelected(item)}
//           onKeyDown={(event) =>
//             event.key === "Enter" ? setSelected(item) : null
//           }
//           onFocus={() => setFocused(item)}
//           onMouseEnter={() => setFocused(item)}
//           tabIndex={0}
//         >
//           <span>{item}</span>
//           {focused === item ? (
//             <motion.div
//               transition={{
//                 layout: {
//                   duration: 0.2,
//                   ease: "easeOut",
//                 },
//               }}
//               style={{
//                 position: "absolute",
//                 bottom: "-2px",
//                 left: "-10px",
//                 right: 0,
//                 width: "140%",
//                 height: "110%",
//                 background: "#23272F",
//                 borderRadius: "8px",
//                 zIndex: 0,
//               }}
//               layoutId="highlight"
//             />
//           ) : null}
//           {selected === item ? (
//             <motion.div
//               style={{
//                 position: "absolute",
//                 bottom: "-10px",
//                 left: "0px",
//                 right: 0,
//                 height: "4px",
//                 background: "#5686F5",
//                 borderRadius: "8px",
//                 zIndex: 0,
//               }}
//               layoutId="underline"
//             />
//           ) : null}
//         </Tab>
//       ))}
//     </Wrapper>
//   );
// };
