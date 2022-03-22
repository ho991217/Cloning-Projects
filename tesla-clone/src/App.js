import TopNavigation from "./components/TopNavigation";
import Router from "./routes/Router";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
* {
  box-sizing: border-box;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TopNavigation />
      <Router />
    </>
  );
}

export default App;
