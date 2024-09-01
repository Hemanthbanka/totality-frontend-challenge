import React from 'react';

const locations = ['City Center', 'Seaside', 'Countryside', 'Downtown', 'Suburban'];
const bedrooms = [1, 2, 3, 4];

const Filter = ({ filters, setFilters }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  return (
    <div className="filter mb-4">
      <h2>Filter Properties</h2>
      <div className="mb-3">
        <label htmlFor="location" className="form-label">Location</label>
        <select name="location" id="location" className="form-select" value={filters.location} onChange={handleFilterChange}>
          <option value="">All Locations</option>
          {locations.map(location => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="priceRange" className="form-label">Price Range</label>
        <input type="number" name="priceRange" id="priceRange" className="form-control" value={filters.priceRange} onChange={handleFilterChange} placeholder="Max Price" />
      </div>
      <div className="mb-3">
        <label htmlFor="bedrooms" className="form-label">Bedrooms</label>
        <select name="bedrooms" id="bedrooms" className="form-select" value={filters.bedrooms} onChange={handleFilterChange}>
          <option value="">Any</option>
          {bedrooms.map(bedroom => (
            <option key={bedroom} value={bedroom}>{bedroom} Bedroom{bedroom > 1 ? 's' : ''}</option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="amenities" className="form-label">Amenities</label>
        <input type="text" name="amenities" id="amenities" className="form-control" value={filters.amenities} onChange={handleFilterChange} placeholder="e.g., pool, wifi" />
      </div>
    </div>
  );
};

export default Filter;
