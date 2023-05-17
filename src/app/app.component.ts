import { Component, Renderer2, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from './environment.prod';
import * as geo from './GeoJsonUtils';

//call javacript, threebox's typescript support is not good(or I am stupid) so I build 3D layer in JS
declare function addStart3DModel(mapbox: mapboxgl.Map): void;
declare function add3D(mapbox: mapboxgl.Map): void;

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
      attributionControl: true,
      antialias: true
    });


    this.map.on('load', () => {
      console.log('Map loaded');
      this.addLanguageSelector();
      this.addTerrainButton();
      this.addRouterButton();
      //this.addStart3DIcon();
      //add3D(this.map);
      //this.myScriptRef.nativeElement.

    });
  }

  addLanguageSelector() {
    // Add language selector
    const languageSelector = document.getElementById('select-language') as HTMLSelectElement;
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
    const terrainSwitch = document.getElementById('Terrain') as HTMLSelectElement;
    terrainSwitch.addEventListener('click', (event) => {
      this.addTerrainLayer();
    });
  }

  addRouterButton() {
    const routerSwitch = document.getElementById('Router') as HTMLSelectElement;
    routerSwitch.addEventListener('click', (event) => {
      this.addAllRouters();
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
        this.map.easeTo({
          pitch: 0, // Set the target pitch value
          duration: 1000, // Set the duration of the animation in milliseconds
          // Use linear easing for a constant speed animation
        });
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
        this.map.easeTo({
          pitch: 45, // Set the target pitch value
          duration: 1000, // Set the duration of the animation in milliseconds
          // Use linear easing for a constant speed animation
        });
      }
    }
  }

  addAllRouters() {
    const sourceFiles = ['TdT2023-065.geojson', 'TdT2023-100.geojson', 'TdT2023-150.geojson', 'TdT2023-210.geojson'];
    const colors = ['#d1ed77', '#63b809', '#3f44cc', '#cc1d80'];
    const width = [4, 3, 2, 1];
    sourceFiles.forEach((filePath, index) => {
      this.map.addSource(`geojson-source-${index}`, {
        type: 'geojson',
        data: `assets/routerGeojson/${filePath}`, // Replace with the path to your GeoJSON file
      });

      this.map.addLayer({
        id: `geojson-layer-${index}`,
        type: 'line',
        source: `geojson-source-${index}`,
        paint: {
          'line-color': colors[index], // Set the line color to green
          'line-width': 5, // Set the line width
          'line-blur': 1,
          'line-opacity': 0.5,
          'line-offset': index * 2,
        },
      });
    });
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
            'line-width': 8,
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




