import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContactMe from "./components/ContactMe";
import Home from "./components/Home";
import Projects from "./components/Projects";
import React from "react";

function App() {
  const homeLink = React.useRef();
  const projLink = React.useRef();
  const contactLink = React.useRef();

  const [path, setPath] = React.useState(window.location.pathname);

  return (
    <Router>
      <div className="flex flex-col gap-16 relative h-screen w-full bg-oxfordBlue text-mintCream overflow-hidden">
        {/* NavBar */}
        <section className="pt-6 font-semibold flex justify-evenly self-end mb-4 w-1/3 text-3xl text-gray-100 z-20">
          <h3>
            <Link
              onClick={() => setPath(window.location.pathname)}
              ref={homeLink}
              className={`border-darkOrange ${path === "/" && "border-b-2"}`}
              to="/"
            >
              Home
            </Link>
          </h3>
          <h3>
            <Link
              onClick={() => setPath(window.location.pathname)}
              ref={projLink}
              className={`border-darkOrange ${
                path === "/projects" && "border-b-2"
              }`}
              to="/projects"
            >
              Projects
            </Link>
          </h3>
          <h3>
            <Link
              onClick={() => setPath(window.location.pathname)}
              ref={contactLink}
              className={`border-darkOrange ${
                path === "/contact" && "border-b-2"
              }`}
              to="/contact"
            >
              Contact me
            </Link>
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
