import React from 'react';

const CategoryComponent = (props) => {
    console.log(props);
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
                            <div key={ item.id || idx } className="CategoryComponent__item">
                                <i className="item__img-wrapper">
                                    <img src={ item.img } />
                                </i>
                                <p className="item__title">{ item.title }</p>
                                <cite className="item__category">{item.category }</cite>
                            </div>
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