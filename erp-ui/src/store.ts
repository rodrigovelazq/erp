import { createStore } from 'redux';
import IReduxState from './interfaces/IReduxState';

const initialState: IReduxState = {
    players: [{
        id: 1,
        name: 'Lionel Messi',
        photo: 'https://tmssl.akamaized.net//images/portrait/header/28003-1510231943.jpg?lm=1510231982',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet lobortis mi. Donec sed leo eu dui pharetra venenatis. Morbi ac facilisis velit, in pulvinar ante. Vestibulum ac eros libero. Curabitur lacinia sem ipsum. Aenean erat odio, varius ut faucibus et, tincidunt non eros. Pellentesque tempus posuere tempor.'
    }, {
        id: 2,
        name: 'Cristiano Ronaldo',
        photo: 'https://tmssl.akamaized.net//images/portrait/header/8198-1568120625.jpg?lm=1568120652',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet lobortis mi. Donec sed leo eu dui pharetra venenatis. Morbi ac facilisis velit, in pulvinar ante. Vestibulum ac eros libero. Curabitur lacinia sem ipsum. Aenean erat odio, varius ut faucibus et, tincidunt non eros. Pellentesque tempus posuere tempor.'
    }, {
        id: 3,
        name: 'Raheem Sterling',
        photo: 'https://tmssl.akamaized.net//images/portrait/header/134425-1577051521.jpg?lm=1577051537',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet lobortis mi. Donec sed leo eu dui pharetra venenatis. Morbi ac facilisis velit, in pulvinar ante. Vestibulum ac eros libero. Curabitur lacinia sem ipsum. Aenean erat odio, varius ut faucibus et, tincidunt non eros. Pellentesque tempus posuere tempor.'
    },
    {
        id: 4,
        name: 'Kylian Mbappé',
        photo: 'https://tmssl.akamaized.net//images/portrait/header/342229-1533629004.jpg?lm=1533629019',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet lobortis mi. Donec sed leo eu dui pharetra venenatis. Morbi ac facilisis velit, in pulvinar ante. Vestibulum ac eros libero. Curabitur lacinia sem ipsum. Aenean erat odio, varius ut faucibus et, tincidunt non eros. Pellentesque tempus posuere tempor.'
    },
    {
        id: 5,
        name: 'Neymar',
        photo: 'https://tmssl.akamaized.net//images/portrait/header/68290-1529677270.jpg?lm=1529677295',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet lobortis mi. Donec sed leo eu dui pharetra venenatis. Morbi ac facilisis velit, in pulvinar ante. Vestibulum ac eros libero. Curabitur lacinia sem ipsum. Aenean erat odio, varius ut faucibus et, tincidunt non eros. Pellentesque tempus posuere tempor.'
    }],
    holders: [],
    alternates: []
}

const reducerTrainer = (state: IReduxState = initialState, action: any) => {
    console.log(action);
    if (action.type === 'ADD_HOLDERS') {
        return {
            ...state,
            holders: state.holders.concat(action.player),
            players: state.players.filter(player => player.id !== action.player.id)
        }
    } else if (action.type === 'ADD_ALTERNATES') {
        return {
            ...state,
            alternates: state.alternates.concat(action.player),
            players: state.players.filter(player => player.id !== action.player.id)
        }
    } else if (action.type === 'ADD_PLAYERS') {
        return {
            players: state.players.concat(action.player),
            holders: state.holders.filter(player => player.id !== action.player.id),
            alternates: state.alternates.filter(player => player.id !== action.player.id)
        }
    }
    return state;
}

export default createStore(reducerTrainer);