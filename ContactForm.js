import React, { useState } from 'react';

function ContactForm({ onSubmit }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [email, setEmail] = useState('');
  const [relation, setRelation] = useState('Family');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ firstName, lastName, phoneNumber, imageUrl, email, relation });
    setFirstName('');
    setLastName('');
    setPhoneNumber('');
    setImageUrl('');
    setEmail('');
    setRelation('Family');
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        required
      />
      <input
        type="url"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <select
        value={relation}
        onChange={(e) => setRelation(e.target.value)}
      >
        <option value="Family">Family</option>
        <option value="Friend">Friend</option>
        <option value="Business">Business</option>
      </select>
      <button type="submit">Add Contact</button>
    </form>
  );
}


export default ContactForm;
