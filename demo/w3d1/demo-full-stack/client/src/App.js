import {BrowserRouter, Switch, Route} from "react-router-dom"
import Detail from "./views/Detail";
import Edit from "./views/Edit";
import Main from "./views/Main";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/demos/:id/edit">
              <Edit />
            </Route>
            <Route exact path="/demos/:id">
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
