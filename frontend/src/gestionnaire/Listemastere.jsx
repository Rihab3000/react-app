
//dernieer code
/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Navbargest from '../navbura/navbargest';
import '../navbar.css';
import '../gestionnaire/Listemastere.css';


function Home() {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get("http://localhost:3002/Listemastere")
            .then(res => {
                setUserData(res.data);
                setError(null);
            })
            .catch(err => {
                console.error('Erreur lors de la récupération des données depuis le serveur :', err);
                setError('Erreur lors de la récupération des données. Veuillez réessayer plus tard.');
            });
    }, []);

    const handleDelete = (id) => {
        const isConfirmed = window.confirm("Voulez-vous vraiment supprimer ce mastere ?");
        if (isConfirmed) {
           axios.delete(`http://localhost:3002/ListeGestionnaire/${id}`)

                .then(res => {
                    setSuccessMessage("Suppression réussie !");
                    setTimeout(() => setSuccessMessage(null), 3002);
                    // Mettre à jour userData après la suppression
                    setUserData(userData.filter(mastere => mastere.id !== id));
                })
                .catch(err => {
                    console.error('Erreur lors de la suppression du mastere :', err);
                    setError('Erreur lors de la suppression du mastere. Veuillez réessayer plus tard.');
                });
        }
    };

    return (
        <div className='liste'>
            <Navbargest/>
         
        
                
                    {error && <p>{error}</p>}
                    {successMessage && <p className="success-message">{successMessage}</p>}
                    <form  className='formulaire'>
                 <h1> Liste Mastere</h1>
                    <table className="table">

                        <thead>
                            <tr><th>Id</th>
                                <th>Nom</th>
                                <th>Date d'ouverture</th>
                                <th>Date de clôture</th>
                                <th>Détails</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userData && userData.length > 0 ? ( userData.map((mastere, index) => (
                                    <tr key={index}>
                                        <td>{mastere.id}</td>
                                        <td>{mastere.nom}</td>
                                        <td>{mastere.dateOuverture}</td>
                                        <td>{mastere.dateCloture}</td>
                                        <td>{mastere.details}</td>
                                        <td>
                        <button className="button">
                        <Link to={`/Update_mastere/${mastere.id}`} className="button-link">Edit</Link>
                        </button>
                        <button onClick={() => handleDelete(mastere.id)}>Delete</button>
                        </td>
                        </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6">Aucune donnée disponible</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    </form>
          
        </div>
    );
}

export default Home;

*/





/*

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MastereList = () => {
  const [mastereList, setMastereList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3002/Listemastere');
        setMastereList(response.data || []);
      } catch (error) {
        console.error('Erreur lors de la récupération des mastères :', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Liste des mastères par établissement</h1>
      {mastereList.map((etablissement) => (
        <div key={etablissement.etablissement}>
          <h2>{etablissement.etablissement}</h2>
          <ul>
            {etablissement.mastere_list.split(', ').map((nom) => (
              <li key={nom}>{nom}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MastereList;
*/


/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../gestionnaire/Listemastere.css';

const MastereList = () => {
  const [mastereList, setMastereList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3002/Listemastere');
        setMastereList(response.data || []);
      } catch (error) {
        console.error('Erreur lors de la récupération des mastères :', error);
      }
    };
    fetchData();
  }, []);

  const handleDetails = (mastereId) => {
    console.log(`Voir les détails du mastère avec l'ID ${mastereId}`);
    // Logique pour gérer l'action "détails"
  };

  const handlePostuler = (mastereId) => {
    console.log(`Postuler pour le mastère avec l'ID ${mastereId}`);
    // Logique pour gérer l'action "postuler"
  };

  return (
    <div>
      <h1>Liste des mastères par établissement</h1>
      <table>
        <thead>
          <tr>
            <th><strong>Établissement</strong></th>
            <th><strong>Mastère</strong></th>
            <th><strong>Actions</strong></th>
          </tr>
        </thead>
        <tbody>
          {mastereList.map((etablissement, index) => (
            <tr key={index}>
              <td>{etablissement.etablissement}</td>
              <td>
                <ul>
                  {etablissement.mastere_list.split(', ').map((mastere, index) => (
                    <li key={index}>{mastere}</li>
                  ))}
                </ul>
              </td>
              <td>
                <button onClick={() => handleDetails(etablissement.id)}>Détails</button>
                <button onClick={() => handlePostuler(etablissement.id)}>Postuler</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MastereList;*/
/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MastereList = () => {
  const [mastereList, setMastereList] = useState([]);
  const [selectedEtablissement, setSelectedEtablissement] = useState('');
  const [selectedMastere, setSelectedMastere] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3002/Listemastere');
        setMastereList(response.data || []);
      } catch (error) {
        console.error('Erreur lors de la récupération des mastères :', error);
      }
    };
    fetchData();
  }, []);

  const handleEtablissementSelect = (etablissement) => {
    setSelectedEtablissement(etablissement);
    setSelectedMastere(null);
  };

  const handleMastereSelect = (mastere) => {
    setSelectedMastere(mastere);
  };

  return (
    <div>
      <h1>Liste des mastères par établissement</h1>
      <ul>
        {mastereList.map((item, index) => (
          <li key={index}>
            <button onClick={() => handleEtablissementSelect(item.etablissement)}>
              Afficher les mastères de {item.etablissement}
            </button>
          </li>
        ))}
      </ul>
      {selectedEtablissement && (
        <div>
          <h2>Mastères de {selectedEtablissement}</h2>
          <table>
            <thead>
              <tr>
                <th>Nom du mastère</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {mastereList
                .find((item) => item.etablissement === selectedEtablissement)
                .mastere_list.split(', ')
                .map((mastere, index) => (
                  <tr key={index}>
                    <td>{mastere}</td>
                    <td>
                      <button onClick={() => handleMastereSelect(mastere)}>Détails</button>
                      <button>Postuler</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
      {selectedMastere && (
        <div>
          <h3>Détails du mastère {selectedMastere}</h3>
         
        </div>
      )}
    </div>
  );
};

export default MastereList;*/


/*

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import Navbar from '../navbura/navbar';
import './Listemastere.css';
import { Link } from 'react-router-dom';

const ListeMastere = () => {
  const [mastereList, setMastereList] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = Cookies.get('token');
    if (!token) {
      setError('Token non trouvé.');
      setLoading(false);
      return;
    }

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    axios.get('http://localhost:3002/Listemastere')
      .then(response => {
        setMastereList(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Une erreur s\'est produite lors de la récupération des mastères.');
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    // Logique pour supprimer un mastère avec l'identifiant 'id'
    console.log(`Suppression du mastère avec l'ID ${id}`);
  };

  const handleEdit = (id) => {
    // Logique pour modifier un mastère avec l'identifiant 'id'
    console.log(`Modification du mastère avec l'ID ${id}`);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='navmast'>
      <Navbar/>
    <div>
      <h1>Liste des Mastères</h1>
      {error && <p>{error}</p>}
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Date d'ouverture</th>
            <th>Date de clôture</th>
            <th>Détails</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mastereList.map(mastere => (
            <tr key={mastere.id}>
              <td>{mastere.nom}</td>
              <td>{mastere.dateOuverture}</td>
              <td>{mastere.dateCloture}</td>
              <td>{mastere.details}</td>
              <td>
                <Link to='/modifiermast' onClick={() => handleEdit(mastere.id)}>Modifier</Link>
                <button onClick={() => handleDelete(mastere.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default ListeMastere;
*/
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import Navbar from '../navbura/navbar';
import './Listemastere.css';
import { Link } from 'react-router-dom';

const ListeMastere = () => {
  const [mastereList, setMastereList] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = Cookies.get('token');
    if (!token) {
      setError('Token non trouvé.');
      setLoading(false);
      return;
    }

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    axios.get('http://localhost:3002/Listemastere')
      .then(response => {
        setMastereList(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Une erreur s\'est produite lors de la récupération des mastères.');
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    // Logique pour supprimer un mastère avec l'identifiant 'id'
    console.log(`Suppression du mastère avec l'ID ${id}`);
  };

  const handleEdit = (id) => {
    // Rediriger vers la page de modification du mastère avec l'identifiant 'id'
    // Utilisez une route spécifique pour la modification, par exemple '/modifiermast/:id'
    // Exemple : history.push(`/modifiermast/${id}`);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='navmast'>
      <Navbar/>
      <div>
        <h1>Liste des Mastères</h1>
        {error && <p>{error}</p>}
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Date d'ouverture</th>
              <th>Date de clôture</th>
              <th>Détails</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {mastereList.map(mastere => (
              <tr key={mastere.id}>
                <td>{mastere.nom}</td>
                <td>{mastere.dateOuverture}</td>
                <td>{mastere.dateCloture}</td>
                <td>{mastere.details}</td>
                <td>
                  <Link to={`/modifiermast/${mastere.id}`}>Modifier</Link>
                  <button onClick={() => handleDelete(mastere.id)}>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListeMastere;
