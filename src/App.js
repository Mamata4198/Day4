//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, HashRouter, Switch, Route } from "react-router-dom"
import parent from "./components/parent.jsx"

function App() {
  return (
    <Router>
      <HashRouter>
        <Switch>
          <Route path="/" exact component={parent} />
         
          {/* <Route component={Error} /> */}
        </Switch>
      </HashRouter>
    </Router>
  );
}

export default App;
