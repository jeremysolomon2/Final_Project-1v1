import React, { Component } from 'react';
import axios from 'axios';

 
export default class Game extends Component {

  state = { 
            game:           this.props.game,
            remainingTime:  .1 * 60 * 1000,
            timerRunning:   false
          }

  msToTime(duration) {
    var milliseconds = parseInt((duration%1000)/100)
        , seconds = parseInt((duration/1000)%60)
        , minutes = parseInt((duration/(1000*60))%60)

    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return minutes + ":" + seconds + "." + milliseconds;
  }
  stopIfZero(){
    if (this.state.remainingTime === 0 ){ 
      clearInterval(window.timer) 
      document.getElementById('startStop').style = 'display: none'
    }
    
  }
  startStop = () => {
    let { timerRunning, remainingTime } = this.state;
    if(timerRunning){
      clearInterval(window.timer);
    }else{
        window.timer = setInterval( () => {
          this.setState({
            remainingTime: this.state.remainingTime - 100
          }, this.stopIfZero )
        }, 100)
      }
    this.setState({timerRunning: !this.state.timerRunning})
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

  render() {
    const { user, opponent, score_keeper } = this.props; 
    const { game, remainingTime, timerRunning } = this.state;
    return (
      <div>
        <h1>Game React Component</h1>
          {this.msToTime(remainingTime)}
        <button onClick={this.startStop} id="startStop">
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