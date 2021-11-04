import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Modules from './components/Modules';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <div>
    <Nav/>
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about'/>
        <Route component={Project} path='/project'/>
        <Route component={Modules} path='/modules'/>
        <Route component={Contact} path='/contact'/>
      </Switch>
      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;