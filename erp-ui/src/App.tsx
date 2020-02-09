import React, { Component } from 'react';
import Counters from './components/counters';
import NavBar from './components/navBar';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';


export default class App extends Component {

  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handlerReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter
    });
    this.setState({ counters })
  }

  handlerIncrement = (counter: {
    value: number,
    id: number
  }) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    //counters[index] = { ...counter };
    counters[index].value++;
    this.setState({
      counters
    });
  }

  handlerDecrease = (counter: {
    value: number,
    id: number
  }) => {
    console.log('Handle Event');
  }

  handlerDelete = (id: number) => {
    const counters = this.state.counters.filter(counter => counter.id !== id);
    this.setState({ counters })
  }


  render() {
    return (
      <div>
        <NavBar totalCounters={this.state.counters.length}/>
        <CssBaseline />
        <Container maxWidth="sm">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handlerIncrement}
            onDecrease={this.handlerDecrease}
            onReset={this.handlerReset}
            onDelete={this.handlerDelete}></Counters>
        </Container>
      </div >
    );
  }
}

