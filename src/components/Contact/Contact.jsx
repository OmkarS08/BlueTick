import React, { useState } from 'react';
import './Contact.css'

const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const [formErrors, setFormErrors] = useState({
    fullName: '',
    subject: '',
    message: '',
    email: '',
    contactNumber: '',
  });

  const validateForm = () => {
    const errors = {};

    if (!fullName.trim()) {
      errors.fullName = 'Full Name is required.';
    }

    if (!subject.trim()) {
      errors.subject = 'Subject is required.';
    }

    if (!message.trim()) {
      errors.message = 'Message is required.';
    }

    if (!email.trim()) {
      errors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Invalid email address.';
    }

    if (!contactNumber.trim()) {
      errors.contactNumber = 'Contact Number is required.';
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Perform form submission logic here
      alert('Form submitted successfully!');
    }
  };



  return (
    <div id="Contact" className='form'>
      <h2>Contacts</h2>
      <div className='form-content'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name*</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        {formErrors.fullName && <p>{formErrors.fullName}</p>}

        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        {formErrors.subject && <p>{formErrors.subject}</p>}

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {formErrors.message && <p>{formErrors.message}</p>}

        <label htmlFor="email">Email*</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {formErrors.email && <p>{formErrors.email}</p>}

        <label htmlFor="contactNumber">Contact Number*</label>
        <input
          type="tel"
          id="contactNumber"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
        />
        {formErrors.contactNumber && (
          <p>{formErrors.contactNumber}</p>
        )}

        <button type="submit">Submit form</button>
      </form>
      </div>
    </div>
  );
}

export default Contact