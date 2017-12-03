import React from 'react';
import { Grid, Container } from 'semantic-ui-react'
import { Sidebar } from "../components/components.index";

const Layout = (props) => {
    return (
        <div>
            <Container> 
                <Grid columns={6}>
                    <Grid.Row centered>
                        <Grid.Column>
                            {props.header}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
            <Grid columns={1}>
                <Grid.Row>
                    <Grid.Column>
                        {props.carusel}
                    </Grid.Column>  
                </Grid.Row>
            </Grid>
            <Container>
                <Grid columns={16}>
                    <Grid.Row>
                        <Grid.Column width={13}>              
                            {props.children}
                        </Grid.Column>  
                        <Grid.Column className="layout__sidebar" width={3}>              
                            <Sidebar />
                        </Grid.Column>  
                    </Grid.Row>
                </Grid>
            </Container>                
        </div>
    )
};

export default Layout;