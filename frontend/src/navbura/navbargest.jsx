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
           
                <li onClick={toggleGestionnaires}><IoPerson />Gérer Mastère {showGestionnaires ? '▼' : '▶'}
                    {showGestionnaires && (
                        <ul>
                            <li><a href="/ajoutermastere"> <BsFillPersonPlusFill />Ajouter un Mastere</a></li>
                            <li ><a href="/Listemastere"><FaListUl />Liste des masteres</a></li>
                        </ul>
                    )}
                </li>
                <li onClick={toggleEtablissements}><MdHomeWork />Vérification de Données {showEtablissements ? '▼' : '▶'}
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
