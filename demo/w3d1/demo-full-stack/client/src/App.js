import {BrowserRouter, Switch, Route} from "react-router-dom"
import Detail from "./views/Detail";
import Main from "./views/Main";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/demos/:id">
              <Detail />
            </Route>
            <Route exact path="/">
              <Main />
            </Route>

          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
