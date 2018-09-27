    var TREES;
    mapboxgl.accessToken = PUBLIC_ACCESS_TOKEN;

    const map = new mapboxgl.Map({
      container: 'map',
      style: STYLESHEET,
      center: [-87.688, 41.832],
      zoom: 10
    });
    
    var Draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        point: true,
        trash: true
      }
    });

    map.addControl(Draw, 'top-left');

    map.on('style.load', function (e) { 
      addSourcesAndLayers();
      getDataSet();
    });

    function getDataSet(startID) {

      var url = DATASETS_BASE + 'features';
      var params = {
        'access_token': DATASETS_ACCESS_TOKEN
      };

      map.addSource('removed-trees', {
        'type': 'geojson',
        'url': url
        /*'data': {
          'type': 'FeatureCollection',
          'features': []*/
        }
      });

      map.addLayer({
        'id': 'selected-trees',
        'type': 'circle',
        'source': 'removed-trees',
        'interactive': true,
        'paint': {
          'circle-color': 'rgba(189,0,0,77)',
          'circle-radius': 3
        } 
      }, 'removed-trees');

      console.log(map);

      /*$.get(url, params, function (data) {
        var features = {
            'type': 'FeatureCollection',
            'features': []
        };

        data.features.forEach(function (feature) {
          feature.properties.id = feature.id;
        });

        features.features = data.features;

        var lastFeatureID = data.features[data.features.length - 1].id;
        getDataSet(lastFeatureID);

        //console.log(features);

        //TREES.setData(features);
      });*/
    }

    function addSourcesAndLayers() {
      //TREES = new mapboxgl.GeoJSONSource({});
    }
