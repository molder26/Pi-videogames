import { BrowserRouter, Route } from "react-router-dom";
import Welcome from "./components/welcome/Welcome";
import Home from "./components/home/Home";

import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Welcome}></Route>
            <Route exact path="/home" component={Home}></Route>
        </BrowserRouter>
    );
}

export default App;
