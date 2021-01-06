import React from 'react';
import Section from './Cards/Section';
import {RealEstateItems} from './Items/RealEstateItem'
import Header from './Header/Header';

export default function RealEstate() {
  return (
    <>
      <Header headTitle='Real Estate' Cname='reheader' />	
      <Section sectionTitle={'Popular in Real Estate'} items={RealEstateItems} />

    </>
  );
}