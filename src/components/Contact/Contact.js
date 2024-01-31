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
 
  // fonction asynchrone qui gère la soumission du formulaire
  // lorsqu'un utilisateur appuie sur le bouton "Envoyer"
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const [formSent, setFormSent] = useState(false);

  //  met à jour l'état formData avec la nouvelle valeur de la zone de texte
  const handleInput = (e) => {
    handleChange(e);
    e.target.style.height = "auto"; //  réinitialise la hauteur de la zone de texte à sa valeur par défaut
    e.target.style.height = e.target.scrollHeight + "px"; //  définit la hauteur de la zone de texte en fonction de la hauteur de son contenu
  }; 

    const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le comportement par défaut de soumission du formulaire
     // Envoi d'une requête POST à l'URL spécifiée
    const response = await fetch('https://formspree.io/f/mnqkondz', {
      method: 'POST', // Utilisation de la méthode POST pour envoyer les données
      headers: {
        'Content-Type': 'application/json' // Spécification du type de contenu comme JSON
      },
      body: JSON.stringify(formData)  // Conversion des données du formulaire en format JSON et envoi
    });

    // Vérification de la réponse de la requête
    if (response.ok) {
      console.log("Données ajoutées avec succès!");
      setFormSent(true); // Mise à jour de l'état pour indiquer que le formulaire a été envoyé avec succès
    } else {
      console.error("Erreur lors de l'envoi des données"); 
    }
  };
  
  return (
    <div>
      <Header />
      <div className="contact-form">
        <h2>Contactez-moi</h2>
         {/* Formulaire de contact avec gestionnaires d'événements */}
        <form onSubmit={handleSubmit}>
          <div className="forma">
            <label htmlFor="nom">Nom :</label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}  // Gestionnaire d'événements pour la saisie du nom
              required
            />
          </div>
          {/* Zone de saisie pour l'email */}
          <div className="forma">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}  // Gestionnaire d'événements pour la saisie de l'email
              required
            />
          </div>
           {/* Zone de texte pour le message */}
          <div className="forma">
          <label className="label" htmlFor="message">Message :</label>
           <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInput}   // Gestionnaire d'événements pour la saisie du message
              required
            ></textarea>
          </div>
          <button type="submit" className="custom-button">Envoyer</button>
        </form>
         {/* Affichage d'un message de confirmation si le formulaire a été soumis avec succès */}
        {formSent && <div className="confirmation">Formulaire soumis avec succès!</div>}
    </div>
      <Footer />
    </div>
  );
}

export default Contact;
