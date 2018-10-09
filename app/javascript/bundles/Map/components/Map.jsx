import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
 
export default class Map extends Component {
  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiamVyZW15c29sb21vbjIiLCJhIjoiY2puMjhndDQ3MDByZDNxbzRvNGdiOWduZiJ9.UWv2dTb0-kqL7ROiMuShPA'
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: `mapbox://styles/mapbox/streets-v9`
    });
  }
 
  render() {
    const style = {
      width: '100%',
      height: '500px',
      backgroundColor: 'azure'
    };
    return <div style={style} ref={el => this.mapContainer = el} />;
  }
 
  componentWillUnmount() {
    this.map.remove();
  }
}