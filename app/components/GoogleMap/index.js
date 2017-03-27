import React, { PropTypes } from 'react';
import {
  GoogleMap,
  Marker,
} from 'react-google-maps';

import { default as ScriptjsLoader } from 'react-google-maps/lib/async/ScriptjsLoader';

const SimpleMap = ({ markers, containerElementProps, languageId }) => (
  <section>
    <ScriptjsLoader
      hostname={'maps.googleapis.com'}
      pathname={'/maps/api/js'}
      query={{ key: 'AIzaSyDhTARP4OBc6jIYDScrTfEkeikL7cuQBnk', v: '3.25', libraries: 'geometry,drawing,places', language: languageId }}
      loadingElement={
        <div {...containerElementProps} style={{ height: '100%' }}>
        </div>
      }
      containerElement={
        <div
          {...containerElementProps}
          style={{
            height: '100%',
            minHeight: '460px',
          }}
        />
      }
      googleMapElement={
        <GoogleMap
          defaultZoom={12}
          defaultCenter={{ lat: 12.849830, lng: 77.646654 }}
        >
          {markers.map((marker) => (
            <Marker
              {...marker}
            />
          )) }
        </GoogleMap>
      }
    />
  </section>
);

SimpleMap.propTypes = {
  markers: PropTypes.array,
  containerElementProps: PropTypes.object,
  languageId: PropTypes.string.isRequired,
};

export default SimpleMap;
