import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Grid } from 'semantic-ui-react'
import { MainCarusel, ToggleTypeButton, CategoryComponent } from '../components/components.index';
import { changeDeviceType } from '../actions/actions';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'iPad'
        }
        this.changeType = this.changeType.bind(this);
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

    render() {
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
                <Grid columns={1}>
                    <Grid.Row>
                        <Grid.Column>
                            <CategoryComponent title={'Popular apps'} />
                        </Grid.Column>  
                    </Grid.Row>
                </Grid>
                <Grid columns={1}>
                    <Grid.Row>
                        <Grid.Column>
                            <CategoryComponent title={'New apps'} />
                        </Grid.Column>  
                    </Grid.Row>
                </Grid>
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
  