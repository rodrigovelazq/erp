import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';

interface IRecipeProps {
    onIncrement: (arg0: {
        value: number,
        id: number
    }) => void;
    onDecrease: (arg0: {
        value: number,
        id: number
    }) => void;
    onDelete: (arg0: number) => void;
    counter: {
        value: number,
        id: number
    }

}
interface IRecipeState {
}

export default class Counter extends Component<IRecipeProps, IRecipeState> {

    marginCustom = {
        margin: '0.5em'
    }

    render() {
        const { counter, onDelete, onIncrement, onDecrease } = this.props;
        return (
            <div>
                <Chip label={counter.value}
                    color={counter.value === 0 ? 'secondary' : 'primary'}
                    style={this.marginCustom} />
                <Button style={this.marginCustom}
                    variant="contained"
                    color="primary"
                    onClick={() => onIncrement(counter)}>+</Button>
                <Button style={this.marginCustom}
                    variant="contained"
                    color="primary"
                    onClick={() => onDecrease(counter)}>-</Button>
                <Button style={this.marginCustom}
                    variant="contained"
                    color="secondary"
                    onClick={() => onDelete(counter.id)}>Delete</Button>
            </div>
        )
    }
}