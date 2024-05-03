/*
import React, { useState } from 'react';
import axios from 'axios';
import './gestionnaire.css';


const AjouterGestionnaire = () => {
    const [formData, setFormData] = useState({
        cin: '',
        nom: '',
        prenom: '',
        email: '',
        password: '',
        numtel: '',
        etablissement: ''
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { cin, nom, prenom, email, password, numtel, etablissement } = formData;

        if (!cin || !nom || !prenom || !email || !password  || !numtel || !etablissement) {
            setError('Veuillez remplir tous les champs.');
            return;
        }

        if (cin.length !== 8) {
            setError('Le CIN doit contenir exactement 8 chiffres.');
            return;
        }

        

        if (numtel.length !== 8 || isNaN(parseInt(numtel))) {
            setError('Le numéro de téléphone doit contenir exactement 8 chiffres.');
            return;
        }
       
        axios.post('http://localhost:3002/AjouterGestionnaire', {
            cin, nom, prenom, email, password, numtel, etablissement
        })
        .then(response => {
            setMessage('Gestionnaire ajouté avec succès !');
            setError('');
            // Réinitialiser le formulaire ici si nécessaire
        })
        .catch(error => {
            console.error('Erreur lors de l\'envoi du formulaire :', error);
            setMessage('Une erreur s\'est produite lors de l\'envoi du formulaire.');
        });
    }
    return (
<div>
    <navbar/>
        
        <form  style={{ backgroundColor: 'rgba(53, 140, 226, 0.5)' }}>
            <h1>Ajouter Gestionnaire </h1>
            <hr />
            <table>
                <tbody>
                    <tr>
                        <td>
                            <label>CIN:</label>
                            <input type="text" name="cin" onChange={handleChange} />
                        </td>
                        <td>
                            <label>Nom:</label>
                            <input type="text" name="nom" onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Prénom:</label>
                            <input type="text" name="prenom" onChange={handleChange} />
                        </td>
                        <td>
                            <label>Email:</label>
                            <input type="email" name="email" onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Mot de passe:</label>
                            <input type="password" name="password" onChange={handleChange} />
                        </td>
                        
                    </tr>
                    <tr>
                        <td>
                            <label>Numéro de téléphone:</label>
                            <input type="text" name="numtel" onChange={handleChange} />
                        </td>
                        <td>
                            <label>Établissement:</label>
                            <input type="text" name="etablissement" onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <button type="submit" onClick={handleSubmit}>Ajouter</button>
                        </td>
                    </tr>
                </tbody>
               
            </table>
            <div className="message-container">
            {error && <span className="error-message">{error}</span>}
        {message && <span className="success-message">{message}</span>}
        </div>
        </form>
        </div>
       
    );
};

export default AjouterGestionnaire;*/


/*

import React, { useState, useEffect } from 'react'; // Ajoutez useEffect ici
import axios from 'axios';

import './gestionnaire.css';
import Navbar from '../navbura/navbar'; // Assurez-vous que le chemin est correct
import '../navbar.css';

const AjouterGestionnaire = () => {
    const [formData, setFormData] = useState({
        cin: '',
        nom: '',
        prenom: '',
        email: '',
        password: '',
        numtel: '',
        etablissement: ''
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [etablissements, setEtablissements] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:3002/AjouterGestionnaire')
            .then(response => {
                setEtablissements(response.data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des établissements:', error);
                setError('Erreur lors de la récupération des établissements');
            });
    }, []);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { cin, nom, prenom, email, password, numtel, etablissement } = formData;

        if (!cin || !nom || !prenom || !email || !password  || !numtel || !etablissement) {
            setError('Veuillez remplir tous les champs.');
            return;
        }

        if (cin.length !== 8) {
            setError('Le CIN doit contenir exactement 8 chiffres.');
            return;
        }

        if (numtel.length !== 8 || isNaN(parseInt(numtel))) {
            setError('Le numéro de téléphone doit contenir exactement 8 chiffres.');
            return;
        }

       /* axios.post(`http://localhost:3002/checkcin/${cin}`).then(response => {
            if (response.data.exists) {
                setMessage('Ce CIN est déjà inscrit.');
            } else {*/

     /*axios.post('http://localhost:3002/AjouterGestionnaire', {
                    cin, nom, prenom, email, password, numtel, etablissement
                })
                .then(response => {
                    setMessage('Gestionnaire ajouté avec succès !');
                    setError('');
                    
                })
                .catch(error => {
                    console.error('Erreur lors de l\'envoi du formulaire :', error);
                    setMessage('Une erreur s\'est produite lors de l\'envoi du formulaire.');
                });
            }
        });
    });


    return (
        <div className='gestbar'>
            <Navbar /> 
           
        
        <form>
            <h2>Ajouter Gestionnaire</h2>
            <hr></hr>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <label>CIN:</label>
                            <input type="text" name="cin" onChange={handleChange} />
                        </td>
                        <td>
                            <label>Nom:</label>
                            <input type="text" name="nom" onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Prénom:</label>
                            <input type="text" name="prenom" onChange={handleChange} />
                        </td>
                        <td>
                            <label>Email:</label>
                            <input type="email" name="email" onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Mot de passe:</label>
                            <input type="password" name="password" onChange={handleChange} />
                        </td>
                        
                    </tr>
                    <tr>
                        <td>
                            <label>Numéro de téléphone:</label>
                            <input type="text" name="numtel" onChange={handleChange} />
                        </td>
                        <td>
                            <label>Établissement:</label><br/>
                            <select name="etablissement" onChange={handleChange} value={formData.etablissement}>
                                <option value=""></option>
                                {etablissements.map(etablissement => (
                                    <option key={etablissement.id} value={etablissement.nom}>{etablissement.nom}</option>
                                ))}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <button type="submit" onClick={handleSubmit}>Ajouter</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {message && <p style={{ color: 'green' }}>{message}</p>}
        </form>
        </div>
    );


export default AjouterGestionnaire;*/



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../navbura/navbar'; // Assurez-vous que le chemin est correct
import '../navbar.css';
import'./gestionnaire.css';

const AjouterGestionnaire = () => {
    const [formData, setFormData] = useState({
        cin: '',
        nom: '',
        prenom: '',
        email: '',
        password: '',
        numtel: '',
        etablissement: ''
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [etablissements, setEtablissements] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3002/AjouterGestionnaire')
            .then(response => {
                setEtablissements(response.data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des établissements:', error);
                setError('Erreur lors de la récupération des établissements');
            });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { cin, nom, prenom, email, password, numtel, etablissement } = formData;

        if (!cin || !nom || !prenom || !email || !password || !numtel || !etablissement) {
            setError('Veuillez remplir tous les champs!!!');
            return;
        }

        if (cin.length !== 8) {
            setError('Le CIN doit contenir exactement 8 chiffres.');
            return;
        }

        if (numtel.length !== 8 || isNaN(parseInt(numtel))) {
            setError('Le numéro de téléphone doit contenir exactement 8 chiffres.');
            return;
        }

        axios.post('http://localhost:3002/AjouterGestionnaire', {
            cin, nom, prenom, email, password, numtel, etablissement
        })
            .then(response => {
                setMessage('Gestionnaire ajouté avec succès !');
                setError('');
                setFormData({
                    cin: '',
                    nom: '',
                    prenom: '',
                    email: '',
                    password: '',
                    numtel: '',
                    etablissement: ''
                });
            })
            .catch(error => {
                console.error('Erreur lors de l\'envoi du formulaire :', error);
                setMessage('Une erreur s\'est produite lors de l\'envoi du formulaire.');
            });
    };

    return (
        <div className='gestbar'>
            <Navbar />
            <form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
                {message &&  <p style={{ color: 'green' }}>{message}</p> }
                <h2>Ajouter Gestionnaire</h2>
                <hr></hr>
                <table className='tabgest'>
                    <tbody>
                        <tr>
                            <td>
                                <label>CIN:</label>
                                <input type="text" name="cin" value={formData.cin} onChange={handleChange} />
                            </td>
                            <td>
                                <label>Nom:</label>
                                <input type="text" name="nom" value={formData.nom} onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Prénom:</label>
                                <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} />
                            </td>
                            <td>
                                <label>Email:</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Mot de passe:</label>
                                <input type="password" name="password" value={formData.password} onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Numéro de téléphone:</label>
                                <input type="text" name="numtel" value={formData.numtel} onChange={handleChange} />
                            </td>
                            <td>
                                <label>Établissement:</label><br />
                                <select name="etablissement" value={formData.etablissement} onChange={handleChange}>
                                    <option value="">choisir une etablissement</option>
                                    {etablissements.map(etablissement => (
                                        <option key={etablissement.id} value={etablissement.nom}>{etablissement.nom}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button type="submit" onClick={handleSubmit}>Ajouter</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
    
            </form>
        </div>
    );
};

export default AjouterGestionnaire;

