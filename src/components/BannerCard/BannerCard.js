import React from 'react';

const BannerCard = (props) => {
    return (
        <a href="javascript:void(0)" className="Banner BannersContainer__link">
            <img src={props.image} alt="banner" />
        </a>
    )
} 

export default BannerCard;