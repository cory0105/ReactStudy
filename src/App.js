import { createGlobalStyle } from "styled-components";
// import { List } from "./Components/20240722/List";
// import { ListWrapper } from "./Components/20240722/ListWrapper";
// import { Test1 } from "./Components/20240722/Test1";
// import { Test2 } from "./Components/20240722/Test2";
// import { Avatar } from "./Components/20240723/Avatar";
// import { AvatarWrapper } from "./Components/20240723/AvatarWrapper";
// import { CounterState } from "./Components/20240723/CounterState";
// import { Gallery } from "./Components/20240723/Gallery";
// import { ScoreWrapper } from "./Components/20240723/ScoreWrapper";
// import { Home } from "./Components/20240724/Home";
import { OpenWeather } from "./Components/OpenWeatherApp/OpenWeather";
import { NinjasAPI } from "./Components/NinjasApp/NinjasAPI";
import { BasicRouter } from "./Components/BasicRouter/BasicRouter";
import { ReactRouter } from "./Components/BasicRouter/ReactRouter";
import { MovieShop } from "./Components/MovieShop/MovieShop";
import { ReactContext } from "./Components/Utils/ReactContext";
import { ResponsivePage } from "./Components/Utils/ResponsivePage";
import { ReactRef } from "./Components/Utils/ReactRef";
import { GameAction } from "./Components/unity/GameAction";

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'GmarketSansMedium';
      src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: GmarketSansMedium;
  }
`

function App() {
  return <>
    <GlobalStyle/>
    {/* <MovieShop/> */}
    {/* <ReactContext/> */}
    {/* <ResponsivePage/> */}
    {/* <ReactRef/> */}
    <GameAction/>
  </>;
}

export default App;
