import IPlayer from "./IPlayer";

export default interface IReduxState {
    players: IPlayer[],
    holders: IPlayer[],
    alternates: IPlayer[]
}