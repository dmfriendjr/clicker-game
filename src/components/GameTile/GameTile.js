import React from 'react';
import './GameTile.css';

const GameTile = props => <img className="gameTile hvr-wobble-top" src={props.link} alt='dog' onClick={() => props.onClicked(props.id)} />;

export default GameTile;