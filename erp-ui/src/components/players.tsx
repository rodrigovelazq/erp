import React, { Component } from 'react';
import { connect } from 'react-redux';
import Redux from 'redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IPlayer from '../interfaces/IPlayer';
import { withStyles, Theme } from "@material-ui/core/styles";
import IReduxState from '../interfaces/IReduxState';
import Grid from '@material-ui/core/Grid';

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
    toHolders: (player: IPlayer) => void,
    toAlternates: (player: IPlayer) => void
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

class Players extends Component<Props, State> {
    render() {
        const { classes, players } = this.props;
        return (
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h3" gutterBottom>Players</Typography>
                    {players && players.map(player =>
                        <Card className={classes.root} key={player.id}>
                            <CardActionArea>
                                <CardMedia className={classes.media} image={player.photo} />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">{player.name}</Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {player.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" onClick={() => this.props.toHolders(player)}>To Holders</Button>
                                <Button size="small" color="primary" onClick={() => this.props.toAlternates(player)}>To Alternates</Button>
                            </CardActions>
                        </Card>)}
                </Grid>
            </Grid>)
    }
}

function mapStateToProps(state: IReduxState, playersProps: IPlayersProps): IPlayersState {
    return { players: state.players }
}

function mapDispatchToProps(dispatch: any, playersProps: IPlayersProps): IPlayersActionProps {
    console.log(playersProps);
    return {
        toHolders(player: IPlayer) {
            dispatch({
                type: 'ADD_HOLDERS',
                player
            })
        }, toAlternates(player: IPlayer) {
            dispatch({
                type: 'ADD_ALTERNATES',
                player
            })
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(Players));