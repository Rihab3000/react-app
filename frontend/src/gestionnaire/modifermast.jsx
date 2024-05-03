import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../navbura/navbar'; // Assurez-vous que le chemin est correct
import '../navbar.css';
//import'./modifiermastere.css';

function ModifierMastere() {
    const { id } = useParams();
    const [mastere, setMastere] = useState(null);
    const [nom, setNom] = useState('');
    const [dateOuverture, setDateOuverture] = useState('');
    const [dateCloture, setDateCloture] = useState('');
    const [details, setDetails] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    useEffect(() => {
        const fetchMastereData = async () => {
            try {
                const response = await axios.get(`http://localhost:3002/ListeMastere`);
                const allMastere = response.data;
                const mastereToUpdate = allMastere.find(mast => mast.id === parseInt(id));
                if (mastereToUpdate) {
                    setMastere(mastereToUpdate);
                    setNom(mastereToUpdate.nom);
                    setDateOuverture(new Date(mastereToUpdate.dateOuverture).toLocaleDateString('fr-FR'));
                    setDateCloture(new Date(mastereToUpdate.dateCloture).toLocaleDateString('fr-FR'));
                    setDetails(mastereToUpdate.details);
                } else {
                    console.error('Mastère non trouvé');
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des données du mastère:', error);
            }
        };
        fetchMastereData();
    }, [id]); // Mettre à jour lorsque l'ID change

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3002/modifiermast/${id}`, { nom: nom, dateOuverture: dateOuverture, dateCloture: dateCloture, details: details });
            setSuccessMessage('Mastère mis à jour avec succès');
            alert('Modification enregistrée avec succès');
        } catch (error) {
            setError('Erreur lors de la mise à jour du mastère');
            console.error('Erreur lors de la mise à jour du mastère:', error);
        }
    };

    if (!mastere) {
        return <div>Chargement en cours...</div>;
    }

    return (
        <div className='navmodif'>
            <Navbar/>
            <div>
            <h1 style={{color:'black'}}>Modifier le mastère <h1 style={{color:'red'}}>{mastere.nom} </h1> </h1>
            <form onSubmit={handleSubmit}>
                <label>Nom :</label>
                <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
                <br />
                <label>Date d'ouverture :</label>
                <input type="text" value={dateOuverture} onChange={(e) => setDateOuverture(e.target.value)} />
                <br />
                <label>Date de clôture :</label>
                <input type="text" value={dateCloture} onChange={(e) => setDateCloture(e.target.value)} />
                <br />
                <label>Détails :</label>
                <textarea value={details} onChange={(e) => setDetails(e.target.value)} />
                <br />
                <button type="submit">Enregistrer</button>
                {error && <p>{error}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>}
              
            </form>
            </div>
        </div>
    );
}

export default ModifierMastere;
