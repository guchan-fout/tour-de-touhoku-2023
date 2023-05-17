import { Injectable } from '@angular/core';
import { lineString, featureCollection } from '@turf/turf';
import { LngLatLike } from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class GeoJsonUtils {

  addLayer(map: mapboxgl.Map) {
    fetch('https://raw.githubusercontent.com/guchan-fout/map-training-demo/main/tohoku65.geojson')
      .then(response => response.json())
      .then(data => {
        const lineString = {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: data.features.reduce((accumulator: any[], feature: any) => {
              if (feature.geometry.type === "Point") {
                accumulator.push(feature.geometry.coordinates);
              }
              return accumulator;
            }, [])
          }
        };

        console.log(lineString);

      });
  }

  static async getlineString(map: mapboxgl.Map): Promise<any> {
    const response = await fetch('https://raw.githubusercontent.com/guchan-fout/map-training-demo/main/tohoku65.geojson');
    const data = await response.json();
    const lineString = {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: data.features.reduce((accumulator: any[], feature: any) => {
          if (feature.geometry.type === "Point") {
            accumulator.push(feature.geometry.coordinates);
            const [lng, lat] = feature.geometry.coordinates;
            const elevation = map.queryTerrainElevation([lng, lat]);

          }
          return accumulator;
        }, [])


      }
    };
    console.log(lineString)
    return lineString;
  }

  static async getlineStringWithElevation(map: mapboxgl.Map): Promise<any> {
    const response = await fetch('https://raw.githubusercontent.com/guchan-fout/map-training-demo/main/tohoku65.geojson');
    const data = await response.json();

    const coordinates = data.features.reduce((accumulator: any[], feature: any) => {
      if (feature.geometry.type === 'Point') {
        accumulator.push(feature.geometry.coordinates);
      }
      return accumulator;
    }, []);

    const elevationPromises = coordinates.map((coordinate: LngLatLike) => {
      return map.queryTerrainElevation(coordinate);
    });

    const elevations = await Promise.all(elevationPromises);

    const lineString = {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'LineString',
        coordinates: coordinates.map((coordinate: any, index: string | number) => {
          const elevation = elevations[Number(index)];
          return {
            type: 'Feature',
            properties: {
              elevation
            },
            geometry: {
              type: 'Point',
              coordinates: coordinate
            }
          };
        })
      }
    };

    console.log(lineString);
    return lineString;
  }
}

