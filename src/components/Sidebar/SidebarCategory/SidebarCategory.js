import React from 'react';
import { SidebarAppCard } from '../../components.index';

const SidebarCategory = (props) => {
    return (
        <div className="sidebar__category-container">
            <h4 className="sidebar__category-title">{props.title}</h4>
            <ul className="sidebar__category-list">
                {   props.items ?
                        props.items.map( (item, idx) => {
                            return idx < 10 ? <li className="sidebar__category-item"  key={idx} ><SidebarAppCard idx={idx} {...item} /></li> : ''
                        })
                    :
                    <h5>No apps...</h5>
                }
            </ul>
        </div>
    )
}

export default SidebarCategory;