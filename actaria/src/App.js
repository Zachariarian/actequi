//import "./App.css";
//import styled from "styled-components";
//import { AccountBox } from "./components/accountBox";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import {history} from "./history"
import {AppRoutes} from "./routes"

//const AppContainer = styled.div`
  //width: 100%;
  //height: 100%;
  //display: flex;
  //flex-direction: column;
  //align-items: center;
  //justify-content: center;
//`;

function App() {
  return (
    <HistoryRouter history={history}>
    <AppRoutes/>
    </HistoryRouter>
        //<AppContainer>
      //<AccountBox />
    //</AppContainer>
      )}
export default App;
