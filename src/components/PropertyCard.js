import React from 'react';
import { Link } from 'react-router-dom';


const PropertyCard = ({ property }) => {
  return (
    <div className="card">
      <img src={property.image} className="card-img-top" alt={property.title} />
      <div className="card-body">
        <h5 className="card-title">{property.title}</h5>
        <p className="card-text">{property.description}</p>
        <p className="card-text"><strong>${property.price}</strong></p>
        <Link to={`/property/${property.id}`} className="btn btn-primary">View Details</Link>
      </div>
    </div>
  );
};

export default PropertyCard;
