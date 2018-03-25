import React from 'react';

const styles = {
  width: 175, 
  height: 175, 
  borderStyle: 'solid', 
  margin: 5
}

const GameTile = props => <img src={props.link} style={styles} alt='dog' onClick={() => props.onClicked(props.id)} />;

export default GameTile;