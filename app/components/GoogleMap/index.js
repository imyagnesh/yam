import React, { PropTypes } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

// import { default as ScriptjsLoader } from "react-google-maps/lib/async/ScriptjsLoader";

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 12.84983, lng: 77.646654 }}
    >
      <Marker position={props.marker} />
    </GoogleMap>
  ))
);

const SimpleMap = ({ marker, languageId }) => (
  <MyMapComponent
    marker={marker}
    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&language=${languageId}&key=AIzaSyDhTARP4OBc6jIYDScrTfEkeikL7cuQBnk`}
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `400px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
);

SimpleMap.propTypes = {
  marker: PropTypes.object.isRequired,
  containerElementProps: PropTypes.object,
  languageId: PropTypes.string.isRequired
};

export default SimpleMap;
