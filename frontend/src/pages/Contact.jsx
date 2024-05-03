// Contact.jsx
/*import React from 'react';

const Contact = () => {
    return (
        <div>
            <h1>Contact</h1>
            <p>Contact us at contact@example.com</p>
        </div>
    );
};

export default Contact;
*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BsDatabaseFillLock } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { IoPersonAddOutline } from "react-icons/io5";
import { RiFileAddLine } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
const Modifier1Frontend = () => {
  const [modifier1s, setModifier1s] = useState([]);
  const [userToEdit, setUserToEdit] = useState({
    id: '',
    nom: '',
    prenom: '',
    mail: '',
    etablissement: '',
    foncton: '',
    grade: '',
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('http://localhost:4001/modifier1')
      .then(response => {
        setModifier1s(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserToEdit(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleUpdateUser = () => {
    axios.put('http://localhost:4001/modifier1/${userToEdit.id}', userToEdit)
      .then(response => {
        alert(response.data.message);
        fetchData();
        setUserToEdit({
          id: '',
          nom: '',
          prenom: '',
          mail: '',
          etablissement: '',
          foncton: '',
          grade: '',
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
      axios.delete('http://localhost:4001/modifier1/${id}')
        .then(response => {
          alert(response.data.message);
          fetchData();
        })
        .catch(error => {
          console.error("Error deleting user:", error);
        });
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value || '';
    setSearchTerm(value.toLowerCase());
  };

  
  const filteredModifier1s = modifier1s.filter(modifier1 => {
    return modifier1.nom.toLowerCase().includes(searchTerm);
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="logo"> Université de Jendouba</div>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <Link to="/admin">
              <span className="icon">
                <RiFileAddLine />
              </span>
              <span className="link-text">Ajout d'evenement</span>
            </Link>
          </li>
          <li>
            <Link to="/participant">
              <span className="icon">
                <IoPersonAddOutline />
              </span>
              <span className="link-text">Ajout du participant</span>
            </Link>
          </li>
          <li>
            <Link to="/modifier">
              <span className="icon">
                <BsDatabaseFillLock />
              </span>
              <span className="link-text">Data Base 1</span>
            </Link>
          </li>
          <li>
          <Link to="#" onClick={toggleSettings}>
            <span className="icon">
              <IoSettingsSharp />
            </span>
            <span className="link-text"> </span>
          </Link>
          {isSettingsOpen && (
            <div className="settings-dropdown">
              <Link to="http://localhost:3000/" className="logout-link">
                Logout
              </Link>
            </div>
          )}
        </li>
        </ul>
        <div className="menu-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
      <body>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        {isEditing ? (
          <div>
            <form>
              <label>Nom:</label>
              <input type="text" name="nom" value={userToEdit.nom} onChange={handleInputChange} /><br />
              <label>Prénom:</label>
              <input type="text" name="prenom" value={userToEdit.prenom} onChange={handleInputChange} /><br />
              <label>Email:</label>
              <input type="text" name="mail" value={userToEdit.mail} onChange={handleInputChange} /><br />
              <label>Etablissement:</label>
              <input type="text" name="etablissement" value={userToEdit.etablissement} onChange={handleInputChange} /><br />
              <label>Fonction:</label>
              <input type="text" name="foncton" value={userToEdit.foncton} onChange={handleInputChange} /><br />
              <label>Grade:</label>
              <input type="text" name="grade" value={userToEdit.grade} onChange={handleInputChange} /><br />
              <button type="button" onClick={handleUpdateUser}>Update</button>
            </form>
          </div>
        ) : (
          <table border={1}>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Mail</th>
                <th>Etablissement</th>
                <th>Fonction</th>
                <th>Grade</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredModifier1s.map((data) => (
                <tr key={data.id}>
                  <td>{data.nom}</td>
                  <td>{data.prenom}</td>
                  <td>{data.mail}</td>
                  <td>{data.etablissement}</td>
                  <td>{data.foncton}</td>
                  <td>{data.grade}</td>
                  <td>
                    <button type="button" onClick={() => handleEditUser(data)}>Edit</button>
                    <button type="button" onClick={() => handleDeleteUser(data.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </body>
    </div>
  );
};

export default Modifier1Frontend;