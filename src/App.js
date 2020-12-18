import React from 'react';
import Navbar from './Navbar/Navbar';
// import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Apparels from './pages/Apparels';
import BeautyHealth from './pages/Beauty&Health';
import Computers from './pages/Computers';
import Electronics from './pages/Electronics';
import FurnitureDecor from './pages/Furniture&Decor';
import MobileTablets from './pages/Mobile&Tablets';
import RealEstate from './pages/RealEstate';
import Section from './Cards/Section'
import {FeaturedItems} from './Items/FeaturedItems';
import {RealEstateItems} from './Items/RealEstateItem'
import {AutomobileItem} from './Items/AutomobileItem';
import {MobileTabletsItem} from './Items/MobileTabletsItem';
import {ElectronicsItem} from './Items/ElectronicsItem';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/Apparels' component={Apparels} />
        <Route path='/Beauty&Health' component={BeautyHealth} />
        <Route path='/Computers' component={Computers} />
        <Route path='/Electronics' component={Electronics} />
        <Route path='/Furniture&Decor' component={FurnitureDecor} />
        <Route path='/Mobile&Tablets' component={MobileTablets} />
        <Route path='/RealEstate' component={RealEstate} />
      </Switch>
      <Section sectionTitle={'Featured Ads'} items={FeaturedItems} />
      <Section sectionTitle={'Popular in Real Estate'} items={RealEstateItems} />
      <Section sectionTitle={'Popular in Automobile'} items={AutomobileItem} />
      <Section sectionTitle={'Popular in Mobile & Tablets'} items={MobileTabletsItem} />
      <Section sectionTitle={'Popular in Electronics'} items={ElectronicsItem} />
    </Router>
  );
}

export default App;