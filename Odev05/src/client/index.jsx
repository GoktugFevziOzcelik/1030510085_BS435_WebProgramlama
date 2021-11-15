import React from "react";
import ReactDOM from "react-dom";
import {Game} from "./Game";
import {Home} from "./home";
import {BrowserRouter, HashRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
const  notFound = () => {
    return(
        <div>
            <h2>Sayfa Bulunamadı: 404</h2>
            <p>
                Hata: aradğınız sayfa yok.
            </p>
        </div>
    )
}
class App extends React.Component{

render() {
    return(
        <HashRouter>
            <Switch>
                <Route exact path='/game' component={Game} />
                <Route exact path='/' component={Home} />
                <Route component={notFound()}/>
            </Switch>
        </HashRouter>)
}
}
ReactDOM.render(<App />, document.getElementById("root"));

