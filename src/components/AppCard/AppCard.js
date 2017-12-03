import React from 'react';

const AppCard = (props) => {
    return (
        <a href={props.link} target="_blank" className={`CategoryComponent__item ${props.cardWidth}`}>
            <i className="item__img-wrapper">
                <img src={ props.image } alt="app-img" />
            </i>
            <p className="item__title">{ props.title }</p>
            <p className="item__category">{props.category }</p>
            {
                props.showPrice ?
                <p className="item__price">{props.price != 0 ? `${props.price}$` : 'free' }</p> :
                ''

            }
        </a>
    );
}

export default AppCard;