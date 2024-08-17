import React, { useState } from 'react';
import './App.css';
import ContactForm from './ContactForm';

// create a app 
 /* Create an app for managing the contacts of a user. The app must have contact cards list, a form to create a new contact, and search functionality for searching a contact based on first name, last name, and phone number. A contact card must have the following fields.
First Name
Last Name
Phone Number
Image Url
Email
Relation (Must be a select tag having the values Family, Friend, Business)
*/



function Contact({ contact }) {

  return (
    
    <div className="contact-card">
      <img src={contact.imageUrl} alt={contact.firstName} />
      <div>
        <h3>{contact.firstName} {contact.lastName}</h3>
        <p><strong>Phone:</strong> {contact.phoneNumber}</p>
        <p><strong>Email:</strong> {contact.email}</p>
        <p><strong>Relation:</strong> {contact.relation}</p>
      </div>
    </div>
  );
}

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const filteredContacts = contacts.filter((contact) => {
    const { firstName, lastName, phoneNumber } = contact;
    return (
      firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      phoneNumber.includes(searchTerm)
    );
  });

  return (
    <div className="app">
      <h1>Contact Management App</h1>
      <ContactForm onSubmit={addContact} />
      <input className='searchbar'
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
        {/* user add form  */}
      <div className='user_add'>
      <div className="contact-list user_contact">
        {filteredContacts.map((contact, index) => (
          <Contact key={index} contact={contact} />
        ))}
      </div>
      </div>
    </div>
  );


}

export default App;
