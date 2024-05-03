/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ListeGestionnaires.css';
import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import Navbar from '../navbura/navbar'; // Assurez-vous que le chemin est correct
import '../navbar.css';




const ListeGestionnaire = () => {
    const [userData, setUserData] = useState([]);

    const [successMessage, setSuccessMessage] = useState(null);
    
    const [error, setError] = useState(null);
    

    useEffect(() => {
        fechData();
    }, []);

    const fechData = async () => {
        try {
            const res = await axios.get("http://localhost:3002/ListeGestionnaire");
            setUserData(res.data);
        } catch (err) {
            console.log("erreur", err);
        }
    }
  
    
    const handleDelete = (cin) => {
        const isConfirmed = window.confirm("Voulez-vous vraiment supprimer ce gestionnaire ?");
        if (isConfirmed) {
            axios.delete(`http://localhost:3002/delete/${cin}`)
                .then(res => {
                    setSuccessMessage("Suppression réussie !");
                    setTimeout(() => setSuccessMessage(null), 3002);
                    // Mettre à jour userData après la suppression
                    setUserData(userData.filter(gestionnaire => gestionnaire.cin !== cin));
                })
                .catch(err => {
                    console.error('Erreur lors de la suppression des données depuis le serveur :', err);
                    setError('Erreur lors de la suppression des données. Veuillez réessayer plus tard.');
                });
        }
    };

    return (
        <div  >
            <Navbar/>
         
            <h1> liste des gestionnaires</h1>
            <div  style={{ overflowY: 'auto', overflowX: 'hidden', maxHeight: '500px' , marginRight:'50px'}} className='gestbar'>
                <table className='table'>
                    <thead>
                    <tr>
                            <th>ID</th>
                            <th>CIN</th>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>N° Tel</th>
                            <th>Etablissement</th>
                            <th colSpan={2}>  Actions</th>

                            
                    </tr>
                    </thead>
                    <tbody>
                        {
                            userData.map((user, i) => {
                                return (
                                    <tr key={i}  >
                                        <td>{i + 1}</td>
                                        <td>{user.cin}</td>
                                        <td>{user.nom}</td>
                                        <td>{user.prenom}</td>
                                        <td>{user.numtel}</td>
                                        <td>{user.etablissement}</td>
                                        <div className='btn'>
                                        <td>
                                 <Link to={`/modifiergest/${user.cin}`}><CiEdit style={{ color: 'green' }}/></Link>
                                        <button onClick={() => handleDelete(user.cin)}>Delete</button>

                                        </td>
                                        </div>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
               
            </div>
           
        </div>
    );
};

export default ListeGestionnaire;
*/


/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [userToEdit, setUserToEdit] = useState({
    id: '',
    nom: '',
    prenom: '',
    email: '',
    numtelephone: '',
    etablissement: ''
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('http://localhost:3002/ListeGestionnaire')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des utilisateurs :', error);
      });
  };

  const handleUpdateUser = () => {
    axios.put(`http://localhost:3002/modifier1/${userToEdit.id}`, userToEdit)
      .then(response => {
        alert(response.data.message);
        fetchData();
        setUserToEdit({
          id: '',
          nom: '',
          prenom: '',
          email: '',
          numtelephone: '',
          etablissement: ''
        });
        setIsEditing(false); // Reset edit mode
      })
      .catch(error => {
        console.error("Error updating user:", error);
      });
  };

  const handleEditUser = (data) => {
    setUserToEdit(data);
    setIsEditing(true); // Set edit mode
  };

  const handleDeleteUser = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this user?");
    if (confirmed) {
      axios.delete(`http://localhost:3002/modifier/${id}`)
        .then(response => {
          alert(response.data.message);
          fetchData();
        })
        .catch(error => {
          console.error("Error deleting user:", error);
        });
    }
  };

  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.nom} {user.prenom} - {user.mail}
            <button onClick={() => handleEditUser(user)}>Editer</button>
            <button onClick={() => handleDeleteUser(user.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
      {isEditing && (
        <div>
          <h2>Modifier l'utilisateur</h2>
          <input
            type="text"
            value={userToEdit.nom}
            onChange={(e) => setUserToEdit({...userToEdit, nom: e.target.value})}
          />
          <input
            type="text"
            value={userToEdit.prenom}
            onChange={(e) => setUserToEdit({...userToEdit, prenom: e.target.value})}
          />
          <input
            type="text"
            value={userToEdit.mail}
            onChange={(e) => setUserToEdit({...userToEdit, mail: e.target.value})}
          />
          <Link to={`/modifiergest/${userToEdit.id}`}>
            <button onClick={handleUpdateUser}>Mettre à jour</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserList;
*/


/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import'./modifiergest.css';
function Listemastere() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/ListeGestionnaire')
      .then(res => {
       
        setRecords(res.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div className='conteneur'>
 
      <div className='table2'>
      <h1>Liste Gestionnaire</h1>
        <thead>
        <tr>
          <th>ID</th>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Email</th>
          <th>Numéro de téléphone</th>
          <th>Établissement</th>
          <th colSpan={2}>Actions</th>
        </tr>
        </thead>
        <tbody>
          {records.map((record, i) => (
            <tr key={i}>
              <td>{record.id}</td>
              <td>{record.nom}</td>
              <td>{record.prenom}</td>
              <td>{record.email}</td>
              <td>{record.numtel}</td>
              <td>{record.etablissement}</td>
              <td>
              <Link to={`/modifiergest/${record.id}`} className='btn-succes'>Modifier</Link>

  <button type='btn-danger'><Link to="/delete" className='btn-succes'>Supprimer</Link></button>

              </td>
            </tr>
          ))}
        </tbody>
      </div>
    </div>
   
  );
}

export default Listemastere;
*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../navbura/navbar';
//import './modifiergest.css';
import './ListeGestionnaires.css';

function Listemastere() {
  const [records, setRecords] = useState([]);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3002/ListeGestionnaire')
      .then(res => {
        setRecords(res.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setError('Erreur lors du chargement des données. Veuillez réessayer plus tard.');
      });
  }, []);

  const handleDelete = (id) => {
    const isConfirmed = window.confirm("Voulez-vous vraiment supprimer ce gestionnaire ?");
    if (isConfirmed) {
      axios.delete(`http://localhost:3002/ListeGestionnaire/${id}`)
        .then(res => {
          window.alert("Suppression réussie !");
          setTimeout(() => setSuccessMessage(null), 3000);
          // Mettre à jour records après la suppression
          setRecords(prevRecords => prevRecords.filter(record => record.id !== id));
        })
        .catch(err => {
          console.error('Erreur lors de la suppression des données depuis le serveur :', err);
          setError('Erreur lors de la suppression des données. Veuillez réessayer plus tard.');
        });
    }
  };

  return (
    <div className='gestbar'>
      <Navbar/>
      <div className='table2'>
        <h1>Liste Gestionnaire</h1>
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Email</th>
              <th>Numéro de téléphone</th>
              <th>Établissement</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, i) => (
              <tr key={i}>
                <td>{record.nom}</td>
                <td>{record.prenom}</td>
                <td>{record.email}</td>
                <td>{record.numtel}</td>
                <td>{record.etablissement}</td>
                <td>
                  <Link to={`/modifiergest/${record.id}`} className='btn-success'>Modifier</Link>
                  <button className='btn-danger' onClick={() => handleDelete(record.id)}>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {error && <div className='error-message'>{error}</div>}
        {successMessage && <div className='success-message'>{successMessage}</div>}
      </div>
    </div>
  );
}

export default Listemastere;
