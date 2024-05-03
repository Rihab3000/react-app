//condidat

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UsersList = () => {
  const [condidat, setcondidat] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3005/Index')
      .then(response => {
        setcondidat(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des utilisateurs :', error);
      });
  }, []);

  return (
    <div>
    
      <ul>
        {condidat.map(cdt => (
          <li key={cdt.cin}>{cdt.nom} {cdt.prenom} {cdt.email} {cdt.tephone}   </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;






//users
/*

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3005/Index')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des utilisateurs :', error);
      });
  }, []);

  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.nom} </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
*/
