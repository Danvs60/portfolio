import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContactMe from "./components/ContactMe";
import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <div className="flex flex-col gap-16 relative h-screen w-full bg-oxfordBlue text-mintCream overflow-hidden">
        {/* NavBar */}
        <section className="px-8 py-4 flex justify-evenly bg-mintCream self-center mb-4 w-11/12 text-3xl text-oxfordBlue z-20 rounded-b-2xl shadow">
          <h3>
            <Link to="/">Home</Link>
          </h3>
          <div className="border border-oxfordBlue"></div>
          <h3>
            <Link to="/projects">Projects</Link>
          </h3>
          <div className="border border-oxfordBlue"></div>
          <h3>
            <Link to="/contact">Contact me</Link>
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
