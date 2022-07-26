// map class initialize 
var map = L.map('map').setView([18.8610, 73.2761], 10);
map.zoomControl.setPosition('topright');

// adding osm tilelayer 
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var watercolorMap = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: 'abcd',
    minZoom: 1,
    maxZoom: 16,
    ext: 'jpg'
});

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

//Addming marker in the center of map
var singleMarker = L.marker([38.8610, 71.2761])
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();

//add map scale
L.control.scale().addTo(map);

//Map coordinate display
map.on('mousemove', function (e) {
    $('.coordinate').html(`Lat: ${e.latlng.lat} Lng: ${e.latlng.lng}`)
})



//Geojson load
// var marker = L.markerClusterGroup();
var railway = L.geoJSON(railwaydata, {
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.name)
    }
});

var may2019 =L.geoJSON(maydata, {
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.name)
    }
});
var Panvelboundary =L.geoJSON(boundary, {
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.name)
    }
});

var Panvelboundary =L.geoJSON(boundary, {
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.name)
    }
});

var Prabhag =L.geoJSON(prabhag, {
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.name)
    }
});


var roads =L.geoJSON(roads, {
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.name)
    }
});

var may2020outsidejuri =L.geoJSON(may2020outsidejuri, {
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.name)
    }
});
var Total2019 =L.geoJSON(Total2019, {
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.name)
    }
});

var withinjuri2020 =L.geoJSON(withinjuri2020, {
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.name)
    }
});
//Leaflet layer control
var baseMaps = {
    'OSM': osm,
    'Water Color Map': watercolorMap,
    'Satellite': Esri_WorldImagery
}

var overlayMaps = {
    'Panvel Railway': railway,
    'Panvelboundary':Panvelboundary,
    'Prabhag':Prabhag,
    'Roads':roads,
    'May 2020 outside jurisdiction': may2020outsidejuri,
    'May 2019 Buildings':may2019,

    'Nov 2019 Buildings':Total2019,
    'May 2020 within jurisdiction':withinjuri2020
}

var overlayMaps1={
    
}



L.control.layers(baseMaps, overlayMaps, { collapsed: true, position: 'topleft' }).addTo(map);
// L.control.layers(baseMaps, overlayMaps1, { collapsed: true, position: 'topleft' }).addTo(map);
