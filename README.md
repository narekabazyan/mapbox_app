# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`
Installs all dependencies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Frontend React Assignment

## Overview
Your task is to create a simplified version of our Driver Web App (DWA). This app assists a delivery driver in managing and completing parcel deliveries to various addresses.

## Design Reference
Please refer to this Figma design for the visual layout of the application:
http://tinyurl.com/3ue2mjey

Password: '20240228'

❗ You can only use [Material Design UI components](https://material-ui.com/).

## Specific Tasks
1. **Visual Design**
   <br>Your application should closely resemble the provided design.

2. **Stops List**
   <br>Please refer to the [stops_list.json](https://gitlab.routetitan.com/hiring/react-assignment/-/blob/master/stops_list.json?ref_type=heads) file provided in this project to import the list of delivery stops. This file contains all necessary details for each stop, including sequence, estimated time of arrival (ETA), time window, street address, zipcode, city, and coordinates.

3. **Navigation Feature**
   <br>On clicking the 'Navigate' icon, Google Maps will open in a new window to guide the driver from their current location to the delivery address.

4. **Completion Transition**
   <br>On clicking the 'Complete' button, please mimic the ticket transition displayed on the second screen of the design.

5. **Map View** <br>
   Show all delivery locations with markers on a map and connect the markers with straight lines in sequence.
   <br>- Interactive Map: use MapLibre GL JS for map interaction (markers, lines), details can be found [here](https://maplibre.org/maplibre-gl-js/docs/)
   <br>- Tiles: Use `https://tiles.stadiamaps.com/styles/osm_bright.json` as the style URL in MapLibre GL JS

6. **Marker Transition**
   <br>Change the marker's color on the map once a delivery is marked as "Completed".
