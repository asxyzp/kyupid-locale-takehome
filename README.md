# Kyupid analytics

**Kyupid analytics** is an analytics app for understanding and making sense of the data from the Kyupid dating app. This app was built as a take home project for the frontend engineering position at locale.ai

## Map Color Coding

- **Pro users per area (%)**: The color of the various features of the map is the primary fillColor of the pallete (#01B26F), but the fillOpacity varies from 0-1 depending upon the % of pro users in the area.
- **Male users per area (%)**: The color of the various features of the map is the primary fillColor of the pallete (#01B26F), but the fillOpacity varies from 0-1 depending upon the % of male users in the area.
- **Female users per area (%)**: The color of the various features of the map is the primary fillColor of the pallete (#01B26F), but the fillOpacity varies from 0-1 depending upon the % of female users in the area.

## Kyupid analytics brand guide

**Colors**:
- Primary: #01b26f
- Secondary: #02b6bd
- Error: #e84f10

**Fonts**:
- App: Poppins
- Logo: Source Serif Pro

## App Directory Structure
- /src/API => Contains API endpoint calls for /areas & /users
- /src/Assets => Contains image files used in the app
- /src/Components/Custom => Contains custom MUI components
- /src/Components/Modal => Contains modals & modal router
- /src/Components/Navigation => Contains navigation elements (e.g. SideDrawer)
- /src/Context => Contains app context used by Context API
- /src/Theme => Contains app theming 

 ## Screens & Routing
- / => Dashboard/analytics page => Analytics.js
- /map => Maps page => Map.js
- /about => About/information page => About.js
- else (*) => 404 page => PageNotFound.js 


## Technologies, Packages & External Resources Used

- Language: JS
- Framework: React
- Fonts: Google Fonts
- Maps: React Leaflet
- Icons: Material Icons
- Component library: MUI
- Routing: react-router-dom
- State management: Context API

## Screenshots

![Kyupid home](https://i.ibb.co/Cnvm0qN/kyupid-home.png)
![alt text](https://i.ibb.co/QD4w4Ls/kyupid-map-1.png)
![alt text](https://i.ibb.co/5MGGsBq/kyupid-map-2.png)
![alt text](https://i.ibb.co/807jDyk/kyupid-map-3.png)
![alt text](https://i.ibb.co/807jDyk/kyupid-map-3.png)
![alt text](https://i.ibb.co/mB71246/kyupid-about.png)
![alt text](https://i.ibb.co/3YCdZ1C/localhost-dark-mode.png)
![alt text](https://i.ibb.co/8gkHbL6/kyupid-404.png)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
