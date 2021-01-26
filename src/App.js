import "./App.css";
import { Route, NavLink, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="links">
        <nav>
          <NavLink exact to={"/"}>
            Home
          </NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/posts"}>Posts</NavLink>
        </nav>
      </div>
      <main>
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route path={"/about"}>
            <About />
          </Route>
          <Route path={"./posts/:post_id"}>
            <Posts />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
