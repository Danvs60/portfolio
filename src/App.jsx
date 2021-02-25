import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import ContactMe from "./components/ContactMe";
import Home from "./components/Home";
import Projects from "./components/Projects";
import React from "react";

function App() {
  return (
    <Router>
      <div className="flex flex-col gap-16 relative h-screen w-full bg-oxfordBlue text-mintCream overflow-hidden">
        {/* NavBar */}
        <section className="pt-6 font-semibold flex justify-evenly self-end mb-4 w-1/3 text-3xl text-gray-100 z-20">
          <h3>
            <NavLink
              activeClassName="border-darkOrange border-b-2"
              exact
              to="/"
            >
              Home
            </NavLink>
          </h3>
          <h3>
            <NavLink
              activeClassName="border-darkOrange border-b-2"
              to="/projects"
            >
              Projects
            </NavLink>
          </h3>
          <h3>
            <NavLink
              activeClassName="border-darkOrange border-b-2"
              to="/contact"
            >
              Contact me
            </NavLink>
          </h3>
        </section>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <ContactMe />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
