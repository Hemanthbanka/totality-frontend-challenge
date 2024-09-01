import React, { useState } from 'react';
import PropertyList from '../components/PropertyList';
import Filter from '../components/Filter';
import './Home.css'; // Import custom CSS

// Mock data with location and bedrooms
const properties = [
  { id: 1, title: 'Cozy Apartment', description: 'A cozy apartment in the city center.', price: 100, location: 'City Center', bedrooms: 1, image: '/assets/images/property1.jpg' },
  { id: 2, title: 'Luxury Villa', description: 'A luxurious villa with a sea view.', price: 500, location: 'Seaside', bedrooms: 4, image: '/assets/images/property2.jpg' },
  { id: 3, title: 'Charming Cottage', description: 'A charming cottage in the countryside.', price: 150, location: 'Countryside', bedrooms: 2, image: '/assets/images/property3.jpg' },
  { id: 4, title: 'Modern Loft', description: 'A modern loft with great city views.', price: 200, location: 'Downtown', bedrooms: 2, image: '/assets/images/property4.jpg' },
  { id: 5, title: 'Spacious House', description: 'A spacious house with a large backyard.', price: 300, location: 'Suburban', bedrooms: 3, image: '/assets/images/property5.jpg' },
  { id: 6, title: 'Conceives Farmhouse', description: 'A farmhouse is a kind of property in an agricultural setting, which is used for residential purpose.', price: 800, location: 'Seaside', bedrooms: 3, image: '/assets/images/property6.jpg' }
];

const Home = () => {
  const [filters, setFilters] = useState({
    location: '',
    priceRange: '',
    bedrooms: '',
    amenities: ''
  });

  const filteredProperties = properties.filter(property => {
    return (
      (filters.location === '' || property.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (filters.priceRange === '' || property.price <= filters.priceRange) &&
      (filters.bedrooms === '' || property.bedrooms === parseInt(filters.bedrooms)) &&
      (filters.amenities === '' || property.description.includes(filters.amenities))
    );
  });

  return (
    <div className="container-fluid">
      <div className="row">
        <aside className="col-md-3 filter-sidebar">
          <Filter filters={filters} setFilters={setFilters} />
        </aside>
        <main className="col-md-9">
          <PropertyList properties={filteredProperties} />
        </main>
      </div>
    </div>
  );
};

export default Home;
