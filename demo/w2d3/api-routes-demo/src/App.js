import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import HeaderForm from "./components/HeaderForm"
import Book from "./views/Book"
import Character from "./views/Character"
import House from "./views/House"


function App() {
  return (
    <BrowserRouter>
    <div className="container mt-5">
      <HeaderForm />
      <Switch>
        <Route path="/books/:id">
          <Book />
        </Route>
        <Route path="/characters/:id">
          <Character />
        </Route>
        <Route path="/houses/:id">
          <House />
        </Route>
      </Switch>    
    </div>
    </BrowserRouter>
  );
}

export default App;
