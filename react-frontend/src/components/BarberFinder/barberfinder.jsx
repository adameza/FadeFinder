import * as React from 'react'
import { useMemo } from 'react'
import Map, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import Pin from './pin'

import CITIES from './barbers.json'

const TOKEN =
  'pk.eyJ1IjoibGR1a2ljIiwiYSI6ImNsZWx2aXkwdDBmOTAzeW96d3V5YWIzd3kifQ.RwD-huz-ONdzVHqJcpYRzg'

export default function BarberFinder() {
  const pins = useMemo(
    () =>
      CITIES.map((barber, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={barber.longitude}
          latitude={barber.latitude}
          anchor="bottom"
        >
          <Pin />
        </Marker>
      )),
    []
  )

  return (
    <div>
      <Map
        initialViewState={{
          latitude: 40,
          longitude: -100,
          zoom: 3.5,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        mapboxAccessToken={TOKEN}
        style={{ width: '100vw', height: '100vh' }}
      >
        {pins}
      </Map>
    </div>
  )
}
