

/*
import React, { useEffect } from 'react';
import { RiHomeHeartFill } from "react-icons/ri";
import { IoIosContact } from "react-icons/io";
import { BsList } from "react-icons/bs";
import '../navbar2.css';


function Navbar2() {
  const handleLogout = () => {
    // Supprimer le token d'authentification du stockage local
    localStorage.removeItem('token');
    // Rediriger vers la page de connexion
    window.location.href = '/cnxcdt';
  };
 

  return (
    <div className="navbar2">
     
      <a href="/home"> Espace-Condidature</a>
    <a a href="/authentif"> Espace-Administrative</a> 
      <div className="search-container">
        <input type="text" placeholder="chercher..." name="search" />
      </div>
      <ul className='rrr'>
        <li><a href="/home"><RiHomeHeartFill size='2rem'/></a></li>
        <li><a href="/contact"><IoIosContact size='2rem' /></a></li>
        <li><a href="/cnxcdt" onClick={handleLogout}>Déconnexion</a></li>
       
      </ul>
    </div>
  );
}

export default Navbar2;*/


/*
import React, { useState } from 'react';
import { RiHomeHeartFill } from "react-icons/ri";
import { IoIosContact } from "react-icons/io";
import { BsList } from "react-icons/bs";
import '../navbar2.css';

function Navbar2() {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/cnxcdt';
  };

  return (
    <div className="navbar2">
      <ul className='rrr'>
        <li><a href="/home">Espace Candidature</a></li>
        <li><a href="/authentif">Espace Administration</a></li>
      </ul>
      <div className="search-container">
        <input type="text" placeholder="chercher..." name="search" />
      </div>
      <ul className='rrr'>
        <li><a href="/home"><RiHomeHeartFill size='2rem'/></a></li>
        <li><a href="/contact"><IoIosContact size='2rem' /></a></li>
        <li><a href="/cnxcdt" onClick={handleLogout}>Déconnexion</a></li>
      </ul>
    </div>
  );
}

export default Navbar2;*/

/*
import React, { useState } from 'react';
import { RiHomeHeartFill } from "react-icons/ri";
import { IoIosContact } from "react-icons/io";
import { BsList } from "react-icons/bs";
import '../navbar2.css';
import universite from '../images/universite.png';

function Navbar2() {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/cnxcdt';
  };

  const [activeLink, setActiveLink] = useState(""); // Utilisation de useState ici

  return (
    <div className="navbar2">
      <ul className='rrr'>
        <li><a href="/home" className={activeLink === "/home" ? "active" : ""} onClick={() => setActiveLink("/home")}>Espace Candidature</a></li>
        <li><a href="/authentif" className={activeLink === "/authentif" ? "active" : ""} onClick={() => setActiveLink("/authentif")}>Espace Administration</a></li>
      </ul>
      <div className="search-container">
        <input type="text" placeholder="chercher..." name="search" />
      </div>
      <ul className='rrr'>
        <li><a href="/LoginForm">s'inscrire</a></li>
        <li><a href="/contact">consulter</a></li>
        <li><a href="/authentif" onClick={handleLogout}>Déconnexion</a></li>
      </ul>
    </div>
  );
}

export default Navbar2;
*/
import React, { useState } from 'react';
import '../navbar2.css';
import universite from '../images/universite.png';

function Navbar2() {
  const handleLogout = () => {
    try {
      document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/'; // Supprime le cookie 'token'
      window.location.href = '/authentif'; // Redirige l'utilisateur vers la page de connexion
    } catch (error) {
      console.error('Erreur lors de la déconnexion :', error);
      // Gérer l'erreur (par exemple, afficher un message à l'utilisateur)
    }
  };
  
  
  const [activeLink, setActiveLink] = useState(""); // Utilisation de useState ici

  return (
    <div className="navbar2">
      <ul className='rrr'>
        <li><a href="/home" className={activeLink === "/home" ? "active" : ""} onClick={() => setActiveLink("/home")}>Espace Candidature</a></li>
        <li><a href="/authentif" className={activeLink === "/authentif" ? "active" : ""} onClick={() => setActiveLink("/authentif")}>Espace Administration</a></li>
      </ul>
      <div className="search-container">
        <input type="text" placeholder="chercher..." name="search" />
      </div>
      <ul className='rrr'>
        <li><a href="/LoginForm">s'inscrire</a></li>
        <li><a href="/contact">consulter</a></li>
        <li><a href="/authentif" onClick={handleLogout}>Déconnexion</a></li>
      </ul>
    </div>
  );
}

export default Navbar2;
