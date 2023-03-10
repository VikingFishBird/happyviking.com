import Navbar from './Navbar.js';
import Footer from './pages/Footer.js';
import Home from './pages/Home.js';
import Contact from './pages/Contact.js';
import Banner from './img/Banner.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <Switch>
          <Route exact path="/">
            <Banner />
          </Route>
        </Switch>
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route path='/discord' component={() => {
               window.location.href = 'https://discord.gg/8vFCHahcHG';
               return null;
            }}/>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
