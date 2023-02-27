import * as React from 'react'
import { useMemo } from 'react'
import Map, { Marker } from 'react-map-gl'

import Pin from './pin'

const BARBERS = './barbers.json'

const TOKEN =
  'pk.eyJ1IjoibGR1a2ljIiwiYSI6ImNsZWx2aXkwdDBmOTAzeW96d3V5YWIzd3kifQ.RwD-huz-ONdzVHqJcpYRzg'

export default function BarberFinder() {
    // const pins = useMemo(
    //   () =>
    //     BARBERS.map((barber, index) => (
    //       <Marker
    //         key={`marker-${index}`}
    //         longitude={barber.longitude}
    //         latitude={barber.latitude}
    //         anchor="bottom"
    //         color='#61dbfb'
    //       >
    //       </Marker>
    //     )),
    //   []
    // )

  const pins = [
    <Marker longitude={-120.655889043} latitude={35.300998796} anchor="bottom" color='#61dbfb'>
    </Marker>,
  ]

  return (
    <div>
      <Map
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5,
        }}
        mapboxAccessToken={TOKEN}
        style={{ width: '100vw', height: '100vh' }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
      >
        {/* <Marker
          longitude={-120.655889043}
          latitude={35.300998796}
          anchor="bottom"
        >
          <Pin />
        </Marker> */}
        {pins}
      </Map>
    </div>
  )
}
