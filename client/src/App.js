import { BrowserRouter, Route } from "react-router-dom";
import Welcome from "./components/welcome/Welcome";
import Home from "./components/home/Home";
import CardDetail from "./components/cardDetail/CardDetail";

import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Welcome}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/detail/:id" component={CardDetail}></Route>
        </BrowserRouter>
    );
}

export default App;
