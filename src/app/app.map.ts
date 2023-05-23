import { Component } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Feature, GeoJsonProperties, Geometry } from 'geojson';
import { RiderPositionService } from './server/RiderPositionService'
import { useState } from 'react';
import { RiderPosition } from './server/Models';

const [ridersPosition, setridersPosition] = useState<Map<string, RiderPosition>>(new Map<string, RiderPosition>());

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./css/rider-icon.css']
})


export class MapService {

    map: mapboxgl.Map

    constructor(map: mapboxgl.Map) {
        this.map = map

    }

    addRiderMarkerTo(coordinate: mapboxgl.LngLat) {
        // Create a new custom HTML marker
        const markerElement = document.createElement("div");
        markerElement.className = "location-marker";

        markerElement.innerHTML = `
        <style>
        .location-marker {
            /* Set the marker size here */
            width: 2rem;
            height: 2rem;
            border-radius: 2rem;
            /* Set the marker color here */
            background: #aa3300;
        
            display: inline-block;
           
            position: absolute;
        
            /* optional fanciness */
            border: 1px solid #881100;
        }
        /* inner circle (optional if you don't need the central dot) */
      
        </style>
        `;

        const imageUrl = 'https://placekitten.com/g/60/60/'
        const imageElement = document.createElement('img');
        imageElement.style.maxWidth = '80%';
        imageElement.style.maxHeight = '80%';
        imageElement.src = imageUrl;


        markerElement.style.backgroundImage = `url(${imageUrl})`;
        markerElement.style.backgroundSize = 'cover';
        markerElement.style.backgroundPosition = 'center';

        // Create a new mapboxgl.Marker and set the marker's HTML element
        const marker = new mapboxgl.Marker(markerElement);

        //marker.setRotation(45);
        // Add the marker to the map
        marker.setLngLat([coordinate.lng, coordinate.lat]).addTo(this.map);

        marker.getElement().addEventListener('click', function() {
            // Code to execute when the marker is clicked
            //window.alert("Hello");
          });


          const positionDataInterval = 5;
          const positionService = new RiderPositionService(positionDataInterval)
          positionService.keepUpdating(setridersPosition, null, null, 1);


    }

    addAllMarkers() {
        fetch('/assets/routerGeojson/TdT2023-065.geojson')
            .then(response => response.json())
            .then(data => {
                const coordinates = data.features[0].geometry.coordinates;
                console.log(coordinates.length);

                for (let i = 0; i <= 500; i++) {
                    var coordinate: mapboxgl.LngLat = new mapboxgl.LngLat(coordinates[i][0], coordinates[i][1])
                    this.addRiderMarkerTo(coordinate);
                }

                //console.log(coordinates[i][0]);
                //console.log(coordinates[i][1]);
                // var coordinate: mapboxgl.LngLat = new mapboxgl.LngLat(coordinates[i][0],coordinates[i][1])
                //this.addRiderMarkerTo(coordinate);


            })
            .catch(error => {
                console.error('Error loading GeoJSON file:', error);
            });
    }



}