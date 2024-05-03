
/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ModifierEtablissement() {
    const { id } = useParams();
    const [etablissement, setEtablissement] = useState(null);
    const [nom, setNom] = useState('');
    const [gouvernement, setGouvernement] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    useEffect(() => {
        const fetchEtablissementData = async () => {
          try {
            const response = await axios.get(`http://localhost:3002/ListeEtablissements`);
            const allEtablissements = response.data;
            const etablissementToUpdate = allEtablissements.find(eta => eta.id === parseInt(id));
            if (etablissementToUpdate) {
              setEtablissement(etablissementToUpdate);
              setNom(etablissementToUpdate.nom);
              setGouvernement(etablissementToUpdate.gouvernement);
            } else {
              console.error('Etablissement non trouvé');
            }
          } catch (error) {
            console.error('Erreur lors de la récupération des données de l\'établissement:', error);
          }
        };
        fetchEtablissementData();
      }, [id]); // Mettre à jour lorsque l'ID change

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.put(`http://localhost:3002/modifieretab/${id}`, { nom, gouvernement });
          alert('Établissement mis à jour avec succès');
        
        } catch (error) {
          console.error('Erreur lors de la mise à jour de l\'établissement:', error);
          alert('Erreur lors de la mise à jour de l\'établissement');
        }
      };

    if (!etablissement) {
        return <div>Chargement en cours...</div>;
    }

    return (
        <div>
            <h1>Modifier l'établissement {etablissement.nom}</h1>
            <form onSubmit={handleSubmit}>
                <label>ID :</label>
                <input type="text" value={id} readOnly />
                <br />
                <label>Nom :</label>
                <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
                <br />
                <label>Gouvernement :</label>
                <input type="text" value={gouvernement} onChange={(e) => setGouvernement(e.target.value)} />
                <br />
                <button type="submit">Enregistrer</button>
            </form>
            {error && <p>{error}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
    );
}

export default ModifierEtablissement;
*/
/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../navbura/navbar'; // Assurez-vous que le chemin est correct
import '../navbar.css';
import'./modifieretab.css';

function ModifierEtablissement() {
    const { id } = useParams();
    const [etablissement, setEtablissement] = useState(null);
    const [nom, setNom] = useState('');
    const [gouvernement, setGouvernement] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    useEffect(() => {
        const fetchEtablissementData = async () => {
            try {
                const response = await axios.get(`http://localhost:3002/ListeEtablissements`);
                const allEtablissements = response.data;
                const etablissementToUpdate = allEtablissements.find(eta => eta.id === parseInt(id));
                if (etablissementToUpdate) {
                    setEtablissement(etablissementToUpdate);
                    setNom(etablissementToUpdate.nom);
                    setGouvernement(etablissementToUpdate.gouvernement);
                } else {
                    console.error('Etablissement non trouvé');
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des données de l\'établissement:', error);
            }
        };
        fetchEtablissementData();
    }, [id]); // Mettre à jour lorsque l'ID change

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3002/modifieretab/${id}`, { nom: nom, gouvernement: gouvernement });
            setSuccessMessage('Établissement mis à jour avec succès');
        } catch (error) {
            setError('Erreur lors de la mise à jour de l\'établissement');
            console.error('Erreur lors de la mise à jour de l\'établissement:', error);
        }
    };

    if (!etablissement) {
        return <div>Chargement en cours...</div>;
    }

    return (
        <div className='navmodif'>
            <Navbar/>
            <div>
            <h1>Modifier l'établissement {etablissement.nom}</h1>
            <form onSubmit={handleSubmit}>
                <label>Nom :</label>
                <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
                <br />
                <label>Gouvernement :</label>
                <input type="text" value={gouvernement} onChange={(e) => setGouvernement(e.target.value)} />
                <br />
                <button type="submit">Enregistrer</button>

                {error && <p>{error}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
            </form>
            </div>
            {error && <p>{error}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
    );
}

export default ModifierEtablissement;*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../navbura/navbar'; // Assurez-vous que le chemin est correct
import '../navbar.css';
import'./modifieretab.css';

function ModifierEtablissement() {
    const { id } = useParams();
    const [etablissement, setEtablissement] = useState(null);
    const [nom, setNom] = useState('');
    const [gouvernement, setGouvernement] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    useEffect(() => {
        const fetchEtablissementData = async () => {
            try {
                const response = await axios.get(`http://localhost:3002/ListeEtablissements`);
                const allEtablissements = response.data;
                const etablissementToUpdate = allEtablissements.find(eta => eta.id === parseInt(id));
                if (etablissementToUpdate) {
                    setEtablissement(etablissementToUpdate);
                    setNom(etablissementToUpdate.nom);
                    setGouvernement(etablissementToUpdate.gouvernement);
                } else {
                    console.error('Etablissement non trouvé');
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des données de l\'établissement:', error);
            }
        };
        fetchEtablissementData();
    }, [id]); // Mettre à jour lorsque l'ID change

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3002/modifieretab/${id}`, { nom: nom, gouvernement: gouvernement });
            setSuccessMessage('Établissement mis à jour avec succès');
            alert('Modification enregistrer avec succee');
        } catch (error) {
            setError('Erreur lors de la mise à jour de l\'établissement');
            console.error('Erreur lors de la mise à jour de l\'établissement:', error);
        }
    };

    if (!etablissement) {
        return <div>Chargement en cours...</div>;
    }

    return (
        <div className='navmodif'>
            <Navbar/>
            <div>
            <h1 style={{color:'black'}}>Modifier l'établissement<h1 style={{color:'red'}}>{etablissement.nom} </h1> </h1>
            <form onSubmit={handleSubmit}>
                <label>Nom :</label>
                <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
                <br />
                <label>Gouvernement :</label>
                <input type="text" value={gouvernement} onChange={(e) => setGouvernement(e.target.value)} />
                <br />
                <button type="submit">Enregistrer</button>
                {error && <p>{error}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>}
              
            </form>
            </div>
        </div>
    );
}

export default ModifierEtablissement;
