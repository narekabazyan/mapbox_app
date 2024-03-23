import React, { JSX, useCallback, useRef } from 'react';
import Map, { Marker, Source, Layer, LayerProps, MapRef } from 'react-map-gl';
import { lineString } from '@turf/turf';
import mapboxgl from 'mapbox-gl';
import { StopWithCompleted } from '../../../types/stop';
import CustomMarker from '../marker/CustomMarker';

interface MapViewProps {
  stops: StopWithCompleted[];
}

const MapView = ({ stops }: MapViewProps): JSX.Element => {
  const mapRef = useRef<MapRef>(null);

  // Create a GeoJSON lineString feature for the route
  const route = lineString(stops.map((stop) => [stop.lng, stop.lat]));

  const routeLayer: LayerProps = {
    id: 'route',
    type: 'line',
    source: 'route',
    layout: {
      'line-join': 'round',
      'line-cap': 'round',
    },
    paint: {
      'line-color': '#1329FE',
      'line-width': 2,
    },
  };

  const fitBoundaries = useCallback(() => {
    if (!mapRef?.current) {
      return;
    }
    const map = mapRef.current.getMap();

    const longitudes = stops.map((marker) => marker.lng);
    const latitudes = stops.map((marker) => marker.lat);
    const bounds = new mapboxgl.LngLatBounds(
      new mapboxgl.LngLat(Math.min(...longitudes), Math.min(...latitudes)),
      new mapboxgl.LngLat(Math.max(...longitudes), Math.max(...latitudes))
    );

    map.fitBounds(bounds, { padding: 20 });
  }, [stops]);

  return (
    <Map
      ref={mapRef}
      initialViewState={{
        latitude: stops[0].lat,
        longitude: stops[0].lng,
        zoom: 14,
      }}
      onLoad={fitBoundaries}
      mapStyle="https://tiles.stadiamaps.com/styles/osm_bright.json"
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
    >
      {stops.map((stop, index) => (
        <Marker key={index} latitude={stop.lat} longitude={stop.lng}>
          <CustomMarker
            sequenceNumber={stop.sequence_number}
            filled={stop.completed}
          />
        </Marker>
      ))}

      <Source id="route" type="geojson" data={route}>
        <Layer {...routeLayer} />
      </Source>
    </Map>
  );
};

export default MapView;
