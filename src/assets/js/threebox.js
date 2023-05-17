function logHelloWorld() {

}
function add3D(mapboxMap) {
  let start = [141.29496, 38.45074];
  this.mapboxMap.addLayer(
    new ModelLayer({
      id: "layer-3d",
      url: "../pin.gltf",
      origin: start,
      altitude: 26.3,
      rotateY: 1,
      scale: 34.8
    })
  );
}

function addStart3DModel(mapboxMap) {
  const Threebox = require('threebox');
  console.log("Hello, World! Time to add a 3D");
  let start = [141.29496, 38.45074];
  const map = mapboxMap;
  map.setCenter(start);

  // eslint-disable-next-line no-undef
  const tb = (window.tb = new Threebox(
    map,
    map.getCanvas().getContext('webgl'),
    {
      defaultLights: true
    }
  ));

  map.addLayer({
    id: 'custom-threebox-model',
    type: 'custom',
    renderingMode: '3d',
    onAdd: function () {
      // Creative Commons License attribution:  Metlife Building model by https://sketchfab.com/NanoRay
      // https://sketchfab.com/3d-models/metlife-building-32d3a4a1810a4d64abb9547bb661f7f3
      const scale = 3.2;
      const options = {
        obj: 'https://docs.mapbox.com/mapbox-gl-js/assets/metlife-building.gltf',
        type: 'gltf',
        scale: { x: scale, y: scale, z: 2.7 },
        units: 'meters',
        rotation: { x: 90, y: -90, z: 0 }
      };

      tb.loadObj(options, (model) => {
        model.setCoords(start);
        model.setRotation({ x: 0, y: 0, z: 241 });
        tb.add(model);
      });
    },

    render: function () {
      tb.update();
    }
  });
}


