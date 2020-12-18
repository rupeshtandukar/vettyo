import React from 'react';
import Cardlist from './Cardlist';

// import {HouseItems} from './HouseItems';

const Section = ({sectionTitle, items}) => {
	return(
		<div className='card-sec'>
			<h1>{sectionTitle}</h1>
			<Cardlist item={items}/>
		</div>
		);
}
export default Section;