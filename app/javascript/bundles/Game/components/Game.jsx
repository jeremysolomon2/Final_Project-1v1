import React, { Component } from 'react';
import axios from 'axios';

 
export default class Game extends Component {




  fetchGame = (id) => {
    axios.get(`games/${id}.json`)
      .then((response) => {
        this.setState({
          term,
          page:       response.data.page,
          tasks:      response.data.tasks,
          totalPages: response.data.total_pages
        })
      })
  }

  render() {
   return (
   <h1>Game React Component</h1>

   )
  }
 
}