import React from 'react';
import Card from './Card';
import './Card.css';

const Cardlist = ({item}) => {
	return(
		<div className='cardlist'>
			{
				item.map((user, i) =>{
					return(
						<Card
							key={i}
							title={item[i].title}
							path={item[i].path}
							type={item[i].type}
							place={item[i].place}
							price={item[i].price}
						 />
						);
				})

			}
		</div>
		);
}

export default Cardlist;