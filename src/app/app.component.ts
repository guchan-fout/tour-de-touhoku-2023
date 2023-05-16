import { Component, Renderer2, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from './environment.prod';

import * as geo from './GeoJsonUtils'
import { lineString } from '@turf/turf';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private map!: mapboxgl.Map;

  constructor(private renderer: Renderer2, private geojsonService: geo.GeoJsonUtils) {

  }

  ngOnInit() {
    this.createMap();
  }

  ngAfterViewInit() {
    //const select = document.getElementById('language-select');
    //this.map.getCanvasContainer().appendChild(select);
  }

  //Please create a file and set like below:
  //export const environment = {
  //  production: true,
  //  mapboxAccessToken: 'YOUR_TOKEN'
  //};
  createMap() {
    this.map = new mapboxgl.Map({
      accessToken: environment.mapboxAccessToken,
      container: 'map', // container ID
      // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [141.396, 38.4844], // starting position [lng, lat]
      zoom: 11, // starting zoom
      attributionControl: true
    });

    this.map.on('load', () => {
      console.log('Map loaded');
      this.addLanguageSelector();
      this.addTerrainButton();
      this.addRouterButton();
    });
  }

  addLanguageSelector() {
    // Add language selector
    const languageSelector = document.querySelector('#language-selector select') as HTMLSelectElement;
    languageSelector.addEventListener('change', (event) => {

      const language = (event.target as HTMLSelectElement).value;
      console.log('language:' + language);
      this.setMapLanguage(language);
    });
  }

  setMapLanguage(language: string) {
    if (language) {
      this.map.getStyle().layers.forEach((thisLayer) => {
        console.log(thisLayer);
        if (thisLayer.id.indexOf('-label') > 0) {
          console.log('change ' + thisLayer.id);
          this.map.setLayoutProperty(thisLayer.id, 'text-field', ['get', 'name_' + language])
        }
      });
    }
  }

  addTerrainButton() {
    const button = this.renderer.createElement('button');
    const text = this.renderer.createText('Terrain switch');
    this.renderer.appendChild(button, text);
    this.renderer.appendChild(document.body, button);
    // set button position
    this.renderer.setStyle(button, 'position', 'absolute');
    this.renderer.setStyle(button, 'top', '10%');
    this.renderer.setStyle(button, 'left', '10px');
    //this.renderer.setStyle(button, 'transform', 'translate(-50%, -50%)');
    this.renderer.setStyle(button, 'z-index', '1');

    // add click event listener to button
    this.renderer.listen(button, 'click', () => {
      this.addTerrainLayer();
    });
  }

  addRouterButton() {
    const button = this.renderer.createElement('button');
    const text = this.renderer.createText('Show router');
    this.renderer.appendChild(button, text);
    this.renderer.appendChild(document.body, button);
    // set button position
    this.renderer.setStyle(button, 'position', 'absolute');
    this.renderer.setStyle(button, 'top', '20%');
    this.renderer.setStyle(button, 'left', '10px');
    //this.renderer.setStyle(button, 'transform', 'translate(-50%, -50%)');
    this.renderer.setStyle(button, 'z-index', '1');

    // add click event listener to button
    this.renderer.listen(button, 'click', () => {
      this.addRouter();
    });
  }

  addTerrainLayer() {
    if (this.map) {
      const terrainSource = this.map.getTerrain();
      if (terrainSource) {
        // Remove the 'terrain' layer and 'mapbox-dem' source from the map
        this.map.setTerrain(null);
        this.map.removeSource("mapbox-dem")
        console.log('Terrain layer removed!');
      } else {
        console.log('add Terrain!');
        this.map.addSource('mapbox-dem', {
          'type': 'raster-dem',
          'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
          'tileSize': 512,
          'maxzoom': 14
        });
        // add the DEM source as a terrain layer with exaggerated height
        this.map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 2.5 });
      }
    }
  }

  addRouter() {
   
    
    geo.GeoJsonUtils.getlineString(this.map)
      .then(lineString => {
        this.map.addSource('router-point', {
          type: 'geojson',
          // Use a URL for the value for the `data` property.
          data: lineString
        });

        this.map.addLayer({
          'id': 'router-layer',
          'type': 'line',
          'source': 'router-point',
          'layout': {
            'line-join': 'round',
            'line-cap': 'round'
          },
          'paint': {
            'line-color': '#888',
            'line-width': 8
          }
        });

      })
      .catch(error => {
        console.error(error);
      });
      
      /*
      geo.GeoJsonUtils.getlineStringWithElevation(this.map)
      .then(lineString => {
        this.map.addSource('router-point', {
          type: 'geojson',
          // Use a URL for the value for the `data` property.
          data: lineString
        });

        this.map.addLayer({
          'id': 'router-layer',
          'type': 'line',
          'source': 'router-point',
          'layout': {
            'line-join': 'round',
            'line-cap': 'round'
          },
          'paint': {
            'line-color': '#888',
            'line-width': 8
          }
        });

      })
      .catch(error => {
        console.error(error);
      });
      */
  }
}

