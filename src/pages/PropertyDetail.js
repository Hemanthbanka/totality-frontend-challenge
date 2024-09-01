import React from 'react';
import { useParams } from 'react-router-dom';

const properties = [
  { id: 1, title: 'Cozy Apartment', description: 'A cozy apartment in the city center.', price: 100, location: 'City Center', bedrooms: 1, image: '/assets/images/property1.jpg' },
  { id: 2, title: 'Luxury Villa', description: 'A luxurious villa with a sea view.', price: 500, location: 'Seaside', bedrooms: 4, image: '/assets/images/property2.jpg' },
  { id: 3, title: 'Charming Cottage', description: 'A charming cottage in the countryside.', price: 150, location: 'Countryside', bedrooms: 2, image: '/assets/images/property3.jpg' },
  { id: 4, title: 'Modern Loft', description: 'A modern loft with great city views.', price: 200, location: 'Downtown', bedrooms: 2, image: '/assets/images/property4.jpg' },
  { id: 5, title: 'Spacious House', description: 'A spacious house with a large backyard.', price: 300, location: 'Suburban', bedrooms: 3, image: '/assets/images/property5.jpg' },
  { id: 6, title: 'conceives farmhouse', description: 'A farmhouse is a kind of property in an agricultural setting, which is used for residential purpose.', price: 800, location: 'Seaside', bedrooms: 3, image: '/assets/images/property6.jpg' }
];

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find(p => p.id === parseInt(id));

  return (
    <div className="container">
      <h1>{property.title}</h1>
      <img src={property.image} alt={property.title} className="img-fluid mb-3" />
      <p>{property.description}</p>
      <p><strong>Price: ${property.price}</strong></p>
      <p><strong>Location: {property.location}</strong></p>
      <p><strong>Bedrooms: {property.bedrooms}</strong></p>
      <a href="/cart" className="btn btn-primary">Book Now</a>
    </div>
  );
};

export default PropertyDetail;
