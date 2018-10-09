import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
 
export default class Map extends Component {
  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiamVyZW15c29sb21vbjIiLCJhIjoiY2puMjhndDQ3MDByZDNxbzRvNGdiOWduZiJ9.UWv2dTb0-kqL7ROiMuShPA'
    let { coordinates } = this.props;
    const mapOptions = {
      container: this.mapContainer,
      style: `mapbox://styles/mapbox/streets-v9`,
      zoom: 12,
      center: coordinates
    };
    const geolocationOptions = {
        enableHighAccuracy: true,
        maximumAge        : 30000,
        timeout           : 27000
      };
    if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
        // success callback
        (position) => {
            coordinates = [
                            position.coords.longitude,
                            position.coords.latitude
                          ];
            document.getElementById("long")
                    .innerHTML = coordinates[0];
            document.getElementById("lat")
                    .innerHTML = coordinates[1];
            mapOptions.center = coordinates;
            this.createMap(mapOptions);
          },
        // failure callback
        () => { this.createMap(mapOptions) },
        // options
        geolocationOptions
        );
    }
  }

  createMap = mapOptions => {
    this.map = new mapboxgl.Map(mapOptions);
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