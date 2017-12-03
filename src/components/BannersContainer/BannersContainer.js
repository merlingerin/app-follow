import React from 'react';

import { BannerCard } from '../components.index';

const BannersContainer = (props) => {
    let {items} = props;
    if(items) {
        return (
            <div className="BannersContainer  HomePage__BannersContainer">
                <div className="BannersContainer__header">
                    <h4 className="BannersContainer__title">{ props.title }</h4>                
                </div>
                <div className="BannersContainer__lists-wrapper">
                    <div className="BannersContainer__list">                          
                        {
                            items.map( ( item, idx ) => {
                                return idx < 5 ? <li key={idx} className="BannersContainer__item"><BannerCard {...item} /></li> : ''
                            })
                        }
                    </div>
                    <div className="BannersContainer__list">                          
                        {
                            items.map( ( item, idx ) => {
                                return idx + 5 < 8 ? <li key={idx+5} className="BannersContainer__item"><BannerCard {...item} /></li> : ''
                            })
                        }
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="BannersContainer  HomePage__BannersContainer">
                <div className="BannersContainer__header">
                    <h4 className="BannersContainer__title">{ props.title }</h4>                
                </div>
                <div className="BannersContainer__list">
                    <h3>No banners...</h3>
                </div>
            </div>
        )
    }
}

export default BannersContainer;