import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Players from './components/players';
import Team from './components/team';
import { Container, Typography, Grid, Paper } from '@material-ui/core';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Typography variant="h2" gutterBottom>EDmanager</Typography>
      <Grid container>
        <Grid item xs={3}>
          <Players />
        </Grid>
        <Grid item xs={9}>
          <Team />
        </Grid>
      </Grid>
    </Provider>
  );
}

export default App;
