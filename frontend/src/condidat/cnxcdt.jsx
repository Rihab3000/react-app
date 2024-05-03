//code sans token et avec css
/*
import React, { useState } from 'react';
import axios from 'axios';
import './cnx.css';
import  rectorat from '../images/jendouba.png'
const LoginForm = () => {
    const [cin, setCin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = { cin, password };

        axios.post('http://localhost:3000/cnxcdt', formData)
            .then(res => {
                if (res.data === 'success') {
                  window.location.href = '/home';
                  // Utilisation de naviger.navigate au lieu de simplement navigate
                } else {
                    setError('Cin ou mot de passe incorrect');
                }
            })
            .catch(err => {
                console.error('Erreur lors de la vérification des informations d\'identification : ' + err);
                setError('Une erreur s\'est produite. Veuillez réessayer.');
            });
    };

    return (
        <div className='conteneurcdt'>
            <form onSubmit={handleSubmit} className='logincdt'>
            <img src={rectorat}  id="rectorat" alt="Imgrect"  />
            <hr></hr>
                <fieldset className='square'> 
                <legend>Connexion</legend>
                    <label className='input-label'> <strong> CIN :</strong></label>
                    <input type="number" placeholder="tapez votre cin..." value={cin} onChange={(e) => setCin(e.target.value)} required />
                    <label className='input-label'> <strong>Mot de passe :</strong></label>
                    <input type="password" placeholder="tapez votre mdp..." value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button type="submit">Se connecter</button>
                    <div className="demo_text-dots">
                        <p className="demo_text demo_text--step-0"></p>
                    </div>
                    {error && <p>{error}</p>}
                </fieldset>
            </form>
        </div>
    );
};

export default LoginForm;
*/


//code avec token sans css

import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const LoginForm = () => {
  const [cin, setCin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/cnxcdt', { cin, password })
    .then(response => {
      const token = response.data.token; // Récupérer le token de la réponse
      // Stocker le token dans un cookie sécurisé avec une expiration
      Cookies.set('token', token, { expires: 1, secure: true, sameSite: 'strict' });
      // Inclure le token dans l'en-tête Authorization pour les requêtes ultérieures
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // Rediriger l'utilisateur vers la page appropriée
      window.location.href = '/dashboardgest'; 
    })
    .catch(error => {
      if (error.response && error.response.status === 401) {
        setError('Cin ou mot de passe incorrect');
      } else {
        setError('Une erreur s\'est produite. Veuillez réessayer.');
      }
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="CIN"
          value={cin}
          onChange={(e) => setCin(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Se connecter</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginForm;

