
import React, { useState } from 'react';
import axios from 'axios';
import './login.css';
import teep1 from '../images/teep1.jpg';








const LoginForm = () => {
  const [cin, setCin] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [numTel, setNumTel] = useState('');
  const [dateNaissance, setDateNaissance] = useState('');
  const [lieuNaissance, setLieuNaissance] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

 /* const resetForm = () => {
    setCin('');
    setNom('');
    setPrenom('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setNumTel('');
    setDateNaissance('');
    setLieuNaissance('');
    setMessage('');
  };*/

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cin || !nom || !prenom || !email || !password || !confirmPassword || !numTel || !dateNaissance || !lieuNaissance) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    if (cin.length !== 8) {
      setError('Le CIN doit contenir exactement 8 chiffres.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Le mot de passe et la confirmation du mot de passe doivent être identiques.');
      return;
    }

    if (numTel.length !== 8 || isNaN(parseInt(numTel))) {
      setError('Le numéro de téléphone doit contenir exactement 8 chiffres.');
      return;
    }

    axios.get(`http://localhost:3000/checkCIN/${cin}`).then(response => {
      if (response.data.exists) {
        setError('Ce CIN est déjà inscrit.');
      } else {
     axios.post('http://localhost:3000/loginform', { cin, nom, prenom, email, password, confirmPassword, numTel, dateNaissance, lieuNaissance })
          .then(response => {
            setMessage('inscription avec succes!');
           // resetForm(); 
          })
          .catch(error => {
            console.error('Erreur lors de l\'envoi du formulaire :', error);
            setError('Une erreur s\'est produite lors de l\'envoi du formulaire.');
          });
      }
    });
  };

  return (
    <div className='conteneur1'>
      <div>
        <img src={teep1} id="Teep1" />
        <img src={teep1} id="Teep2" />
        <form onSubmit={handleSubmit} className='form'>
        <h1 >Inscription</h1> 
        <hr/>
          <table style={{ width: '100%' }}>
            <tbody>
              <tr>
                <td> <strong> Cin: </strong></td>
                <td><input type="number" value={cin} onChange={(e) => setCin(e.target.value)} /></td>

                <td> <strong> Nom: </strong> </td>
                <td><input type="text" value={nom} onChange={(e) => setNom(e.target.value)} /></td>
                <td> <strong>Prénom: </strong></td>
                <td><input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} /></td>
              </tr>
              <tr>
                <td> <strong> Email: </strong></td>
                <td><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></td>
                <td> <strong>Mot de passe:</strong> </td>
                <td><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></td>
                <td> <strong> Confirmer mdp: </strong></td>
                <td><input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /></td>
              </tr>
              <tr>
                <td> <strong>Numtel: </strong></td>
                <td><input type="tel" value={numTel} onChange={(e) => setNumTel(e.target.value)} /></td>
                <td> <strong>Date de naissance: </strong></td>
                <td><input type="date" value={dateNaissance} onChange={(e) => setDateNaissance(e.target.value)} /></td>
                <td> <strong> Lieu de naissance: </strong></td>
                <td><input type="text" value={lieuNaissance} onChange={(e) => setLieuNaissance(e.target.value)} /></td>
              </tr>
            </tbody>
          </table>
          <button >S'inscrire</button><br></br>
        <a href="cnxcdt">se connecter</a>
        </form>
        {error && <p className={`error-message ${error ? 'show' : ''}`}>{error}</p>}
        {message && <p className={`success-message ${message ? 'show' : ''}`}>{message}</p>}


      </div>
    </div>
  );
}  
export default LoginForm;




/*

import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const LoginForm = () => {
  const [cin, setCin] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [numTel, setNumTel] = useState('');
  const [dateNaissance, setDateNaissance] = useState('');
  const [lieuNaissance, setLieuNaissance] = useState('');
  const [message, setMessage] = useState('');
  const [inscriptionVisible, setInscriptionVisible] = useState(true);
  const [inscriptionMessage, setInscriptionMessage] = useState('');

  const toggleInscription = () => {
    setInscriptionVisible(!inscriptionVisible);
  };

  const handleInscription = (e) => {
    e.preventDefault();
    if (!cin || !nom || !prenom || !email || !password || !confirmPassword || !numTel || !dateNaissance || !lieuNaissance) {
      setMessage('Veuillez remplir tous les champs.');
      return;
    }

    if (cin.length !== 8) {
      setMessage('Le CIN doit contenir exactement 8 chiffres.');
      return;
    }

    if (password !== confirmPassword) {
      setMessage('Le mot de passe et la confirmation du mot de passe doivent être identiques.');
      return;
    }

    if (numTel.length !== 8 || isNaN(parseInt(numTel))) {
      setMessage('Le numéro de téléphone doit contenir exactement 8 chiffres.');
      return;
    }

    axios.get(`http://localhost:3000/checkCIN/${cin}`).then(response => {
      if (response.data.exists) {
        setMessage('Ce CIN est déjà inscrit.');
      } else {
        axios.post('http://localhost:3000/loginform', { cin, nom, prenom, email, password, confirmPassword, numTel, dateNaissance, lieuNaissance })
          .then(response => {
            setMessage(response.data.message);
            setCin('');
            setNom('');
            setPrenom('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setNumTel('');
            setDateNaissance('');
            setLieuNaissance('');
          })
          .catch(error => {
            console.error('Erreur lors de l\'envoi du formulaire :', error);
            setMessage('Une erreur s\'est produite lors de l\'envoi du formulaire.');
          });
      }
    });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', { email: email, password: password });
      localStorage.setItem('token', response.data.token);
      // Redirection vers la page master si la connexion réussit
      window.location.href = './master';
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);
      if (error.response && error.response.status === 401) {
        setInscriptionMessage('Email ou mot de passe incorrect. Veuillez réessayer.');
      } else {
        setInscriptionMessage('Une erreur s\'est produite lors de la connexion. Veuillez réessayer.');
      }
    }
  };

  return (
    <div className='container'>
      {inscriptionVisible ? (
        <div className='inscription'>
          <div className='left'>
            <h1>bon retour!</h1>
            <p>connectez-vous avec votre compte<br />pour nous rejoindre!</p>
            <button className='toggle1' onClick={toggleInscription}>connectez-vous</button>
          </div>
          <div className='right'>
            <h1>cree un compte</h1>
            <form onSubmit={handleInscription} className='form'>
              <label>Cin:
                <input type="number" value={cin} onChange={(e) => setCin(e.target.value)} />
              </label>
              <label>Nom:
                <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
              </label>
              <label>Prénom:
                <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
              </label>
              <label>Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </label>
              <label>Mot de passe:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </label>
              <label>Confirmer mdp:
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              </label>
              <label>Numéro de téléphone:
                <input type="tel" value={numTel} onChange={(e) => setNumTel(e.target.value)} />
              </label>
              <label>Date de naissance:
                <input type="date" value={dateNaissance} onChange={(e) => setDateNaissance(e.target.value)} />
              </label>
              <button type="submit">S'inscrire</button>
              <label>Lieu de naissance:
                <input type="text" value={lieuNaissance} onChange={(e) => setLieuNaissance(e.target.value)} />
              </label>
              {message && <p>{message}</p>}
            </form>
          </div>
        </div>
      ) : (
        <div className='connect'>
          <div className='left'>
            <h1>hello</h1>
            <p>vous n'avez pas de compte<br />lancer-vous</p>
            <button className='toggle2' onClick={toggleInscription}>s'inscrire</button>
          </div>
          <div className='right'>
            <h1>connexion<br />master</h1>
            <form className='form' onSubmit={(e) => {
        e.preventDefault();
        if (!email || !password) {
          setInscriptionMessage('Veuillez remplir tous les champs.');
          return;
        }
        handleLogin();
      }}>
         <button type="submit">Se connecter</button>
        <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
       
      </form>
      {inscriptionMessage && <p>{inscriptionMessage}</p>}
            
  
          
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
*/