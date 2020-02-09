import React, { Component } from 'react';
import Counter from './counter';
import Button from '@material-ui/core/Button';

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
    onReset: () => void;

    counters: {
        value: number,
        id: number
    }[]
}
interface IRecipeState {
}


export default class Counters extends Component<IRecipeProps, IRecipeState> {

    marginCustom = {
        margin: '0.5em'
    }

    render() {
        const { onDelete, onIncrement, onDecrease, onReset, counters } = this.props;
        return (
            <React.Fragment>
                <Button style={this.marginCustom}
                    variant="contained"
                    onClick={onReset}>Reset</Button>
                {counters.map(counter =>
                    <Counter
                        key={counter.id}
                        counter={counter}
                        onIncrement={onIncrement}
                        onDecrease={onDecrease}
                        onDelete={onDelete}>
                    </Counter>)}
            </React.Fragment>
        )
    }
}