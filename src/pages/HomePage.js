import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchApps, changeType } from '../actions/actions';
import { Grid, Container } from 'semantic-ui-react'
import { 
    MainCarusel, 
    ToggleTypeButton, 
    CategoryComponent
} from '../components/components.index';
import { changeDeviceType } from '../actions/actions';
import Layout from '../layouts/layout';


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: this.props.appState.deviceType
        }
        this.onChangeType = this.onChangeType.bind(this);
    }

    componentDidMount() {
        this.props.fetchApps(this.state.type);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            type: nextProps.appState.deviceType
        });
    }

    onChangeType(type) {
        this.props.fetchApps(type);      
        this.props.changeType(type)  
    }

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
                <Layout 
                    header={<ToggleTypeButton  changeType={this.onChangeType} type={this.state.type} />}
                    carusel={<MainCarusel />}
                >
                    <div className="App__homePage">                        
                        <Grid columns={1}>
                            <Grid.Row>
                                <Grid.Column>
                                    <CategoryComponent items={freeApps} title={'Free apps'} />
                                </Grid.Column>  
                            </Grid.Row>
                        </Grid>
                        <Grid columns={1}>
                            <Grid.Row>
                                <Grid.Column>
                                    <CategoryComponent items={paidApps} title={'Paid apps'} />
                                </Grid.Column>  
                            </Grid.Row>
                        </Grid>
                    </div>
                </Layout>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
  