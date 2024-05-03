/*
import React, { useState } from 'react';
import axios from 'axios';
import'../condidat/cnx.css';
import Navbar from '../navbura/navbar'; // Assurez-vous que le chemin est correct
import '../navbar.css'; // Assurez-vous que le chemin est correct et que le nom du fichier est correctement orthographié

function Authentification() {
  const [cin, setCin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleCinChange = (event) => {
    setCin(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (cin, password) => {
    // Vérifier si l'utilisateur est un administrateur
    if (cin === '13652871' && password === 'admin') {
      window.location.href = '/dashbord'; 
    } else {
      // Vérifier si l'utilisateur est un gestionnaire en vérifiant dans la base de données
      axios.post('http://localhost:3002/authentification', { cin, password })
        .then(response => {
          if (response.data === 'success') {
            window.location.href = '/dashboardgest'; // Rediriger vers la page de gestionnaire
          } else {
            setError('CIN ou mot de passe incorrect');
          }
        })
        .catch(error => {
          console.error('Erreur lors de la vérification du compte de gestionnaire:', error);
          setError('Une erreur s\'est produite. Veuillez réessayer.');
        });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(cin, password);
  };

  return (
    <div className='conteneur'>
     
      <form onSubmit={handleSubmit} className='login'>
      <h1>Authentification</h1>
      <hr/>
      <fieldset className='square'>
       <div className='input-group'>
       <label className='input-label'> <strong> CIN :</strong></label>
          <input type="cin" id="cin" name="cin" placeholder="tapez votre cin..." value={cin}  onChange={handleCinChange}required /> 
          <label className='input-label'> <strong>Mot de passe :</strong></label>
          <input type="password" id="password" name="password" placeholder=" tapez  votre mdp" value={password}onChange={handlePasswordChange}required 
       />
        <button type="submit">Se connecter</button>
        {error && <p>{error}</p>}
       
        </div>
        </fieldset>
      </form>
    </div>
  );
}

export default Authentification;
*/

import React, { useState } from 'react';
import axios from 'axios';
import './authentif.css';
import Navbar from '../navbura/navbar'; // Vérifiez le chemin d'accès
import '../navbar.css'; // Vérifiez le chemin d'accès et le nom du fichier
import  rectorat from '../images/jendouba.png'

function Authentification() {
  const [cin, setCin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleCinChange = (event) => {
    setCin(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (cin, password) => {
    // Vérifier si l'utilisateur est un administrateur
    if (cin === '13652871' && password === 'admin') {
      window.location.href = '/dashbord'; 
    } else {
    
        axios.post('http://localhost:3002/authentification', { cin, password })
        .then(response => {
          const token = response.data.token; // Récupérer le token de la réponse
          // Stocker le token dans un cookie ou dans le stockage local du navigateur
          document.cookie = `token=${token}; path=/`;
          // Inclure le token dans l'en-tête Authorization pour les requêtes ultérieures
          axios.defaults.headers.common['Authorization'] = token;
          // Rediriger l'utilisateur vers la page appropriée
          window.location.href = '/dashboardgest'; 
        })
        .catch(error => {
          console.error('Erreur lors de la vérification du compte de gestionnaire:', error);
          setError('Cin ou Mot de passe incorrecte');
        });
      

    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(cin, password);
  };

  return (
    <div className='conteneurlogin'>
      <form onSubmit={handleSubmit} className='login'>
      <img src={rectorat}  id="rectorat" alt="Imgrect"  />
      <hr></hr>
        <fieldset className='field'>
          <legend>connexion</legend>
          <div className='input-group'>
            <label htmlFor="cin" className='input-label'><strong>CIN :</strong></label>
            <input type="text" id="cin" name="cin" placeholder="Tapez votre CIN..." value={cin} onChange={handleCinChange} required />
            <label htmlFor="password" className='input-label'><strong>Mot de passe :</strong></label>
            <input type="password" id="password" name="password" placeholder="Tapez votre mot de passe" value={password} onChange={handlePasswordChange} required />
            <button   className='btn' type="submit">Se connecter</button>
            {error && <p>{error}</p>}
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default Authentification;


