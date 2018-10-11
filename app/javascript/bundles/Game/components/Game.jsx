import React, { Component } from 'react';
import axios from 'axios';

 
export default class Game extends Component {

  state = { 
            game:           this.props.game,
            remainingTime:  20 * 60 * 1000,
            timerRunning:   false
          }


  incrementPlayerOne = () => {
    const { game } = this.state;
    game.user_points ++;
    axios.put(`/games/${game.id}`, 
      { 
        game: { user_points: game.user_points } 
      }
    ).then( (response) => {
      this.setState({ game: response.data })
    })
  }

  decrementPlayerOne = () => {
    const { game } = this.state;
    game.user_points --;
    axios.put(`/games/${game.id}`, 
      { 
        game: { user_points: game.user_points } 
      }
    ).then( (response) => {
      this.setState({ game: response.data })
    })    
  }

  incrementPlayerTwo = () => {
    const { game } = this.state;
    game.opponent_points ++;
    axios.put(`/games/${game.id}`, 
      { 
        game: { opponent_points: game.opponent_points } 
      }
    ).then( (response) => {
      this.setState({ game: response.data })
    })    
  }

  decrementPlayerTwo = () => {
    const { game } = this.state;
    game.opponent_points --;
    axios.put(`/games/${game.id}`, 
      { 
        game: { opponent_points: game.opponent_points } 
      }
    ).then( (response) => {
      this.setState({ game: response.data })
    })    
  }

  startStop = () => {
    let { timerRunning } = this.state;
    if(timerRunning){
      clearInterval(window.timer);
    }else{
      window.timer = setInterval( () => {
        this.setState({
          remainingTime: this.state.remainingTime - 1000
        })
      }, 1000)
    }
    this.setState({timerRunning: !this.state.timerRunning})
  }

  render() {
    const { user, opponent, score_keeper } = this.props; 
    const { game, remainingTime, timerRunning } = this.state;
    return (
      <div>
        <h1>Game React Component</h1>
        { Math.floor(remainingTime / 1000 / 60) }: {Math.floor(((remainingTime / 1000 / 60)-(Math.floor(remainingTime / 1000 / 60)))*60) }
        <button onClick={this.startStop}>
          { timerRunning ? "Stop" : "Start" }
        </button>
        <div className="row">
          <div className="col-sm-6">
            <h3>Player 1: {user.nickname}</h3>
            <span>{game.user_points}</span>
            <div>
              <button onClick={this.incrementPlayerOne}>+</button>
              <button onClick={this.decrementPlayerOne}>-</button>
            </div>
          </div>
          <div className="col-sm-6">
            <h3>Player 2: {opponent.nickname}</h3>
            <span>{game.opponent_points}</span>
            <div>
              <button onClick={this.incrementPlayerTwo}>+</button>
              <button onClick={this.decrementPlayerTwo}>-</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
 
}