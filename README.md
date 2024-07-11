# MobileGIS24

## Presentation + Flyer

- Presenting workflow, motivation and Problems
- Feature-Presentation
- hot go get the Data for Routing, etc.

- Fyler(A4), no Scientific-Poster
  - Motivation, Features, presenting APP, Screenshot of APP, 1 or 2 technical details (getting Data of webservice or routing)
  - mix of scientific and features (what can the APP do?)
  - presenting on GIK-Homepage

## Software to use:

- git for version control and collaborating
- webstorm for developing with framework react native -> best access to sensors and device functions (like ring tones and vibrations)

## Goal: Tourist map with navigation

- we need: knowledge on tourist spots
- access to navigation sensors and maybe other (e.g. pose refinement via CV by google)
- maybe other device functions

## Minimal features

- Use of location Sensor (GNSS)
- Visualization of map tiles (WMS)
- Visualization of features (WFS)
- Appropriate Control
- Optional: Creation of new features (WFS-T)

## Steps to get current repo up and running with React Native Expo:

- install expo App on your phone
- npm i -g expo-cli
- expo install expo-location
- run "npm start" in this repo
- scan qr code

## Current features

- two views, one holds a text view, one holds a built-in map
- shows current position on the map
- displays features from a WFS-Server (Tourist spots)
- displays a marker on the map for each feature
- displays a popup with feature infos when clicking on the marker
- displays the nearest route to the selected feature via openrouteservice API
  (apiKey: 5b3ce3597851110001cf624878f3be077a104fa39fe2aa2677d25dcb)

## What to do next:

OSM overpath API -> filtering for tourist spots.
Download Polygons/Points with different attributes
selection of attributes in QGIS
Attributes: Name, Location, maybe more
-> Paul prepares data for us on server
include as WFS in App (with openlayers)

# Meeting in class 27.6.

Data is hosted on GeoServer of Paul, credentials will be provided as well as example requests
Layers can be created on geoserver -> WFS for Datapoints
Include as WFS-Layer in OpenLayers -> http-get request as geo-json to display the data
add interactive elements (like highlighting, and getFeatureInfo)
modification of data and database is possible with special credentials or give Paul new Data to put on the server -> start with only queriing the data
