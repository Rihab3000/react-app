/*import React from 'react';
import '../navbar.css';

const Navbar = () => {
  return (
    <div className='nav1'>
    <nav>
      <ul>
        <li><a href="/home">Espace Candidature</a></li>
        <li><a href="/authentif">Espace Administration</a></li>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;*/
import React, { useState } from 'react';
import '../navbar.css'; // Assurez-vous d'avoir un fichier CSS pour votre Navbar

const Navbar = () => {
  const [linkClicked, setLinkClicked] = useState(false);

  const handleClick = () => {
    setLinkClicked(true);
  };

  return (
    <nav>
      <div className='nav1'>
      <ul>
        <li><a href="/home" className={`nav-link ${linkClicked ? 'disabled' : ''}`} onClick={handleClick}>Espace Candidature</a></li>
        <li><a href="/authentif" className={`nav-link ${linkClicked ? 'disabled' : ''}`} onClick={handleClick}>Espace Administration</a></li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;

