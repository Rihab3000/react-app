/*import React, { useState } from 'react';

import axios from 'axios';

const CandidatureForm = () => {
  const [dossierData, setDossierData] = useState({
    anneeBac: '',
    specialiteBac: '',
    diplomeUniversitaire: '',
    specialite: '',
    anneeObtention: '',
    redoublement1: '', 
    moyenne1: '', 
    session1: '', 
    credit1: '', 
    releveNote1: null, 
    redoublement2: '', 
    moyenne2: '', 
    session2: '', 
    credit2: '', 
    releveNote2: null, 
    redoublement3: '', 
    moyenne3: '', 
    session3: '', 
    credit3: '', 
    releveNote3: null, 
  });

  

  const handleDossierChange = (e) => {
    const { name, value, files } = e.target;
    if (files && files.length > 0) {
     
      setDossierData({ ...dossierData, [name]: files[0] });
    } else {
      setDossierData({ ...dossierData, [name]: value });
    }
  };

  
  

  const handleSubmitDossier = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
   
formData.append('releveNote1', dossierData.releveNote1);
formData.append('releveNote2', dossierData.releveNote2);
formData.append('releveNote3', dossierData.releveNote3);


formData.append('anneeBac', dossierData.anneeBac);
formData.append('specialiteBac', dossierData.specialiteBac);
formData.append('diplomeUniversitaire', dossierData.diplomeUniversitaire);
formData.append('specialite', dossierData.specialite);
formData.append('anneeObtention', dossierData.anneeObtention);
formData.append('redoublement1', dossierData.redoublement1);
formData.append('moyenne1', dossierData.moyenne1);
formData.append('session1', dossierData.session1);
formData.append('credit1', dossierData.credit1);
formData.append('redoublement2', dossierData.redoublement2);
formData.append('moyenne2', dossierData.moyenne2);
formData.append('session2', dossierData.session2);
formData.append('credit2', dossierData.credit2);
formData.append('redoublement3', dossierData.redoublement3);
formData.append('moyenne3', dossierData.moyenne3);
formData.append('session3', dossierData.session3);
formData.append('credit3', dossierData.credit3);


      
      const response = await axios.post("http://localhost:3000/Ajoutercandidature", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error('Erreur lors de l\'envoi des données du formulaire au backend :', error);
    }
  };

  
  return (
    <div className='div'>
      <h1>Votre parcours</h1>
      <form onSubmit={handleSubmitDossier} className='dossier' encType="multipart/form-data">
        <div>
          <label>Année du bac:</label>
          <input type="text" name="anneeBac" value={dossierData.anneeBac} onChange={handleDossierChange} />
        </div>
        <div>
          <label>Spécialité du bac:</label>
          <input type="text" name="specialiteBac" value={dossierData.specialiteBac} onChange={handleDossierChange} />
        </div>
        <div>
          <label>Diplôme universitaire:</label>
          <input type="text" name="diplomeUniversitaire" value={dossierData.diplomeUniversitaire} onChange={handleDossierChange} />
        </div>
        <div>
          <label>Spécialité:</label>
          <input type="text" name="specialite" value={dossierData.specialite} onChange={handleDossierChange} />
        </div>
        <div>
          <label>Année d'obtention:</label>
          <input type="text" name="anneeObtention" value={dossierData.anneeObtention} onChange={handleDossierChange} />
        </div>
        

        <h1>votre moyenne</h1>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <label style={{ marginRight: '10px' }}>Redoublement:</label>
          <div style={{ marginRight: '20px' }}>
            <input type="radio" id="redoublementUnAn" name="redoublement1" value="Un an" onChange={handleDossierChange} />
            <label htmlFor="redoublementUnAn">Un an</label>
          </div>
          <div style={{ marginRight: '20px' }}>
            <input type="radio" id="redoublementDeuxAns" name="redoublement1" value="Deux ans" onChange={handleDossierChange} />
            <label htmlFor="redoublementDeuxAns">Deux ans</label>
          </div>
          <div>
            <input type="radio" id="redoublementNon" name="redoublement1" value="Non" onChange={handleDossierChange} />
            <label htmlFor="redoublementNon">Non</label>
          </div>
        </div>

        <div>
          <label>MOYENNE DE 1ERE ANNEE:</label>
          <input type="number" name="moyenne1" value={dossierData.moyenne1} onChange={handleDossierChange} />
        </div>
        <div>
        <select name="session1" value={dossierData.session1} onChange={handleDossierChange}>
  <option value="">Sélectionnez une session</option>
  <option value="Principal">Principal</option>
  <option value="Contrôle">Contrôle</option>
</select>
</div>

        <div>
          <label>CREDIT DE 1ERE ANNEE </label>
          <input type="number" name="credit1" value={dossierData.credit1} onChange={handleDossierChange} />
        </div>
        <div>
          <label>RELEVE DE NOTE DE 1ERE ANNEE :</label>
          <input type="file" name="releveNote1" onChange={handleDossierChange} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <label style={{ marginRight: '10px' }}>Redoublement:</label>
          <div style={{ marginRight: '20px' }}>
            <input type="radio" id="redoublementUnAn2" name="redoublement2" value="Un an" onChange={handleDossierChange} />
            <label htmlFor="redoublementUnAn2">Un an</label>
          </div>
          <div style={{ marginRight: '20px' }}>
            <input type="radio" id="redoublementDeuxAns2" name="redoublement2" value="Deux ans" onChange={handleDossierChange} />
            <label htmlFor="redoublementDeuxAns2">Deux ans</label>
          </div>
          <div>
            <input type="radio" id="redoublementNon2" name="redoublement2" value="Non" onChange={handleDossierChange} />
            <label htmlFor="redoublementNon2">Non</label>
          </div>
        </div>

        <div>
          <label>MOYENNE DE 2EME ANNEE:</label>
          <input type="number" name="moyenne2" value={dossierData.moyenne2} onChange={handleDossierChange} />
        </div>
        
        <div>
          <label>SESSION :</label>
          <select name="session2" value={dossierData.session1} onChange={handleDossierChange}>
  <option value="">Sélectionnez une session</option>
  <option value="Principal">Principal</option>
  <option value="Contrôle">Contrôle</option>
</select>
        </div>
        <div>
          <label>CREDIT DE 2EME ANNEE </label>
          <input type="number" name="credit2" value={dossierData.credit2} onChange={handleDossierChange} />
        </div>
        <div>
          <label>RELEVE DE NOTE DE 2EME ANNEE :</label>
          <input type="file" name="releveNote2" onChange={handleDossierChange} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <label style={{ marginRight: '10px' }}>Redoublement:</label>
          <div style={{ marginRight: '20px' }}>
            <input type="radio" id="redoublement3" name="redoublement3" value="Un an" onChange={handleDossierChange} />
            <label htmlFor="redoublement3">Un an</label>
          </div>
          <div style={{ marginRight: '20px' }}>
            <input type="radio" id="redoublement3" name="redoublement3" value="Deux ans" onChange={handleDossierChange} />
            <label htmlFor="redoublement3">Deux ans</label>
          </div>
          <div>
            <input type="radio" id="redoublement3" name="redoublement3" value="Non" onChange={handleDossierChange} />
            <label htmlFor="redoublement3">Non</label>
          </div>
        </div>

        <div>
          <label>MOYENNE DE 3EME ANNEE:</label>
          <input type="number" name="moyenne3" value={dossierData.moyenne3} onChange={handleDossierChange} />
        </div>
        <div>
          <label>SESSION :</label>
          <select name="session2" value={dossierData.session1} onChange={handleDossierChange}>
  <option value="">Sélectionnez une session</option>
  <option value="Principal">Principal</option>
  <option value="Contrôle">Contrôle</option>
</select>
        </div>
        <div>
          <label>CREDIT DE 3EME ANNEE </label>
          <input type="number" name="credit3" value={dossierData.credit3} onChange={handleDossierChange} />
        </div>
        <div>
          <label>RELEVE DE NOTE DE 3EME ANNEE :</label>
          <input type="file" name="releveNote3" onChange={handleDossierChange} />
        </div>
        <button type="submit">Envoyer la candidature</button>
      </form>
    </div>
  );
};

const MyComponent = () => {
  return (
    <div>
      <CandidatureForm />
    </div>
  );
};

export default MyComponent;
*/

/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CandidatureForm = () => {
  const [dossierData, setDossierData] = useState({
    anneeBac: '',
    specialiteBac: '',
    diplomeUniversitaire: '',
    specialite: '',
    anneeObtention: '',
    redoublement1: '', 
    moyenne1: '', 
    session1: '', 
    credit1: '', 
    releveNote1: null, 
    redoublement2: '', 
    moyenne2: '', 
    session2: '', 
    credit2: '', 
    releveNote2: null, 
    redoublement3: '', 
    moyenne3: '', 
    session3: '', 
    credit3: '', 
    releveNote3: null, 
  });

  const [token, setToken] = useState('');

  const handleDossierChange = (e) => {
    const { name, value, files } = e.target;
    if (files && files.length > 0) {
      setDossierData({ ...dossierData, [name]: files[0] });
    } else {
      setDossierData({ ...dossierData, [name]: value });
    }
  };

  useEffect(() => {
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    const tokenCookie = cookies.find(cookie => cookie.startsWith('token='));
    if (tokenCookie) {
      const userToken = tokenCookie.split('=')[1];
      setToken(userToken);
    }
  }, []);

  const handleSubmitDossier = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('releveNote1', dossierData.releveNote1);
      formData.append('releveNote2', dossierData.releveNote2);
      formData.append('releveNote3', dossierData.releveNote3);
      formData.append('anneeBac', dossierData.anneeBac);
      formData.append('specialiteBac', dossierData.specialiteBac);
      formData.append('diplomeUniversitaire', dossierData.diplomeUniversitaire);
      formData.append('specialite', dossierData.specialite);
      formData.append('anneeObtention', dossierData.anneeObtention);
      formData.append('redoublement1', dossierData.redoublement1);
      formData.append('moyenne1', dossierData.moyenne1);
      formData.append('session1', dossierData.session1);
      formData.append('credit1', dossierData.credit1);
      formData.append('redoublement2', dossierData.redoublement2);
      formData.append('moyenne2', dossierData.moyenne2);
      formData.append('session2', dossierData.session2);
      formData.append('credit2', dossierData.credit2);
      formData.append('redoublement3', dossierData.redoublement3);
      formData.append('moyenne3', dossierData.moyenne3);
      formData.append('session3', dossierData.session3);
      formData.append('credit3', dossierData.credit3);

      const response = await axios.post('http://localhost:3000/Ajoutercandidature', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error('Erreur lors de l\'envoi des données du formulaire au backend :', error);
    }
  };
      
  
  return (
    <div className='div'>
      <h1>Votre parcours</h1>
      <form onSubmit={handleSubmitDossier} className='dossier' encType="multipart/form-data">
        <div>
          <label>Année du bac:</label>
          <input type="text" name="anneeBac" value={dossierData.anneeBac} onChange={handleDossierChange} />
        </div>
        <div>
          <label>Spécialité du bac:</label>
          <input type="text" name="specialiteBac" value={dossierData.specialiteBac} onChange={handleDossierChange} />
        </div>
        <div>
          <label>Diplôme universitaire:</label>
          <input type="text" name="diplomeUniversitaire" value={dossierData.diplomeUniversitaire} onChange={handleDossierChange} />
        </div>
        <div>
          <label>Spécialité:</label>
          <input type="text" name="specialite" value={dossierData.specialite} onChange={handleDossierChange} />
        </div>
        <div>
          <label>Année d'obtention:</label>
          <input type="text" name="anneeObtention" value={dossierData.anneeObtention} onChange={handleDossierChange} />
        </div>
        

        <h1>votre moyenne</h1>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <label style={{ marginRight: '10px' }}>Redoublement:</label>
          <div style={{ marginRight: '20px' }}>
            <input type="radio" id="redoublementUnAn" name="redoublement1" value="Un an" onChange={handleDossierChange} />
            <label htmlFor="redoublementUnAn">Un an</label>
          </div>
          <div style={{ marginRight: '20px' }}>
            <input type="radio" id="redoublementDeuxAns" name="redoublement1" value="Deux ans" onChange={handleDossierChange} />
            <label htmlFor="redoublementDeuxAns">Deux ans</label>
          </div>
          <div>
            <input type="radio" id="redoublementNon" name="redoublement1" value="Non" onChange={handleDossierChange} />
            <label htmlFor="redoublementNon">Non</label>
          </div>
        </div>

        <div>
          <label>MOYENNE DE 1ERE ANNEE:</label>
          <input type="number" name="moyenne1" value={dossierData.moyenne1} onChange={handleDossierChange} />
        </div>
        <div>
        <select name="session1" value={dossierData.session1} onChange={handleDossierChange}>
  <option value="">Sélectionnez une session</option>
  <option value="Principal">Principal</option>
  <option value="Contrôle">Contrôle</option>
</select>
</div>

        <div>
          <label>CREDIT DE 1ERE ANNEE </label>
          <input type="number" name="credit1" value={dossierData.credit1} onChange={handleDossierChange} />
        </div>
        <div>
          <label>RELEVE DE NOTE DE 1ERE ANNEE :</label>
          <input type="file" name="releveNote1" onChange={handleDossierChange} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <label style={{ marginRight: '10px' }}>Redoublement:</label>
          <div style={{ marginRight: '20px' }}>
            <input type="radio" id="redoublementUnAn2" name="redoublement2" value="Un an" onChange={handleDossierChange} />
            <label htmlFor="redoublementUnAn2">Un an</label>
          </div>
          <div style={{ marginRight: '20px' }}>
            <input type="radio" id="redoublementDeuxAns2" name="redoublement2" value="Deux ans" onChange={handleDossierChange} />
            <label htmlFor="redoublementDeuxAns2">Deux ans</label>
          </div>
          <div>
            <input type="radio" id="redoublementNon2" name="redoublement2" value="Non" onChange={handleDossierChange} />
            <label htmlFor="redoublementNon2">Non</label>
          </div>
        </div>

        <div>
          <label>MOYENNE DE 2EME ANNEE:</label>
          <input type="number" name="moyenne2" value={dossierData.moyenne2} onChange={handleDossierChange} />
        </div>
        
        <div>
          <label>SESSION :</label>
          <select name="session2" value={dossierData.session1} onChange={handleDossierChange}>
  <option value="">Sélectionnez une session</option>
  <option value="Principal">Principal</option>
  <option value="Contrôle">Contrôle</option>
</select>
        </div>
        <div>
          <label>CREDIT DE 2EME ANNEE </label>
          <input type="number" name="credit2" value={dossierData.credit2} onChange={handleDossierChange} />
        </div>
        <div>
          <label>RELEVE DE NOTE DE 2EME ANNEE :</label>
          <input type="file" name="releveNote2" onChange={handleDossierChange} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <label style={{ marginRight: '10px' }}>Redoublement:</label>
          <div style={{ marginRight: '20px' }}>
            <input type="radio" id="redoublement3" name="redoublement3" value="Un an" onChange={handleDossierChange} />
            <label htmlFor="redoublement3">Un an</label>
          </div>
          <div style={{ marginRight: '20px' }}>
            <input type="radio" id="redoublement3" name="redoublement3" value="Deux ans" onChange={handleDossierChange} />
            <label htmlFor="redoublement3">Deux ans</label>
          </div>
          <div>
            <input type="radio" id="redoublement3" name="redoublement3" value="Non" onChange={handleDossierChange} />
            <label htmlFor="redoublement3">Non</label>
          </div>
        </div>

        <div>
          <label>MOYENNE DE 3EME ANNEE:</label>
          <input type="number" name="moyenne3" value={dossierData.moyenne3} onChange={handleDossierChange} />
        </div>
        <div>
          <label>SESSION :</label>
          <select name="session2" value={dossierData.session1} onChange={handleDossierChange}>
  <option value="">Sélectionnez une session</option>
  <option value="Principal">Principal</option>
  <option value="Contrôle">Contrôle</option>
</select>
        </div>
        <div>
          <label>CREDIT DE 3EME ANNEE </label>
          <input type="number" name="credit3" value={dossierData.credit3} onChange={handleDossierChange} />
        </div>
        <div>
          <label>RELEVE DE NOTE DE 3EME ANNEE :</label>
          <input type="file" name="releveNote3" onChange={handleDossierChange} />
        </div>
        <button type="submit">Envoyer la candidature</button>
      </form>
    </div>
  );
};


const MyComponent = () => {
  return (
    <div>
      <CandidatureForm />
    </div>
  );
};

export default MyComponent;

*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CandidatureForm = () => {
  const [dossierData, setDossierData] = useState({
    anneeBac: '',
    specialiteBac: '',
    diplomeUniversitaire: '',
    specialite: '',
    anneeObtention: '',
    redoublement1: '', 
    moyenne1: '', 
    session1: '', 
    credit1: '', 
    releveNote1: null, 
    redoublement2: '', 
    moyenne2: '', 
    session2: '', 
    credit2: '', 
    releveNote2: null, 
    redoublement3: '', 
    moyenne3: '', 
    session3: '', 
    credit3: '', 
    releveNote3: null, 
  });

 

  const [token, setToken] = useState('');

  useEffect(() => {
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    const tokenCookie = cookies.find(cookie => cookie.startsWith('token='));
    if (tokenCookie) {
      const userToken = tokenCookie.split('=')[1];
      setToken(userToken);
    }
  }, []);

  const handleDossierChange = (e) => {
    const { name, value, files } = e.target;
    if (files && files.length > 0) {
      setDossierData({ ...dossierData, [name]: files[0] });
    } else {
      setDossierData({ ...dossierData, [name]: value });
    }
  };

  const handleSubmitDossier = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('releveNote1', dossierData.releveNote1);
      formData.append('releveNote2', dossierData.releveNote2);
      formData.append('releveNote3', dossierData.releveNote3);
      formData.append('anneeBac', dossierData.anneeBac);
      formData.append('specialiteBac', dossierData.specialiteBac);
      formData.append('diplomeUniversitaire', dossierData.diplomeUniversitaire);
      formData.append('specialite', dossierData.specialite);
      formData.append('anneeObtention', dossierData.anneeObtention);
      formData.append('redoublement1', dossierData.redoublement1);
      formData.append('moyenne1', dossierData.moyenne1);
      formData.append('session1', dossierData.session1);
      formData.append('credit1', dossierData.credit1);
      formData.append('redoublement2', dossierData.redoublement2);
      formData.append('moyenne2', dossierData.moyenne2);
      formData.append('session2', dossierData.session2);
      formData.append('credit2', dossierData.credit2);
      formData.append('redoublement3', dossierData.redoublement3);
      formData.append('moyenne3', dossierData.moyenne3);
      formData.append('session3', dossierData.session3);
      formData.append('credit3', dossierData.credit3);
      formData.append('token', token);
/*
      const response = await axios.post('http://localhost:3000/Ajoutercandidature', formData, {
        heade++


      const response = await axios.post('http://localhost:3000/Ajoutercandidature', formData, {
  headers: {
    'Content-Type': 'multipart/form-data',
    'Authorization': `Bearer ${token}`
  }
});*/

      console.log(response.data);
    } catch (error) {
      console.error('Erreur lors de l\'envoi des données du formulaire au backend :', error);
    }
  };

  return (
    <div className='div'>
    <h1>Votre parcours</h1>
    <form onSubmit={handleSubmitDossier} className='dossier' encType="multipart/form-data">
      <div>
        <label>Année du bac:</label>
        <input type="text" name="anneeBac" value={dossierData.anneeBac} onChange={handleDossierChange} />
      </div>
      <div>
        <label>Spécialité du bac:</label>
        <input type="text" name="specialiteBac" value={dossierData.specialiteBac} onChange={handleDossierChange} />
      </div>
      <div>
        <label>Diplôme universitaire:</label>
        <input type="text" name="diplomeUniversitaire" value={dossierData.diplomeUniversitaire} onChange={handleDossierChange} />
      </div>
      <div>
        <label>Spécialité:</label>
        <input type="text" name="specialite" value={dossierData.specialite} onChange={handleDossierChange} />
      </div>
      <div>
        <label>Année d'obtention:</label>
        <input type="text" name="anneeObtention" value={dossierData.anneeObtention} onChange={handleDossierChange} />
      </div>
      

      <h1>votre moyenne</h1>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <label style={{ marginRight: '10px' }}>Redoublement:</label>
        <div style={{ marginRight: '20px' }}>
          <input type="radio" id="redoublementUnAn" name="redoublement1" value="Un an" onChange={handleDossierChange} />
          <label htmlFor="redoublementUnAn">Un an</label>
        </div>
        <div style={{ marginRight: '20px' }}>
          <input type="radio" id="redoublementDeuxAns" name="redoublement1" value="Deux ans" onChange={handleDossierChange} />
          <label htmlFor="redoublementDeuxAns">Deux ans</label>
        </div>
        <div>
          <input type="radio" id="redoublementNon" name="redoublement1" value="Non" onChange={handleDossierChange} />
          <label htmlFor="redoublementNon">Non</label>
        </div>
      </div>

      <div>
        <label>MOYENNE DE 1ERE ANNEE:</label>
        <input type="number" name="moyenne1" value={dossierData.moyenne1} onChange={handleDossierChange} />
      </div>
      <div>
      <select name="session1" value={dossierData.session1} onChange={handleDossierChange}>
<option value="">Sélectionnez une session</option>
<option value="Principal">Principal</option>
<option value="Contrôle">Contrôle</option>
</select>
</div>

      <div>
        <label>CREDIT DE 1ERE ANNEE </label>
        <input type="number" name="credit1" value={dossierData.credit1} onChange={handleDossierChange} />
      </div>
      <div>
        <label>RELEVE DE NOTE DE 1ERE ANNEE :</label>
        <input type="file" name="releveNote1" onChange={handleDossierChange} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <label style={{ marginRight: '10px' }}>Redoublement:</label>
        <div style={{ marginRight: '20px' }}>
          <input type="radio" id="redoublementUnAn2" name="redoublement2" value="Un an" onChange={handleDossierChange} />
          <label htmlFor="redoublementUnAn2">Un an</label>
        </div>
        <div style={{ marginRight: '20px' }}>
          <input type="radio" id="redoublementDeuxAns2" name="redoublement2" value="Deux ans" onChange={handleDossierChange} />
          <label htmlFor="redoublementDeuxAns2">Deux ans</label>
        </div>
        <div>
          <input type="radio" id="redoublementNon2" name="redoublement2" value="Non" onChange={handleDossierChange} />
          <label htmlFor="redoublementNon2">Non</label>
        </div>
      </div>

      <div>
        <label>MOYENNE DE 2EME ANNEE:</label>
        <input type="number" name="moyenne2" value={dossierData.moyenne2} onChange={handleDossierChange} />
      </div>
      
      <div>
        <label>SESSION :</label>
        <select name="session2" value={dossierData.session1} onChange={handleDossierChange}>
<option value="">Sélectionnez une session</option>
<option value="Principal">Principal</option>
<option value="Contrôle">Contrôle</option>
</select>
      </div>
      <div>
        <label>CREDIT DE 2EME ANNEE </label>
        <input type="number" name="credit2" value={dossierData.credit2} onChange={handleDossierChange} />
      </div>
      <div>
        <label>RELEVE DE NOTE DE 2EME ANNEE :</label>
        <input type="file" name="releveNote2" onChange={handleDossierChange} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <label style={{ marginRight: '10px' }}>Redoublement:</label>
        <div style={{ marginRight: '20px' }}>
          <input type="radio" id="redoublement3" name="redoublement3" value="Un an" onChange={handleDossierChange} />
          <label htmlFor="redoublement3">Un an</label>
        </div>
        <div style={{ marginRight: '20px' }}>
          <input type="radio" id="redoublement3" name="redoublement3" value="Deux ans" onChange={handleDossierChange} />
          <label htmlFor="redoublement3">Deux ans</label>
        </div>
        <div>
          <input type="radio" id="redoublement3" name="redoublement3" value="Non" onChange={handleDossierChange} />
          <label htmlFor="redoublement3">Non</label>
        </div>
      </div>

      <div>
        <label>MOYENNE DE 3EME ANNEE:</label>
        <input type="number" name="moyenne3" value={dossierData.moyenne3} onChange={handleDossierChange} />
      </div>
      <div>
        <label>SESSION :</label>
        <select name="session2" value={dossierData.session1} onChange={handleDossierChange}>
<option value="">Sélectionnez une session</option>
<option value="Principal">Principal</option>
<option value="Contrôle">Contrôle</option>
</select>
      </div>
      <div>
        <label>CREDIT DE 3EME ANNEE </label>
        <input type="number" name="credit3" value={dossierData.credit3} onChange={handleDossierChange} />
      </div>
      <div>
        <label>RELEVE DE NOTE DE 3EME ANNEE :</label>
        <input type="file" name="releveNote3" onChange={handleDossierChange} />
      </div>
      <button type="submit">Envoyer la candidature</button>
    </form>
  </div>
);
};

;

const MyComponent = () => {
  return (
    <div>
      <CandidatureForm />
    </div>
  );
};

export default MyComponent;
