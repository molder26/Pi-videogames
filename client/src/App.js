import { BrowserRouter, Route } from "react-router-dom";
import Welcome from "./components/welcome/Welcome";
import Home from "./components/home/Home";
import CardDetail from "./components/cardDetail/CardDetail";
import CreateVideoGame from "./components/createVideoGame/CreateVideoGame";

import "./App.css";
import NavBar from "./components/navBar/NavBar";

function App() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Welcome}></Route>
            <Route path="/home" component={NavBar} />
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/detail/:id" component={CardDetail}></Route>
            <Route exact path="/newgame" component={CreateVideoGame}></Route>
        </BrowserRouter>
    );
}

export default App;
