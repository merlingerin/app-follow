import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { Grid, Container } from 'semantic-ui-react'
import { MainCarusel, ToggleTypeButton, CategoryComponent } from '../components/components.index';
import { changeDeviceType } from '../actions/actions';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'iPad',
            apps: []
        }
        this.changeType = this.changeType.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    changeType(type) {
        changeDeviceType(type);
        let that = this;
        setTimeout(() => {
            that.setState({
                type: type
            });
        }, 0);
    }

    getData() {
        axios.get('/data/iPhone.json')
        .then((res) => (res.data))
        .then( (data) => { this.setState({"apps": data}) });   
    }

    render() {
        console.log('====================================');
        console.log('DATA', this.state.apps);
        console.log('====================================');
        return (
            <div className="App__homePage">
                <Grid columns={12} >
                    <Grid.Row centered>
                        <Grid.Column>
                            <ToggleTypeButton toggleType={this.changeType} type={this.state.type} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid columns={1}>
                    <Grid.Row>
                        <Grid.Column>
                            <MainCarusel />
                        </Grid.Column>  
                    </Grid.Row>
                </Grid>
                <Container>                
                    <Grid columns={1}>
                        <Grid.Row>
                            <Grid.Column>
                                <CategoryComponent items={this.state.apps} title={'Popular apps'} />
                            </Grid.Column>  
                        </Grid.Row>
                    </Grid>
                    <Grid columns={1}>
                        <Grid.Row>
                            <Grid.Column>
                                <CategoryComponent items={this.state.apps} title={'New apps'} />
                            </Grid.Column>  
                        </Grid.Row>
                    </Grid>
                </Container>                
            </div>
        )
    }
}


export default connect(
    state => ({
      testStore: state
    }),
    dispatch => ({})
  )(HomePage);
  