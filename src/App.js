import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import MovieList from "./components/MovieList";
import MoviePage from "./components/MoviePage";
import Nav from "./components/Nav";
import NotFound from "./components/404";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" />
          <Route path="/hakkinda" component={About} />
          <Route
            exact
            path="/filmler"
            component={MovieList}
          />
          <Route path="/filmler/film/:id" component={MoviePage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
