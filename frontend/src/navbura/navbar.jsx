/*
import React, { useState } from 'react';
const Navbar = () => {
    const [showGestionnaire, setShowGestionnaire] = useState(false);
    const [showEtablissement, setShowEtablissement] = useState(false);

    const toggleGestionnaire = () => {
        setShowGestionnaire(!showGestionnaire);
        setShowEtablissement(false);
    };

    const toggleEtablissement = () => {
        setShowEtablissement(!showEtablissement);
        setShowGestionnaire(false);
    };

    return (
        <div>
            <ul>
                <li onClick={toggleGestionnaire}>Gestionnaire {showGestionnaire ? '▼' : '▶'}</li>
                {showGestionnaire && (
                    <ul>
                        <li>Ajout de gestionnaire</li>
                        <li>Liste des gestionnaires</li>
                    </ul>
                )}
                <li onClick={toggleEtablissement}>Etablissement {showEtablissement ? '▼' : '▶'}</li>
                {showEtablissement && (
                    <ul>
                        <li>Ajout d'établissement</li>
                        <li>Liste des établissements</li>
                    </ul>
                )}
            </ul>
        </div>
    );
};

export default Navbar;
*/
// Navbar.jsx
// Navbar.jsx

import React, { useState } from 'react';
import universite from '../images/universite.png';
import { IoPerson } from "react-icons/io5";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import { MdAddHome } from "react-icons/md";
import { MdHomeWork } from "react-icons/md";
import '../navbar.css';




const Navbar = () => {
    const [showGestionnaires, setShowGestionnaires] = useState(false);
    const [showEtablissements, setShowEtablissements] = useState(false);

    const toggleGestionnaires = () => {
        setShowGestionnaires(!showGestionnaires);
        setShowEtablissements(false);
    };

    const toggleEtablissements = () => {
        setShowEtablissements(!showEtablissements);
        setShowGestionnaires(false);
    };

    return (
        <div className='nav1'>
           <img src={universite} alt="Université" id="monImage" />
   
            <ul>  
           
                <li onClick={toggleGestionnaires}><IoPerson />Gestionnaire {showGestionnaires ? '▼' : '▶'}
                    {showGestionnaires && (
                        <ul>
                            <li><a href="/gestionnaire"> <BsFillPersonPlusFill />Ajouter un gestionnaires</a></li>
                            <li ><a href="/ListeGestionnaire"><FaListUl />Liste des gestionnaires</a></li>
                        </ul>
                    )}
                </li>
                <li onClick={toggleEtablissements}><MdHomeWork />Etablissement {showEtablissements ? '▼' : '▶'}
                    {showEtablissements && (
                        <ul>
                            <li><a href="/etab"><MdAddHome />Ajouter un établissement</a></li>
                            <li> <a href="/listeetab">Liste des établissements</a></li>
                        </ul>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
// Navbar.jsx







/*
import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;*/
