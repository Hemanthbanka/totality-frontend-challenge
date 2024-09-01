import React from 'react';
import PropertyCard from './PropertyCard';

const PropertyList = ({ properties }) => {
  return (
    <div className="row">
      {properties.map(property => (
        <div className="col-md-4 mb-4" key={property.id}>
          <PropertyCard property={property} />
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
