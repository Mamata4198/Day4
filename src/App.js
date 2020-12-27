//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, HashRouter, Switch, Route } from "react-router-dom"
import page1 from "./Component/page1"
import page2 from "./Component/page2"

function App() {
  return (
    <Router>
      <HashRouter>
        <Switch>
          <Route path="/" exact component={page1} />
          <Route path="/page2" component={page2} />
         
          {/* <Route component={Error} /> */}
        </Switch>
      </HashRouter>
    </Router>
  );
}

export default App;
