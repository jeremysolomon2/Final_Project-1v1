import React, { Component } from 'react';
import axios from 'axios';
 
export default class Game extends Component {

  state = { 
            game:           this.props.game,
            remainingTime:  20 * 60 * 1000,
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
        <div className="text-center stopClock">
          <div>
            <h1>{this.msToTime(remainingTime)}</h1>
          </div>
          <div>
            <button className="btn btn-primary" onClick={this.startStop} id="startStop">
            { timerRunning ? "Stop" : "Start" }
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-6 text-center score-left">
            <h3>{user.nickname}</h3>
            <div className="pb-3 pt-3 score" >{game.user_points}</div>
            <div>
              <button className="btn btn-primary mr-1" onClick={this.incrementPlayerOne}>+1</button>
              <button className="btn btn-danger" onClick={this.decrementPlayerOne}>-1</button>
            </div>
          </div>
          <div className="col-6 text-center">
            <h3>{opponent.nickname}</h3>
            <div className="pb-3 pt-3 score">{game.opponent_points}</div>
            <div>
              <button className="btn btn-primary mr-1" onClick={this.incrementPlayerTwo}>+1</button>
              <button className="btn btn-danger" onClick={this.decrementPlayerTwo}>-1</button>
            </div>
          </div>
        </div>
        <div className="text-center pt-4">
          <button className="btn btn-secondary">Save Game</button>
        </div>
      </div>
    )
  }
 
}