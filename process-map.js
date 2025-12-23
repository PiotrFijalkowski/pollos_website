const fs = require('fs');
const d3 = require('d3-geo');

// Read the GeoJSON file
const rawData = fs.readFileSync('./public/maps/polandLow.json');
const geoData = JSON.parse(rawData);

// Create a projection
// We map it to a logical coordinate system (e.g., 800x800)
// This simplifies the path data
const projection = d3.geoMercator()
  .fitSize([1000, 1000], geoData);

const pathGenerator = d3.geoPath().projection(projection);

const mapData = geoData.features.map(feature => {
  return {
    id: feature.id,
    name: feature.properties.name,
    path: pathGenerator(feature)
  };
});

// Output TS file content
const fileContent = `export interface Voivodeship {
  id: string;
  name: string;
  path: string;
}

export const POLAND_MAP_DATA: Voivodeship[] = ${JSON.stringify(mapData, null, 2)};
`;

fs.writeFileSync('./src/components/MapSection/PolandMapData.ts', fileContent);

console.log('Map data generated successfully!');
