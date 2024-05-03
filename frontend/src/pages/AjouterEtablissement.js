/*import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from '../navbura/navbar'; 


function Create() {
    const [values, setValues] = useState({
        nom: '',
        gouvernement: ''
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
        
        // Réinitialiser les erreurs lorsqu'un champ est modifié
        setErrors({ ...errors, [name]: '' });
        setSuccessMessage('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Réinitialiser toutes les erreurs
        setErrors({});
      //  setSuccessMessage('');

        // Validation des champs de saisie
        if (!values.nom.trim() && !values.gouvernement.trim()) {
            setErrors({ allFields: "Veuillez remplir tous les champs." });
            return;
        }

        if (!values.nom.trim()) {
            setErrors({ nom: "Veuillez remplir le champ Nom." });
            return;
        }

        if (!values.gouvernement.trim()) {
            setErrors({ gouvernement: "Veuillez remplir le champ Gouvernement." });
            return;
        }

        axios.post('http://localhost:3002/AjouterEtablissement', values) 
            .then(res => {
                console.log(res);
                setSuccessMessage('Etablissement ajouté avec succès.');
                setValues({ nom: '', gouvernement: '' }); // Réinitialiser les valeurs du formulaire
             
            })
            .catch(err => {
                console.log(err);
                setSuccessMessage('Une erreur est survenue lors de l\'ajout de l\'établissement.');
            });
    };

    return (
        <div className="etabar">
             <Navbar />
             <div >
                <form onSubmit={handleSubmit}  >
                    <h1>Ajouter Etablissement</h1>
                    <hr/>
                    <div className="mb-2">
                        <label htmlFor="nom">Nom</label>
                        <input
                            type="text"
                            id="nom"
                            name="nom"
                            placeholder="Entrez le nom"
                            className="form-control"
                            value={values.nom}
                            onChange={handleInputChange}
                        />
                        {errors.nom && <p className="error-message">{errors.nom}</p>}
                    </div>
                    <div className="mb-2">
                        <label htmlFor="gouvernement">Gouvernement</label>
                        <input
                            type="text"
                            id="gouvernement"
                            name="gouvernement"
                            placeholder="Entrez le Gouvernement"
                            className="form-control"
                            value={values.gouvernement}
                            onChange={handleInputChange}
                        />
                        {errors.gouvernement && <p className="error-message">{errors.gouvernement}</p>}
                    </div>
                    <button type="submit">ajouter</button>

                </form>
                  {errors.allFields && <p className="error-message">{errors.allFields}</p>}
                    {successMessage && <p className="success-message">{successMessage}</p>}
            </div>
        </div>
       
    );
}

export default Create;
*/
/*
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from '../navbura/navbar';
import '../navbar.css';
function Create() {
    const [values, setValues] = useState({
        nom: '',
        gouvernement: ''
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
        
        // Réinitialiser les erreurs lorsqu'un champ est modifié
        setErrors({ ...errors, [name]: '' });
        setSuccessMessage('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Réinitialiser toutes les erreurs
        setErrors({});
        setSuccessMessage('');

        // Validation des champs de saisie
        if (!values.nom.trim() && !values.gouvernement.trim()) {
            setErrors({ allFields: "Veuillez remplir tous les champs." });
            return;
        }

        if (!values.nom.trim()) {
            setErrors({ nom: "Veuillez remplir le champ Nom." });
            return;
        }

        if (!values.gouvernement.trim()) {
            setErrors({ gouvernement: "Veuillez remplir le champ Gouvernement." });
            return;
        }

        axios.post('http://localhost:3002/AjouterEtablissement', values) 
            .then(res => {
                console.log(res);
                setSuccessMessage('Etablissement ajouté avec succès.');
                setValues({ nom: '', gouvernement: '' }); // Réinitialiser les valeurs du formulaire
                
            })
            .catch(err => {
                console.log(err);
                setSuccessMessage('Une erreur est survenue lors de l\'ajout de l\'établissement.');
            });
    };

    return (
        <div>
            <div className="gestbar">
                <Navbar/>
                <form onSubmit={handleSubmit}  >
                    <h1>Ajouter Etablissement</h1>
                    <div className="mb-2">
                        <label htmlFor="nom">Nom</label>
                        <input
                            type="text"
                            id="nom"
                            name="nom"
                            placeholder="Entrez le nom"
                            className="form-control"
                            value={values.nom}
                            onChange={handleInputChange}
                        />
                        {errors.nom && <p className="error-message">{errors.nom}</p>}
                    </div>
                    <div className="mb-2">
                        <label htmlFor="gouvernement">Gouvernement</label>
                        <input
                            type="text"
                            id="gouvernement"
                            name="gouvernement"
                            placeholder="Entrez le Gouvernement"
                            className="form-control"
                            value={values.gouvernement}
                            onChange={handleInputChange}
                        />
                        {errors.gouvernement && <p className="error-message">{errors.gouvernement}</p>}
                    </div>
                    {errors.allFields && <p className="error-message">{errors.allFields}</p>}
                    {successMessage && <p className="success-message">{successMessage}</p>}
                    <button type="submit">ajouter</button>
                </form>
            </div>
        </div>
    );
}

export default Create;*/

import React, { useState } from "react";
import axios from "axios";
import Navbar from '../navbura/navbar'; // Assurez-vous que le chemin est correct
import '../navbar.css';
import '../pages/ListeEtablisement.css';

function MyForm() {
    const [values, setValues] = useState({
        nom: '',
        gouvernement: ''
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Réinitialiser les messages
        setErrors({});
        setSuccessMessage('');

        // Validation des champs de saisie
        if (!values.nom.trim() || !values.gouvernement.trim()) {
            setErrors({ allFields: "Veuillez remplir tous les champs." });
            return;
        }

        axios.post('http://localhost:3002/AjouterEtablissement', values)
            .then(res => {
                console.log(res);
                setSuccessMessage('Etablissement ajouté avec succès.');
                setValues({ nom: '', gouvernement: '' }); // Réinitialiser les valeurs du formulaire
            })
            .catch(err => {
                console.log(err);
                setSuccessMessage('Une erreur est survenue lors de l\'ajout de l\'établissement.');
            });
    };

    return (
        <div className="etabar">
            <Navbar/>
           <div>
            <h1 style={{color:'black'}}>Ajouter Etablissement</h1>
            <hr></hr>
            <hr></hr>
            <form onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="nom"> <strong>Nom: </strong></label>
                    <input type="text" id="nom" name="nom" value={values.nom} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="gouvernement">Gouvernement:</label>
                     <input type="text" id="gouvernement" name="gouvernement" value={values.gouvernement} onChange={handleInputChange} />
                </div>
                <button type="submit">Ajouter</button>
                   {errors.allFields && <p>{errors.allFields}</p>}
                   {successMessage && <p>{successMessage}</p>}
            </form>
            </div>
        </div>
       
    );
}

export default MyForm;
