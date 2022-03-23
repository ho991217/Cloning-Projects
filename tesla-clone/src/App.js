// import TopNavigation from "./components/TopNavigation";
import Router from "./routes/Router";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./static/fonts/font.css";
import Nav from "./components/Nav";

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
      <Nav />
      <Router />
    </>
  );
}

export default App;
