import React from 'react';
import Section from './Cards/Section';
import Header from './Header/Header';
import './Cards/Card.css';
import {FeaturedItems} from './Items/FeaturedItems';
import {RealEstateItems} from './Items/RealEstateItem'
import {AutomobileItem} from './Items/AutomobileItem';
import {MobileTabletsItem} from './Items/MobileTabletsItem';
import {ElectronicsItem} from './Items/ElectronicsItem';

export default function Home() {
  return (
    <>
      <Header headTitle='Home' Cname='Homeheader' />
      <Section sectionTitle={'Featured Ads'} items={FeaturedItems} />
      <Section sectionTitle={'Popular in Real Estate'} items={RealEstateItems} />
      <Section sectionTitle={'Popular in Automobile'} items={AutomobileItem} />
      <Section sectionTitle={'Popular in Mobile & Tablets'} items={MobileTabletsItem} />
      <Section sectionTitle={'Popular in Electronics'} items={ElectronicsItem} />
    </>
  );
}

	