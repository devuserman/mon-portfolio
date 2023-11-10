import React, { useState } from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: ''
  });
 


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const [formSent, setFormSent] = useState(false);

  const handleInput = (e) => {
    handleChange(e); // Conservez l'appel à handleChange
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  }; 

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://formspree.io/f/mnqkondz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

   
  
    if (response.ok) {
      console.log("Données ajoutées avec succès!");
      setFormSent(true);
    } else {
      console.error("Erreur lors de l'envoi des données");
    }
  };
  
  return (
    <div>
      <Header />
      <div className="contact-form">
        <h2>Contactez-moi</h2>
        <form onSubmit={handleSubmit}>
          <div className="forma">
            <label htmlFor="nom">Nom :</label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
            />
          </div>
          <div className="forma">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="forma">
          <label className="label" htmlFor="message">Message :</label>
           <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInput}
              required
            ></textarea>
          </div>
          <button type="submit" className="custom-button">Envoyer</button>
        </form>
        {formSent && <div className="confirmation">Formulaire soumis avec succès!</div>}

      </div>
      <Footer />
    </div>
  );
}

export default Contact;
