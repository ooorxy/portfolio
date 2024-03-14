import {Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
      <div className="App">
          <nav>
              <ul id="navigation">
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/about">About</Link>
                  </li>
              </ul>
          </nav>
          <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route path="/about" element={<About />}/>
          </Routes>
      </div>
  );
}
