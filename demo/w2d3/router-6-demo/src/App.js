import React from "react"
import {BrowserRouter, Link, Routes, Route} from "react-router-dom"
import About from "./views/About"
import Home from "./views/Home"
import Country from "./views/Country"
import Activity from "./views/Activity"
import Form from "./views/Form"
import StyledText from "./views/StyledText"


function App() {
  return (
    <BrowserRouter>
      <h1> React Router 6 demo</h1>
      <p>
        <Link to="/"> Home </Link> |
        <Link to="about"> About</Link> |
        <Link to="form"> Form </Link> |
        <Link to="travel/Japan"> Japan </Link> |
        <Link to="travel/Japan/snowboarding"> Snowboarding </Link> |
        <Link to="hello/red"> Hello in red </Link> |
      </p>
      <p>
        <Link to="/http://www.google.com"> Google by Link won't work  DO NOT USE!!!!!</Link>|
        <a href="http://google.com"> Google by anchor tag will work</a> |
        <a href="/about"> About by A tag DO NOT USE!!!!</a>
      </p>


      <Routes>
        <Route path="about" element={<About />} />
        <Route path="form" element={<Form />} />
        <Route path="travel">
          <Route path=":country/:activity" element={<Activity />} />
          <Route path=":country" element={<Country />} />
        </Route>
        <Route path=":keyword/:textcolor" element={<StyledText />} />
        <Route path="/" element={<Home />} />

      </Routes>    

    </BrowserRouter>
  )
}

export default App;
