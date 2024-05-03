/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FileDisplay() {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const fetchFile = async (id) => {
      try {
        const response = await axios.get(`http://localhost:3000/dossier/${id}`);
        setImageSrc(response.data.filename);
      } catch (error) {
        console.error('Erreur lors de la récupération du fichier :', error);
      }
    };

    // Appeler fetchFile avec l'ID approprié (par exemple, 1)
    fetchFile(1);
  }, []);

  return (
    <div className='container'>
      {imageSrc && <img src={`http://localhost:3000/uploads/${imageSrc}`} alt='Fichier' />}
    </div>
  );
}

export default FileDisplay;
*/