import NavBar from './NavBar';
import Home from './Home';
import AddBook from './AddBook';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import BookDetails from './BookDetails';
import IssueID from './IssueID';
import Return from './Return';
import LibData from './LibData';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/addbook">
              <AddBook/>
            </Route>
            <Route exact path="/books/:id">
              <BookDetails/>
            </Route>
            <Route exact path="/issueid">
              <IssueID/>
            </Route>
            <Route exact path="/libdata">
              <LibData/>
            </Route>
            {/* <Route exact path="/return">
              <Return/>
            </Route> */}
          </Switch>
        </div>  
      </div>
    </Router>
  );
}

export default App;
