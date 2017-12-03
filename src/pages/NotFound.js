import React, { Component } from 'react';
import { Grid, Container } from 'semantic-ui-react'

class NotFound extends Component {
    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <h1>404</h1>
                        <h2>Page Not Found</h2>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default NotFound;