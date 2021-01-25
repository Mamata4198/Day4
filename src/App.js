//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, HashRouter, Switch, Route } from "react-router-dom"
import parent from "./components/parent"


function App() {
  return (
    <Router>
      <HashRouter>
        <Switch>
          <Route path="/" exact component={parent} />
    {/* <Route path="/page2" component={page2} />*/}
         
          {/* <Route component={Error} /> */}
        </Switch>
      </HashRouter>
    </Router>
  );
}

export default App;
