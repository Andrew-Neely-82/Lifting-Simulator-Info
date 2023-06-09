import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar, Footer } from './components/export.js';
import Badges from './components/badges/Badges.jsx';
import './App.scss';
import Home from './pages/home/Home.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" Component={Home} />
        {/* <Route exact path="/home" Component={''} /> */}
        {/* <Route exact path="" Component={''} /> */}
        {/* <Route exact path="" Component={''} /> */}
        <div className="App_">
          <Navbar />
          <Badges />
          <Footer />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
