import React, { useState } from 'react';
import ReactMapGl, { GeolocateControl, Marker, Source, Layer, } from 'react-map-gl';
import Pin from './Icons/Pin'
import './App.css';
import * as neighborhoodsData from './SanFrancisco.Neighborhoods.json'
// import * as neighborhoodsData from './Neighborhoods/neighborhoods.json'

function App() {
  const [viewport, setViewport] = useState({
    latitude: 37.7749,
    longitude: -122.4194,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  })
  const [currentLocation, setCurrentLocation] = useState({
    latitude: null,
    longitude: null
  })

  return (
    <div style={{
      width:'100%',
      height:'100%'
    }}>
      <ReactMapGl
        mapStyle='mapbox://styles/prestonce/ckc4nv6om0uys1ino5y65k627'
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAP_TOKEN}
        onViewportChange={viewport => {
          setViewport(viewport)
        }}
      >
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          onViewportChange={viewport => {
            setViewport(viewport)
            setCurrentLocation({
              latitude: viewport.latitude,
              longitude: viewport.longitude
            })
          }}
        />
        {(currentLocation.latitude && currentLocation.longitude !== null) ?
          <Marker
            latitude={currentLocation.latitude}
            longitude={currentLocation.longitude}
            positionOptions={{ enableHighAccuracy: true }}
            style={{
              width: '100%',
              height: '100%',
              position: 'relative'
            }}
          >
            <Pin />
          </Marker>
          :
          null
        }
          current location
        <Source id='neighborhoods' type='geojson' data={neighborhoodsData.default}>
        </Source>
        <Layer
              id='hoodlayer'
              source='neighborhoods'
              type='fill'
              paint={{
                // "fill-color":{
                //   property: '',
                //   stops: [
                //     [94105, 'rgba(154, 18, 179, 1)'],
                //     [94107, 'rgba(28, 49, 68, 1)'],
                //     [94108, 'rgba(126, 161, 107, 1)'],
                //     [94109, 'rgba(112, 22, 30, 1)'],
                //     [94112, 'rgba(28, 49, 68, 1)'],
                //     [94114, 'rgba(28, 49, 68, 1)'],
                //     [94122, 'rgba(28, 49, 68, 1)'],
                //     [94124, 'rgba(28, 49, 68, 1)'],
                //     [94127, 'rgba(28, 49, 68, 1)'],
                //     [94132, 'rgba(28, 49, 68, 1)'],
                //     [94131, 'rgba(28, 49, 68, 1)'],
                //     [94133, 'rgba(28, 49, 68, 1)'],
                //     [94102, 'rgba(28, 49, 68, 1)'],
                //     [94103, 'rgba(28, 49, 68, 1)'],
                //     [94110, 'rgba(28, 49, 68, 1)'],
                //     [94111, 'rgba(28, 49, 68, 1)'],
                //     [94115, 'rgba(28, 49, 68, 1)'],
                //     [94116, 'rgba(28, 49, 68, 1)'],
                //     [94117, 'rgba(28, 49, 68, 1)'],
                //     [94118, 'rgba(28, 49, 68, 1)'],
                //     [94121, 'rgba(28, 49, 68, 1)'],
                //     [94123, 'rgba(28, 49, 68, 1)'],
                //     [94134, 'rgba(28, 49, 68, 1)']
                //   ]
                // },
                "fill-color":[
                  'match',
                  ['get', 'id'],
                  94105, 'rgba(154, 18, 179, 0.4)',
                  94107, 'rgba(28, 49, 68, 0.4)',
                  94108, 'rgba(126, 161, 107, 0.4)',
                  94109, 'rgba(255, 254, 203, 0.4)',
                  94112, 'rgba(160, 92, 123, 0.4)',
                  94114, 'rgba(133, 255, 158, 0.4)',
                  94122, 'rgba(166, 244, 220, 0.4)',
                  94124, 'rgba(84, 72, 200, 0.4)',
                  94127, 'rgba(94, 11, 21, 0.4)',
                  94132, 'rgba(140, 122, 107, 0.4)',
                  94134, 'rgba(254, 168, 47, 0.4)',
                  94133, 'rgba(105, 153, 93, 0.4)',
                  94102, 'rgba(57, 70, 72, 0.4)',
                  94103, 'rgba(201, 228, 231, 0.4)',
                  94110, 'rgba(180, 160, 229, 0.4)',
                  94111, 'rgba(185, 139, 130, 0.4)',
                  94115, 'rgba(0, 141, 213, 0.4)',
                  94116, 'rgba(55, 63, 81, 0.4)',
                  94117, 'rgba(75, 136, 162, 0.4)',
                  94118, 'rgba(202, 213, 202, 0.4)',
                  94121, 'rgba(128, 117, 255, 0.4)',
                  94123, 'rgba(158, 228, 147, 0.4)',
                  'black'
                ],
              
                'fill-opacity': 0.8,
                "fill-outline-color": '#ffff00'
              }}
            />

      </ReactMapGl>




    </div >
  );
}

export default App;
