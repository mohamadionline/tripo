import React from 'react';
import { useDispatch, useSelector , useStore, useState } from 'react-redux';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import signupActions from '../../actions/signupActions';
import mapRenderAction from '../../actions/mapRender';
import mapboxgl from 'mapbox-gl';
import Ui from '../ui/Ui'

mapboxgl.setRTLTextPlugin(
  'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js'
);

mapboxgl.accessToken =
  'pk.eyJ1IjoibW9vc3RhZmEiLCJhIjoiY2s0NDZ6Y3hwMGMxczNsbzZyd3c4YWttYiJ9.exNMDaoURq3v0cKn45Q6gA';

let map = null;
export default () => { 

  // const divEl = document.createElement('div');
  // divEl.id = 'mapContainer';
  // const [state, setState] = useState({location : location });
  const dispatch = useDispatch();
  const mapRenderReducer = useSelector(state => state.mapRender);
  const mapModeReducer = useSelector(state => state.mapMode);

  let location = null;
  let address = null;
  // console.log('rendering', mapRenderReducer);
  function one(event) {
    alert('Event handler when clicking on \r\n' + event.target.className);
    console.log('event number 1', event);
  }
  class MapboxGLButtonControl {
    constructor({ className = '', title = '', eventHandler = '' }) {
      this._className = className;
      this._title = title;
      this._eventHandler = eventHandler;
    }

    onAdd(map) {
      this._btn = document.createElement('button');
      this._btn.className = 'mapboxgl-ctrl-icon' + ' ' + this._className;
      this._btn.type = 'button';
      this._btn.title = this._title;
      this._btn.onclick = this._eventHandler;

      this._container = document.createElement('div');
      this._container.className = 'mapboxgl-ctrl-group mapboxgl-ctrl';
      this._container.appendChild(this._btn);

      return this._container;
    }

    onRemove() {
      this._container.parentNode.removeChild(this._container);
      this._map = undefined;
    }
  }

  if (mapRenderReducer === true) {
    setTimeout(() => {
      if (document.getElementById('mapContainer')) {
        dispatch(mapRenderAction(false));

        map = new mapboxgl.Map({
          container: 'mapContainer',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [44.3763, 33.2788],
          zoom: 11,
          renderingMode: '3d',
        });
        const ctrlPoint = new MapboxGLButtonControl({
          className: 'mapbox-gl-draw_point',
          title: 'Draw Point',
          eventHandler: one,
        });
        map.addControl(ctrlPoint, 'bottom-right');
        // map.addControl(new mapboxgl.ButtonControl());

        map.addControl(
          new mapboxgl.GeolocateControl({
            positionOptions: {
              enableHighAccuracy: true,
            },
            trackUserLocation: true,
          }),
          'bottom-right'
        );

        map.addControl(
          new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl,
          }),
          'bottom-right'
        );
      }
    }, 20);
  }

  function getAddress(cb) {
    dispatch(signupActions.updateDoneButtonState(false));
    const mainAddress = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
    const addressResumption = '.json?access_token=';
    const mapboxReqAddress = `${mainAddress + location.lng},${location.lat}${addressResumption}${
      mapboxgl.accessToken
    }`;
    console.log('requeeeeeeeeeest');
    (async () => {
      const rawResponse = await fetch(mapboxReqAddress, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const response = await rawResponse.json();
      address = response.features[0].place_name;
      console.log(address);

      dispatch(signupActions.updateDoneButtonState(true));

      cb(null);
    })();
    // cb(null);
  }

  if (mapModeReducer === 'getUserLocation') {
    console.log(map);
    location = map.getCenter();
    const marker = new mapboxgl.Marker({
      draggable: false,
    })
      .setLngLat(location)
      .addTo(map);

    // dispatch(signupActions.updateDoneButtonState(false));
    getAddress(err => {
      if (err) throw err;
    });

    map.on('click', e => {
      location = e.lngLat.wrap();

      // dispatch(signupActions.updateDoneButtonState(false));
      marker.setLngLat(location);
      getAddress(err => {
        if (err) throw err;
        // setDoneButtonState(true);
      });
      marker.setLngLat(location);
      console.log(location);
    
    });

  }

  return location;
};

