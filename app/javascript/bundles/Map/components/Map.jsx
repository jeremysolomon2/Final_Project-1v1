import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
 
export default class Map extends Component {
  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiamVyZW15c29sb21vbjIiLCJhIjoiY2puMjhndDQ3MDByZDNxbzRvNGdiOWduZiJ9.UWv2dTb0-kqL7ROiMuShPA'
    this.createMap();
  }
 
  createMap = () => {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: `mapbox://styles/mapbox/streets-v9`
    });
    const map = this.map;
    map.on('load', (event) => {
      map.addSource(
        'courts',
        {
          type: 'geojson',
          data: `/courts.json`
        }
      );
      map.addLayer({ id: 'courts', type: 'circle', source: 'courts'});
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