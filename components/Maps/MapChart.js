import React from 'react';
import { geoCentroid } from 'd3-geo';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
} from 'react-simple-maps';

import allStates from '../../assests/localized/mapData.json';

const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

const offsets = {
  VT: [50, -8],
  NH: [34, 2],
  MA: [30, -1],
  RI: [28, 2],
  CT: [35, 10],
  NJ: [34, 1],
  DE: [33, 0],
  MD: [47, 10],
  DC: [49, 21],
};

const handleEvent = (geo) => {
  const curState = allStates.find((s) => s.val === geo.id);
  window.location.assign(`state/${curState.abreviation}`);
};

const handleStateParty = (geo) => {
  const curState = allStates.find((s) => s.val === geo.id);

  return curState.party === 'D' ? '#499DF5' : '#fd3428';
};

const handleHover = (geo) => {
  const curState = allStates.find((s) => s.val === geo.id);

  return curState.party === 'D' ? '#2E37FE' : '#f00f02';
};

const MapChart = () => {
  return (
    <ComposableMap projection="geoAlbersUsa">
      <Geographies geography={geoUrl}>
        {({ geographies }) => (
          <>
            {geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                stroke="#FFF"
                geography={geo}
                fill="#DDD"
                onClick={() => handleEvent(geo)}
                style={{
                  default: {
                    fill: handleStateParty(geo),
                    outline: 'none',
                  },
                  hover: {
                    fill: handleHover(geo),
                    outline: 'none',
                    cursor: 'pointer',
                  },
                  pressed: {
                    fill: '#E42',
                    outline: 'none',
                  },
                }}
              />
            ))}
            {geographies.map((geo) => {
              const centroid = geoCentroid(geo);
              const cur = allStates.find((s) => s.val === geo.id);
              return (
                <g key={geo.rsmKey + '-name'}>
                  {cur &&
                    centroid[0] > -160 &&
                    centroid[0] < -67 &&
                    (Object.keys(offsets).indexOf(cur.abreviation) === -1 ? (
                      <Marker coordinates={centroid}>
                        <text
                          y="2"
                          fontSize={14}
                          textAnchor="middle"
                          onClick={() => handleEvent(geo)}
                          style={{ cursor: 'pointer' }}>
                          {cur.abreviation}
                        </text>
                      </Marker>
                    ) : (
                      <Annotation
                        subject={centroid}
                        dx={offsets[cur.abreviation][0]}
                        dy={offsets[cur.abreviation][1]}>
                        <text
                          x={4}
                          fontSize={14}
                          alignmentBaseline="middle"
                          onClick={() => handleEvent(geo)}
                          style={{ cursor: 'pointer' }}>
                          {cur.abreviation}
                        </text>
                      </Annotation>
                    ))}
                </g>
              );
            })}
          </>
        )}
      </Geographies>
    </ComposableMap>
  );
};

export default MapChart;
