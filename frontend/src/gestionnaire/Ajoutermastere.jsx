
/*import React, { useState } from 'react';
import axios from 'axios';
import '../pages/gestionnaire.css';
import Navbargest from '../navbura/navbargest';
import '../navbar.css';
import'../gestionnaire/mastere.css';

function MasterForm() {
    const [formData, setFormData] = useState({
        nom: '',
        dateOuverture: '',
        dateCloture: '',
        details: ''
    });
    const [error, setError] = useState({
        nom: '',
        dateOuverture: '',
        dateCloture: '',
        details: ''
    });
    const [successMessage, setSuccessMessage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Vérification si la date de clôture est postérieure à la date d'ouverture
        const currentDate = new Date();
        const startDate = new Date(formData.dateOuverture);
        const endDate = new Date(formData.dateCloture);
        if (endDate <= startDate) {
            setError({
                ...error,
                dateCloture: 'La date de clôture doit être postérieure à la date d\'ouverture.'
            });
            return;
        }

        // Vérification si la date d'ouverture est postérieure à la date actuelle
        if (startDate <= currentDate) {
            setError({
                ...error,
                dateOuverture: 'La date d\'ouverture doit être postérieure à la date actuelle.'
            });
            return;
        }

        // Réinitialiser les erreurs s'il n'y en a pas
        setError({
            nom: '',
            dateOuverture: '',
            dateCloture: '',
            details: ''
        });

        axios.post("http://localhost:3002/Ajoutermastere", formData)
            .then(res => {
                setSuccessMessage("Ajout du master réussi !");
                setTimeout(() => setSuccessMessage(null), 3002);
                // Réinitialiser le formulaire après la soumission réussie
                setFormData({
                    nom: '',
                    dateOuverture: '',
                    dateCloture: '',
                    details: ''
                });
            })
            .catch(err => {
                console.error('Erreur lors de l\'ajout du master :', err);
                setError({
                    ...error,
                    details: 'Erreur lors de l\'ajout du master. Veuillez réessayer.'
                });
            });
    };

    return (
        <div className='mastere'>
         <Navbargest/>
          
               
                {error.details && <p className="error-message">{error.details}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>}
                <form onSubmit={handleSubmit} className='maste'>
                <h1>Ajouter Master</h1>
                <hr></hr>
                    <div className="form-group">
                        <label>Nom du master:</label>
                        <input type="text" name="nom" value={formData.nom} onChange={handleChange} required/>
                    </div>
                    <div className="form-group">
                        <label>Date d'ouverture:</label>
                        <input type="date" name="dateOuverture" value={formData.dateOuverture} onChange={handleChange} required />
                        {error.dateOuverture && <p className="error-message">{error.dateOuverture}</p>}<br/>
                    </div>
                    <div className="form-group">
                        <label>Date de clôture:</label>
                        <input type="date" name="dateCloture" value={formData.dateCloture} onChange={handleChange} required />
                        {error.dateCloture && <p className="error-message">{error.dateCloture}</p>}<br/>
                    </div>
                    <div className="form-group">
                        <label>Détails du master:</label>
                        <textarea name="details" value={formData.details} onChange={handleChange} required ></textarea><br/>
                    </div>
                    <button type="submit">Ajouter</button>
                </form>
        </div>
    );
}

export default MasterForm;*/

import React, { useState } from 'react';
import axios from 'axios';
import Navbargest from '../navbura/navbargest';
import '../navbar.css';
import './mastere.css';

function MasterForm() {
  const [formData, setFormData] = useState({
    nom: '',
    dateOuverture: '',
    dateCloture: '',
    details: ''
  });
  const [error, setError] = useState({
    nom: '',
    dateOuverture: '',
    dateCloture: '',
    details: ''
  });
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setError({
      ...error,
      [name]: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentDate = new Date();
    const startDate = new Date(formData.dateOuverture);
    const endDate = new Date(formData.dateCloture);

    if (endDate <= startDate) {
      setError({
        ...error,
        dateCloture: 'La date de clôture doit être postérieure à la date d\'ouverture.'
      });
      return;
    }

    if (startDate <= currentDate) {
      setError({
        ...error,
        dateOuverture: 'La date d\'ouverture doit être postérieure à la date actuelle.'
      });
      return;
    }

    setError({
      nom: '',
      dateOuverture: '',
      dateCloture: '',
      details: ''
    });

    axios.post("http://localhost:3002/Ajoutermastere", formData, {
      headers: {
        Authorization: `Bearer ${document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1]}`
      }
    })
      .then(res => {
        console.log('Réponse de l\'API :', res.data);
        setSuccessMessage("Ajout du master réussi !");
        setTimeout(() => setSuccessMessage(null), 3000);
        setFormData({
          nom: '',
          dateOuverture: '',
          dateCloture: '',
          details: ''
        });
      })
      .catch(err => {
        console.error('Erreur lors de l\'ajout du master :', err);
        setError({
          ...error,
          details: 'Erreur lors de l\'ajout du master. Veuillez réessayer.'
        });
      });
  };

  return (
    <div className='mastere'>
      <Navbargest />
      {error.details && <p className="error-message">{error.details}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form className='maste' onSubmit={handleSubmit}>
        <h1>Ajouter Master</h1>
        <hr></hr>
        <div className="form-group">
          <label htmlFor="nom">Nom du master:</label>
          <input type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="dateOuverture">Date d'ouverture:</label>
          <input type="date" id="dateOuverture" name="dateOuverture" value={formData.dateOuverture} onChange={handleChange} required />
          {error.dateOuverture && <p className="error-message">{error.dateOuverture}</p>}<br />
        </div>
        <div className="form-group">
          <label htmlFor="dateCloture">Date de clôture:</label>
          <input type="date" id="dateCloture" name="dateCloture" value={formData.dateCloture} onChange={handleChange} required />
          {error.dateCloture && <p className="error-message">{error.dateCloture}</p>}<br />
        </div>
        <div className="form-group">
          <label htmlFor="details">Détails du master:</label>
          <textarea id="details" name="details" value={formData.details} onChange={handleChange} required></textarea><br />
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default MasterForm;
