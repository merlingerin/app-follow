import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    fetchApps, 
    changeType,
    fetchCollections
 } from '../actions/actions';
import { Grid } from 'semantic-ui-react'
import { 
    MainCarusel, 
    ToggleTypeButton, 
    CategoryComponent,
    BannersContainer
} from '../components/components.index';
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
        this.props.fetchCollections('banners');
        
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.appState.deviceType !== this.state.type) {
            this.setState({
                type: nextProps.appState.deviceType
            });
        }
    }

    onChangeType(type) {
        this.props.fetchApps(type);      
        this.props.changeType(type)  
    }

    render() {
        let popularApps,
            newApps;
        let banners = this.props.appState.banners;

        if(this.props.appState.apps) {
            popularApps = this.props.appState.apps.filter( (item, idx) => {
                return +item.rate > 3.5;
            });
            newApps = this.props.appState.apps.filter( (item, idx) => {
                return +item.rate < 4;
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
                                    <CategoryComponent items={popularApps} title={'Popular apps'} />
                                </Grid.Column>  
                            </Grid.Row>
                        </Grid>
                        <Grid columns={1}>
                            <Grid.Row>
                                <Grid.Column>
                                    <CategoryComponent items={newApps} title={'New apps'} />
                                </Grid.Column>  
                            </Grid.Row>
                        </Grid>
                        <Grid columns={1}>
                            <Grid.Row>
                                <Grid.Column>
                                    <BannersContainer items={banners} title={'Popular Collections'} />
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
    changeType,
    fetchCollections
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
  