import React, { Component } from 'react';
import { connect } from 'react-redux';
import Redux from 'redux';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IPlayer from '../interfaces/IPlayer';
import { withStyles, Theme } from "@material-ui/core/styles";
import IReduxState from '../interfaces/IReduxState';
import Alternates from './alternates';
import Holders from './holders';
import { Grid } from '@material-ui/core';

//The type for the props provided by mapStateToProps()
interface IPlayersState {
    classes?: any,
    players?: IPlayer[]
}

//The type for the props provided by the parent component
interface IPlayersProps {
}

//The type for the props provided by mapDispatchToProps()
interface IPlayersActionProps {
}

type Props = IPlayersState & IPlayersActionProps & IPlayersProps;

interface State {
}

const styles = (theme: Theme) => ({
    root: {
        maxWidth: 345,
        backgroundColor: '#e2e2e2',
        margin: 10
    },
    media: {
        backgroundSize: '190px 181px',
        height: 181,
        //width: 190
    },
});

class Team extends Component<Props, State> {
    render() {
        const { classes } = this.props;
        return (
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Typography variant="h3" gutterBottom>Holders</Typography>
                        <Holders ></Holders>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Typography variant="h3" gutterBottom>Alternates</Typography>
                        <Alternates ></Alternates>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default (withStyles(styles, { withTheme: true })(Team));