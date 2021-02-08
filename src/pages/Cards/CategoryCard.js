import React, { Component } from 'react';
import { Button } from '../Navbar/Button';

export default class CategoryCard extends Component {
    render() {
        return (
            <div className='category-card'>
                <h3 className='Ctitle'>{this.props.Ctitle}</h3>
                <ul className='Categories' >
                    <li className='citem'>item 1</li>
                    <li className='citem'>item 2</li>
                    <li className='citem'>item 3</li>
                    <li className='citem'>item 4</li>
                </ul>
                <Button btnName={[`All in ${this.props.Ctitle}`,'fas fa-arrow-right']} btnclass={'category-btn'} btpath={this.props.btnpath}/>
            </div>
        )
    }
}
