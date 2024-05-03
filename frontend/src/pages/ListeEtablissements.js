
/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../navbura/navbar'; // Assurez-vous que le chemin est correct
import '../navbar.css';
import '../pages/ListeEtablisement.css'
function Home() {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get("http://localhost:3002/ListeEtablissements")
            .then(res => {
                setUserData(res.data);
                setError(null);
            })
            .catch(err => {
                console.error('Erreur lors de la récupération des données depuis le serveur :', err);
                setError('Erreur lors de la récupération des données. Veuillez réessayer plus tard.');
            });
    }, []);

    const handleDelete = (nom) => {
        const isConfirmed = window.confirm("Voulez-vous vraiment supprimer cet établissement ?");
        if (isConfirmed) {
            axios.delete(`http://localhost:3002/delete/${nom}`)
                .then(res => {
                    setSuccessMessage("Suppression réussie !");
                    setTimeout(() => setSuccessMessage(null), 3002);
                    // Mettre à jour userData après la suppression
                    setUserData(userData.filter(etablissement => etablissement.nom !== nom));
                })
                .catch(err => {
                    console.error('Erreur lors de la suppression des données depuis le serveur :', err);
                    setError('Erreur lors de la suppression des données. Veuillez réessayer plus tard.');
                });
        }
    };

    return (
        <div className='etabar'>
         
             <Navbar />
            <div >
               
            <div >

                    {error && <p>{error}</p>}
                    {successMessage && <p className="success-message">{successMessage}</p>}
                    <h1>Liste des établissements</h1>
                    <hr/>
                    <table className="table"   >
                    
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nom</th>
                                <th>Gouvernement</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userData && userData.length > 0 ? (
                                userData.map((etablissement, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{etablissement.nom}</td>
                                        <td>{etablissement.gouvernement}</td>
                                        <td>
                                            <button className="button">
                                                <Link to={`/modifieretab/:nom`} className="button-link">Edit</Link>
                                            </button>
                                            <button onClick={() => handleDelete(etablissement.nom)}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4">Aucune donnée disponible</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Home;
*/




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../navbura/navbar'; // Assurez-vous que le chemin est correct
import '../navbar.css';
import '../pages/ListeEtablisement.css';

function Home() {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get("http://localhost:3002/ListeEtablissements")
            .then(res => {
                setUserData(res.data);
                setError(null);
            })
            .catch(err => {
                console.error('Erreur lors de la récupération des données depuis le serveur :', err);
                setError('Erreur lors de la récupération des données. Veuillez réessayer plus tard.');
            });
    }, []);

    const handleDelete = (id, nom) => {
        const isConfirmed = window.confirm("Voulez-vous vraiment supprimer cet établissement ?");
        if (isConfirmed) {
            axios.delete(`http://localhost:3002/ListeEtablissements/${id}`)
                .then(res => {
                    setSuccessMessage("Suppression réussie !");
                    setTimeout(() => setSuccessMessage(null), 3002);
                    // Mettre à jour userData après la suppression
                    setUserData(userData.filter(etablissement => etablissement.id !== id));
                })
                .catch(err => {
                    console.error('Erreur lors de la suppression des données depuis le serveur :', err);
                    setError('Erreur lors de la suppression des données. Veuillez réessayer plus tard.');
                });
        }
    };


    

    return (
        <div className='etabar'>
            <Navbar />
            <div>
                <div>
                    {error && <p>{error}</p>}
                    {successMessage && <p className="success-message">{successMessage}</p>}
                    <h1 style={{color:'black'}}>Liste des établissements</h1>
                    <hr/>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Gouvernement</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userData && userData.length > 0 ? (
                                userData.map((etablissement) => (
                                    <tr key={etablissement.id}>
                                        <td>{etablissement.nom}</td>
                                        <td>{etablissement.gouvernement}</td>
                                        <td>
                                            <button className="button">
                                               <Link to={`/modifieretab/${etablissement.id}`} className="button-link">Edit</Link>
                                            </button>
                                            <button onClick={() => handleDelete(etablissement.id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4">Aucune donnée disponible</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Home;

