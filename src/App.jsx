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
import logo from "./images/logo.svg";

function App() {
  return (
    <Router>
      <div className="flex flex-col flex-grow min-h-screen gap-y-8 bg-oxfordBlue text-mintCream text-lg sm:text-2xl lg:text-3xl">
        {/* NavBar */}
        <div className="pt-4 py-8 px-12 flex justify-between items-center">
          <img className=" py-2 rounded-sm z-30" src={logo} alt="logo" />
          <section className="flex gap-x-10 bg-gray-400 bg-opacity-20 md:bg-transparent sm:text-2xl xl:text-3xl font-semibold lg:gap-x-16 justify-around md:justify-end text-gray-100 z-50">
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
                Contacts
              </NavLink>
            </h3>
          </section>
        </div>
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
