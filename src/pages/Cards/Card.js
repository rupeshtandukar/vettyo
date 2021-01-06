import React from 'react';


const Card = ({title, path, type, place, price}) =>{
	return (
		<div className='card'>
		<div className='card-img'>
			<img alt='' src='' />
		</div>
			<div>
				<p>{price}</p>
				<h2>{title}</h2>
				<i className='fas fa-dot-circle'>{type}</i>
				<i className='fas fa-map-marker-alt'>{place}</i>
			</div>
		</div>
			);

}

export default Card;