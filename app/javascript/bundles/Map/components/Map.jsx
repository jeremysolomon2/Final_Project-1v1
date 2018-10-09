import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';
 
export default class Map extends Component {

    constructor() {
        super();
        this.state = {
            courts: []
        }
    }
    async componentDidMount() {
        let data;
        data = await axios.get('./courts.json')
        this.setState({ courts: data.data })
        console.log(this.state.courts)
        mapboxgl.accessToken = 'pk.eyJ1IjoiYW5keXdlaXNzMTk4MiIsImEiOiJIeHpkYVBrIn0.3N03oecxx5TaQz7YLg2HqA'
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
              this.createMap(mapOptions, geolocationOptions);
            },
            // failure callback
            () => { this.createMap(mapOptions, geolocationOptions) },
            // options
            geolocationOptions
          );
        }
      }

      fetchCourts = () => {
          const map = this.map;
          const self = this;
          axios.get('./courts.json')
          .then((res) => {
              let newMarkers = res.data
              newMarkers.features.forEach(function (court, i) {
                  let elm = document.createElement('div')
                  elm.className = "basketball-map"
                  let marker = new mapboxgl.Marker(elm)
                //   let popup = new mapboxgl.Popup({ offset: 25 })
                  .setLngLat(court.geometry.coordinates)
                  marker.addTo(map)
              })
          })
      }
     
    createMap = (mapOptions, geolocationOptions) => {
    this.map = new mapboxgl.Map(mapOptions);
    const map = this.map;
    map.addControl(
        new mapboxgl.GeolocateControl({
        positionOptions: geolocationOptions,
        trackUserLocation: true
        })
    );
    map.on('load', (event) => {
        this.fetchCourts();
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