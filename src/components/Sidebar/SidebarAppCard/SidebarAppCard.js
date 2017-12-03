import React from 'react';

const SidebarAppCard = (props) => {
    return (
        <a className="sidebar__category-link" href={props.link} target="_blank" >
            { 
                +props.idx === 0 ? 
                <i className="item__img-wrapper">
                    <img src={ props.image } alt={props.title} />
                </i> : 
                '' 
            }
            <p className="item__title">{ props.title }</p>
            <p className="item__category">{props.category }</p>
            {
                props.showPrice ?
                <p className="item__price">{props.price !== 0 ? `${props.price}$` : 'free' }</p> :
                ''

            }
        </a>
    )
}

export default SidebarAppCard;