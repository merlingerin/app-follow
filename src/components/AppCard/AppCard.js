import React from 'react';

export const AppCard = (props) => {
    console.log('====================================');
    console.log('APP CARD PROPS', props);
    console.log('====================================');
    return (
        <div className="CategoryComponent__item">
            {/* <i className="item__img-wrapper">
                <img src={ props.img } />
            </i>
            <p className="item__title">{ props.title }</p>
            <cite className="item__category">{props.category }</cite> */}
        </div>
    );
}