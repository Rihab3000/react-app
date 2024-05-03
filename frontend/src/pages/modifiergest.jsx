
/*
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './gestionnaire.css';
import Navbar from "../navbura/navbargest";

function Modifier() {
   
    const { cin } = useParams();

    const [values, setValues] = useState({
        cin: '',
        nom: '',
        prenom: '',
        email: '',
        password: '',
        numtel: '',
        etablissement: ''
    });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:3002/modifier/${cin}`)
            .then(res => {
                const { cin, nom, prenom, email, password, numtel, etablissement } = res.data;
                setValues({
                    cin: cin,
                    nom: nom,
                    prenom: prenom,
                    email: email,
                    password: password,
                    numtel: numtel,
                    etablissement: etablissement
                });
            })
            .catch(err => console.log(err));
    }, [cin]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!values.nom || !values.prenom || !values.email ||!values.password  ||  !values.numtel || !values.etablissement) {
            setError('Veuillez remplir tous les champs.');
            return;
        }

        axios.put(`http://localhost:3002/modifier/${cin}`, values)
            .then(res => {
                console.log("Données modifiées avec succès :", res.data);
                setSuccess(true);
                setError(null);
            })
            .catch(err => {
                console.error("Erreur lors de la modification des données :", err);
                setError("Une erreur s'est produite lors de la modification des données");
                setSuccess(false);
            });
    };

 
    return (
        <div>
            <Navbar/>
           
            <form className="form" onSubmit={handleSubmit} >
                                   <h1>Modifier Données</h1>
                                  <hr></hr>
                <table>
                    <tbody>
                        <tr>
                            <td>Nom:</td>
                            <td><input type="text" name="nom" value={values.nom} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Prénom:</td>
                            <td><input type="text" name="prenom" value={values.prenom} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td><input type="email" name="email" value={values.email} onChange={handleChange} /></td>
                        </tr>
                       
                        <tr>
                            <td>Numéro de téléphone:</td>
                            <td><input type="text" name="numtel" value={values.numtel} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td>mot de passe </td>
                            <td><input type="password" name="password" value={values.password} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Établissement:</td>
                            <td><input type="text" name="etablissement" value={values.etablissement} onChange={handleChange} /></td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit">Modifier</button>
            </form>
            {success && <p className="success-message" style={{ color: 'green' }}>Données modifiées avec succès</p>}
            {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default Modifier;
*/
/*
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Modifier() {
    const { cin } = useParams();

    const [values, setValues] = useState({
        cin: '',
        nom: '',
        prenom: '',
        email: '',
        numtel: '',
        etablissement: ''
    });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:3002/modifiergest/${cin}`)
            .then(res => {
                const { cin, nom, prenom, email, numtel, etablissement } = res.data[0];
                setValues({
                    cin: cin,
                    nom: nom,
                    prenom: prenom,
                    email: email,
                    numtel: numtel,
                    etablissement: etablissement
                });
            })
            .catch(err => console.log(err));
    }, [cin]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

      if (!values.nom || !values.prenom || !values.email || !values.numtel || !values.etablissement) {
            setError('Veuillez remplir tous les champs.');
            return;
        }

        axios.put(`http://localhost:3002/modifier/${cin}`, values)
            .then(res => {
                console.log("Données modifiées avec succès :", res.data);
                setSuccess(true);
                setError(null);
            })
            .catch(err => {
                console.error("Erreur lors de la modification des données :", err);
                setError("Une erreur s'est produite lors de la modification des données");
                setSuccess(false);
            });
    };

    return (
        <div>
            <h1>Modifier Données</h1>
            <form className="form" onSubmit={handleSubmit} >
               
                <label>Nom:</label>
                <input type="text" name="nom" value={values.nom} onChange={handleChange} /><br/>
                <label>Prénom:</label>
                <input type="text" name="prenom" value={values.prenom} onChange={handleChange} /><br/>
                <label>Email:</label>
                <input type="email" name="email" value={values.email} onChange={handleChange} /><br/>
                <label>Numéro de téléphone:</label>
                <input type="text" name="numtel" value={values.numtel} onChange={handleChange} /><br/>
                <label>Établissement:</label>
                <input type="text" name="etablissement" value={values.etablissement} onChange={handleChange} /><br/>
                <button type="submit">Modifier</button>
            </form>
            {success && <p style={{ color: 'green' }}>Données modifiées avec succès</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default Modifier;
*/ 



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../navbura/navbar'; // Assurez-vous que le chemin est correct
import '../navbar.css';
import'./modifiergest.css';

function ModifierUtilisateur() {
  const { id } = useParams(); // Récupère l'ID de l'URL
  const [userData, setUserData] = useState({
    nom: '',
    prenom: '',
    email: '',
    numtel: '',
    etablissement: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3002/modifiergest/${id}`, userData);
      alert('Utilisateur mis à jour avec succès');
    
    } catch (error) {
      console.error('Erreur lors de la mise à jour de l\'utilisateur:', error);
      alert('Erreur lors de la mise à jour de l\'utilisateur');
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3002/ListeGestionnaire`);
        const allUsers = response.data;
        const userToUpdate = allUsers.find(user => user.id === parseInt(id)); // Filtrer l'utilisateur par ID
        if (userToUpdate) {
          setUserData(userToUpdate);
        } else {
          console.error('Utilisateur non trouvé');
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données de l\'utilisateur:', error);
      }
    };
    fetchUserData();
  }, [id]);

  return (
    <div className='navmodifgest'>
        <Navbar/>
      <div>
      <h1  style={{color:'black'}}>Modifier Gestionnaire : <h1 style={{color:'red'}}> {userData.nom} {userData.prenom} </h1></h1>
      <form onSubmit={handleSubmit} className='modifier'>
        <div>
          <label>Nom:</label>
          <input type="text" name="nom" value={userData.nom} onChange={handleChange}/>
        </div>
        <div>
          <label>Prénom:</label>
          <input type="text" name="prenom" value={userData.prenom} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={userData.email} onChange={handleChange}/>
        </div>
        <div>
          <label>Numéro de téléphone:</label>
          <input type="text" name="numtel" value={userData.numtel} onChange={handleChange}  />
        </div>
        <div>
          <label>Etablissement:</label>
          <input type="text" name="etablissement" value={userData.etablissement} onChange={handleChange}/>
        </div>
        <button type="submit" >Mettre à jour</button>
      </form>
      </div>
    </div>
  );
}

export default ModifierUtilisateur;


