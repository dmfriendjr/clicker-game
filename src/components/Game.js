import React from 'react';
import GameTile from './GameTile/GameTile';
import tileConfig from './tileConfig.json';

class Game extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      tiles: this.loadTiles(),
      score: 0
    }
  }

  loadTiles() {
    const tiles = [];
    for (var key in tileConfig) {
      tiles.push(tileConfig[key]);
      tiles[tiles.length-1].clicked = false;
    }
    tiles.sort(() => 0.5 - Math.random());
    return tiles;
  }

  loseGame() {
    console.log(tileConfig);
    this.setState({tiles: this.loadTiles(), score: 0});
  }

  onTileClicked = id => {
    const tiles = this.state.tiles;
    let score = this.state.score;
    let lost = false;
    tiles.map(tile => 
      {
        if (tile.id === id) {
          if (tile.clicked) {
            lost = true;
            this.loseGame();
          } else {
            //Add point
            score++; 
            tile.clicked = true;
          }
        }

        return tile;
      });
    if (!lost) {
      tiles.sort(() => 0.5 - Math.random());
      this.setState({tiles, score});
    }
  }

  render() {
    console.log(this.state.tiles);
    return (
      <div>
        <div>
          <p>{this.state.score}</p>
        </div>
        {this.state.tiles.map(tile => <GameTile onClicked={this.onTileClicked} link={tile.link} id={tile.id} key={tile.id} />)}
      </div>);
  }
}

export default Game;