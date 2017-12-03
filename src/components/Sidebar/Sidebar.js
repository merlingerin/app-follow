import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchApps, changeType } from '../../actions/actions';
import { SidebarCategory } from '../components.index';

class Sidebar extends Component {

    render() {
        let freeApps,
        paidApps;

        if(this.props.appState.apps) {
            freeApps = this.props.appState.apps.filter( (item, idx) => {
                return +item.price === 0;
            });
            paidApps = this.props.appState.apps.filter( (item, idx) => {
                return +item.price > 0;
            });
        }
        
        return (
            <div className="sidebar">
                <SidebarCategory items={freeApps} title="Top Free Applications" />
                <SidebarCategory items={paidApps} title="Top Paid Applications" />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    appState: state.appState    
});

const mapDispatchToProps = {
    fetchApps,
    changeType
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);