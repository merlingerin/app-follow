import React from 'react'
import { Button } from 'semantic-ui-react'

const ToggleTypeButton = (props) => {
    let type = props.type;

    if(type === 'iPhone') {
        return (
            <Button.Group className="button-toggle button-toggle--type">
                <Button positive>iPhone</Button>
                <Button.Or text='or' />
                <Button onClick={() => { props.toggleType('iPad') }}>iPad</Button>
            </Button.Group>
        )
    } else {
        return (
            <Button.Group className="button-toggle button-toggle--type">
                <Button onClick={() => { props.toggleType('iPhone') }}>iPhone</Button>
                <Button.Or text='or' />
                <Button positive>iPad</Button>
            </Button.Group>
        )  
    }
}

export default ToggleTypeButton;