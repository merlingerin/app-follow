import React from 'react';
import { AppCard } from '../components.index';
import { AppsModal } from '../components.index';

const CategoryComponent = (props) => {
    let {items} = props;
    let buttonSeeAll = <a className="CategoryComponent__link-all" href="javascript:void(0)">See all</a>;

    if( items ) {
        return (
            <div className="HomePage__CategoryComponent">
                <div className="CategoryComponent__header">
                    <h4 className="CategoryComponent__title">{ props.title }</h4>  
                    <AppsModal 
                        trigger={buttonSeeAll} 
                        modalTitle={props.title} 
                        items={items}
                        classContainer={'flex-row'}
                    />
                </div>
                <div className="CategoryComponent__list">
                    {
                        items.map( ( item, idx ) => {
                            return idx < 8 ? <AppCard key={idx} { ...item } cardWidth={'w-10'} showPrice={false} /> : false;
                        })
                    }
                </div>
            </div>
        )
    } else {
        return (
            <div className="HomePage__CategoryComponent">
                <div className="CategoryComponent__header">
                    <h4 className="CategoryComponent__title">{ props.title }</h4>                
                    <a className="CategoryComponent__link-all" href="javascript:void(0)">See all</a>
                </div>
                <div className="CategoryComponent__list">
                    <h3>No applications in this category...</h3>
                </div>
            </div>
        )
    }
}

export default CategoryComponent;