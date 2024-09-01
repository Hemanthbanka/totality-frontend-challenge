import React, { useState } from 'react';

const Checkout = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    paymentDetails: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle checkout logic
    alert('Checkout successful!');
  };

  return (
    <div className="container">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={form.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="paymentDetails" className="form-label">Payment Details</label>
          <input type="text" className="form-control" id="paymentDetails" name="paymentDetails" value={form.paymentDetails} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Complete Booking</button>
      </form>
    </div>
  );
};

export default Checkout;
