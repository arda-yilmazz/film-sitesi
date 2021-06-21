import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import MovieList from "./components/MovieList";
import MoviePage from "./components/MoviePage";
import Nav from "./components/Nav";
import LoadingAnim from "./components/LoadingAnim";

function App() {
  const [loading, setLoading] = useState(false);
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
            component={() => (
              <MovieList loading={loading} setLoading={setLoading} />
            )}
          />
          <Route path="/filmler/film/:id" component={MoviePage} />
        </Switch>

        {loading && <LoadingAnim />}
      </Router>
    </>
  );
}

export default App;
