import React from "react"
import { BrowserRouter, Link, Switch, Route } from "react-router-dom"
import Home from "./views/Home"
import About from "./views/About"
import Country from "./views/Country"
import Activity from "./views/Activity"
import StyledText from "./views/StyledText"
import Form from "./views/Form"


function App() {
  return (
    <BrowserRouter>
      <h1> React Router 5 demo</h1>
      <p>
        <Link to="/"> Home </Link> |
        <Link to="/about"> About</Link> |
        <Link to="/form"> Form </Link> |
        <Link to="/travel/Japan"> Japan </Link> |
        <Link to="/travel/Japan/snowboarding"> Snowboarding </Link> |
        <Link to="/hello/red"> Hello in red </Link> |
      </p>
      <p>
        <Link to="/http://www.google.com"> Google by Link won't work  DO NOT USE!!!!!</Link>|
        <a href="http://google.com"> Google by anchor tag will work</a> |
        <a href="/about"> About by A tag DO NOT USE!!!!</a>
      </p>

      

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/form">
          <Form />
        </Route>
        <Route path="/travel/:country/:activity">
          <Activity />
        </Route>
        <Route path="/travel/:country">
          <Country />
        </Route>
        <Route path="/:keyword/:textcolor">
          <StyledText />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>


    </BrowserRouter>
  );
}

export default App;
