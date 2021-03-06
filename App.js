import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import About from "./components/About";
import MovieList from "./components/MovieList";
import MoviePage from "./components/MoviePage";
import Nav from "./components/Nav";
import NotFound from "./components/404";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Categorized from "./components/Categorized";
import ResponsiveNav from "./components/ResponsiveNav";
import { GrMenu } from 'react-icons/gr';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('')

  return (
    <>
      <Router>

        <Nav search={search} setSearch={setSearch} />
        
        <div className="bar" onClick={() => setIsOpen(!isOpen)}>
            <GrMenu />
        </div>

        {isOpen && <ResponsiveNav />}
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/hakkinda" component={About} />
          <Route exact path="/filmler" component={MovieList} />
          <Route path="/filmler/film/:id" component={MoviePage} />
          <Route exact path="/kategoriler" component={Categories} />
          <Route
            path="/kategoriler/kategori/:genreId"
            component={Categorized}
          />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
