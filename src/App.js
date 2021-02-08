import React from 'react';
import Navbar from './pages/Navbar/Navbar';
// import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Forms/Login';
import Register from './pages/Forms/Register';
import Apparels from './pages/Apparels';
import Automobiles from './pages/Automobiles';
import BeautyHealth from './pages/Beauty&Health';
import Computers from './pages/Computers';
import Electronics from './pages/Electronics';
import FurnitureDecor from './pages/Furniture&Decor';
import MobileTablets from './pages/Mobile&Tablets';
import RealEstate from './pages/RealEstate';
import Footer from './pages/footer/Footer'

function App() {
  return (
    <Router>
      <Navbar />
       <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Apparels' component={Apparels} />
        <Route path='/Automobiles' component={Automobiles} />
        <Route path='/Beauty&Health' component={BeautyHealth} />
        <Route path='/Computers' component={Computers} />
        <Route path='/Electronics' component={Electronics} />
        <Route path='/Furniture&Decor' component={FurnitureDecor} />
        <Route path='/Mobile&Tablets' component={MobileTablets} />
        <Route path='/RealEstate' component={RealEstate} />
        <Route path='/Login' component={Login} />
        <Route path='/Register' component={Register} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;