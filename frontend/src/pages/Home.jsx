
//c le code des liste de mastere par etablissement sans liste deroulent
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

// liste deroulante
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
      <select value={selectedEtablissement} onChange={(e) => handleEtablissementSelect(e.target.value)}>
        <option value="">Sélectionner un établissement</option>
        {mastereList.map((item, index) => (
          <option key={index} value={item.etablissement}>{item.etablissement}</option>
        ))}
      </select>
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


//code de master regrouper par etab



import React, { useState, useEffect } from 'react';
import axios from 'axios';




const MastereList = () => {
  const [mastereList, setMastereList] = useState([]);
  const [selectedEtablissement, setSelectedEtablissement] = useState('');
  const [selectedMastere, setSelectedMastere] = useState(null);
  const [mastereDetails, setMastereDetails] = useState(null);

  const customAlert = (nom, details) => {
    const dialog = document.createElement('dialog');
    dialog.className = 'custom-dialog';

    const content = document.createElement('div');
    content.innerHTML = `
      <p><strong>Nom:</strong> ${nom}</p>
      <p><strong>Détails:</strong> ${details}</p>
    `;

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Fermer';
    closeButton.onclick = () => dialog.close();

    dialog.appendChild(content);
    dialog.appendChild(closeButton);

    document.body.appendChild(dialog);
    dialog.showModal();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3002/Home');
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
    setMastereDetails(null);
  };

  const handleMastereSelect = async (nom) => {
    setSelectedMastere(nom);
    try {
      const response = await axios.get(`http://localhost:3002/details/${nom}`);
      setMastereDetails(response.data || null);
      // Vérifier les données reçues avant d'appeler customAlert
      if (response.data && response.data.nom && response.data.details) {
        customAlert(response.data.nom, response.data.details);
      } else {
        console.error('Données de détails de mastère manquantes.');
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des détails du mastère :', error);
      setMastereDetails(null);
    }
  };

  return (



    <div>
      <h1>Liste des mastères par établissement</h1>
      <select value={selectedEtablissement} onChange={(e) => handleEtablissementSelect(e.target.value)}>
        <option value="">Sélectionner un établissement</option>
        {mastereList.map((item, index) => (
          <option key={index} value={item.etablissement}>{item.etablissement}</option>
        ))}
      </select>
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
                      <a href="/Upload"> <button>Postuler</button></a>

                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
     
    
    </div>
   
  );
};

export default MastereList;


