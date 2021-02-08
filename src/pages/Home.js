import React from 'react';
import Section from './Cards/Section';
import CategoryCard from './Cards/CategoryCard';
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
      <div className='category-section'>
      <h2 className='category-section-title'>Popular Categories</h2>
        <div className='categories-list'>
          <CategoryCard Ctitle={'Apparels'} btnpath={'/Apparels'}/>
          <CategoryCard Ctitle={'Automobiles'} btnpath={'/Automobiles'}/>
          <CategoryCard Ctitle={'Beauty & Health'} btnpath={'/Beauty&Health'}/>
          <CategoryCard Ctitle={'Computers'} btnpath={'/Computers'}/>
          <CategoryCard Ctitle={'Electronics'} btnpath={'/Electronics'}/>
          <CategoryCard Ctitle={'Furniture & Decor'} btnpath={'/Furniture&Decor'}/>
          <CategoryCard Ctitle={'Real Estates'} btnpath={'/RealEstate'}/>
          <CategoryCard Ctitle={'Mobiles & Tablets'} btnpath={'/Mobile&Tablets'}/>
        </div>
      </div>
      <Section sectionTitle={'Featured Ads'} items={FeaturedItems} />
      <Section sectionTitle={'Popular in Real Estate'} items={RealEstateItems} />
      <Section sectionTitle={'Popular in Automobile'} items={AutomobileItem} />
      <Section sectionTitle={'Popular in Mobile & Tablets'} items={MobileTabletsItem} />
      <Section sectionTitle={'Popular in Electronics'} items={ElectronicsItem} />
    </>
  );
}

	