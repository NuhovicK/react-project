import React from 'react';

const MapPage = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <iframe
        title="Map"
        src="https://www.openstreetmap.org/export/embed.html"
        style={{ width: '80vw', height: '80vh', border: '1px solid #ccc' }}
      />
    </div>
  );
};

export default MapPage;
