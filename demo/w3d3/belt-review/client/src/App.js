import {BrowserRouter, Route, Switch} from "react-router-dom"
import Create from "./views/Create";
import Main from "./views/Main";
import Edit from "./views/Edit"
import Detail from "./views/Detail";

function App() {
  return (
    <div className="container mt-5">
      <BrowserRouter>
        <h1> JobsDB</h1>
        <Switch>
          <Route exact path="/edit/:id">
            <Edit />
          </Route>
          <Route exact path="/jobs/:id">
            <Detail />
          </Route>
          <Route exact path="/new">
            <Create />
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
