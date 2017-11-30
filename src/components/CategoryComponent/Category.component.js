import React from 'react';
import { AppCard } from '../components.index';

const CategoryComponent = (props) => {
    console.log('PROPS', props);
    let items = props["items"] || [];
    if( items.length > 0 ) {
        return (
            <div className="HomePage__CategoryComponent">
                <div className="CategoryComponent__header">
                    <h4 className="CategoryComponent__title">{ props.title }</h4>                
                    <a href="javascript:void(0)">See all</a>
                </div>
                <div className="CategoryComponent__list">
                    {
                        items.map( ( item, idx ) => (
                            <AppCard key={idx} { ...item } />
                        ))
                    }
                </div>
            </div>
        )
    } else {
        return (
            <div className="HomePage__CategoryComponent">
                <div className="CategoryComponent__header">
                    <h4 className="CategoryComponent__title">{ props.title }</h4>                
                    <a href="javascript:void(0)">See all</a>
                </div>
                <div className="CategoryComponent__list">
                    <h3>No applications in this category...</h3>
                </div>
            </div>
        )
    }
}

export default CategoryComponent;