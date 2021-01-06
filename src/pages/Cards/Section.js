import React from 'react';
import Cardlist from './Cardlist';

// import {HouseItems} from './HouseItems';

const Section = ({sectionTitle, items}) => {
	return(
		<div className='card-sec'>
			<h2>{sectionTitle}</h2>
			<Cardlist item={items}/>
		</div>
		);
}
export default Section;