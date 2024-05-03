
// Serveur Node.js
/*
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'projet',
});

db.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données :', err);
    return;
  }
  console.log('Connecté à la base de données MySQL');
});
app.post('/', (req, res) => {
  res.sendFile(__dirname + '/LoginForm.jsx');
});

app.post('/', (req, res) => {
    const { nom, password } = req.body;
const sql = "INSERT INTO users (nom, password) VALUES (?,?)";
const values = [req.body.nom, req.body.password];  
db.query(sql, values, (err, data) => {
      if (err) {
        console.error('Erreur lors de l\'exécution de la requête :', err);
         return res.status(500).json({ error: 'Internal Server Error' });
      }
      return res.json({ message: 'Data inserted successfully' });
    });  
  });
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});*/




/*

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Mettez le mot de passe de votre base de données
  database: 'projet',
});

db.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données :', err);
    return;
  }
  console.log('Connecté à la base de données MySQL');
});

app.post('/loginform', (req, res) => {
  const { cin, nom, prenom, email, password, confirmPassword, numTel, dateNaissance, lieuNaissance } = req.body;
  // Vous devez hasher le mot de passe avant de le stocker dans la base de données
  const hashedPassword = bcrypt.hashSync(password, 10);

  const sql = "INSERT INTO condidat (cin,nom,prenom,email,password,cfrmpassword,telephone,datenaiss,lieunaiss) VALUES (?,?,?,?,?,?,?,?,?)";
  const values = [cin, nom, prenom, email, hashedPassword, confirmPassword, numTel, dateNaissance, lieuNaissance];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error('Erreur lors de l\'exécution de la requête :', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    return res.json({ message: 'Data inserted successfully' });
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});*/

/*

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Mettez le mot de passe de votre base de données
  database: 'projet',
});

db.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données :', err);
    return;
  }
  console.log('Connecté à la base de données MySQL');
});

app.get('/checkcin/:cin', (req, res) => {
  const cin = req.params.cin;

  db.query('SELECT * FROM condidat WHERE cin = ?', [cin], (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'exécution de la requête :', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (result.length > 0) {
      return res.json({ exists: true });
    } else {
      return res.json({ exists: false });
    }
  });
});

app.post('/loginform', (req, res) => {
  const { cin, nom, prenom, email, password, confirmPassword, numTel, dateNaissance, lieuNaissance } = req.body;

  db.query('SELECT * FROM condidat WHERE cin = ?', [cin], (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'exécution de la requête :', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (result.length > 0) {
      return res.status(400).json({ message: 'Ce CIN est déjà inscrit.' });
    }

    const sql = "INSERT INTO condidat (cin, nom, prenom, email, password, cfrmpassword, telephone, datenaiss, lieunaiss) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [cin, nom, prenom, email, password, confirmPassword, numTel, dateNaissance, lieuNaissance];
  
    db.query(sql, values, (err, data) => {
      if (err) {
        console.error('Erreur lors de l\'exécution de la requête :', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
    
      return res.json({ message: 'inscription avec succees' });
      setCin('');
      setNom('');
      setPrenom('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setNumTel('');
      setDateNaissance('');
      setLieuNaissance('');
    });
  });
});



app.post('/cnxcdt', (req, res) => {
  const { cin, password } = req.body;
  const query = `SELECT * FROM condidat WHERE cin = ? AND password = ?`;
  
  db.query(query, [cin, password], (err, results) => {
      if (err) {
          console.error('Erreur lors de la vérification des informations d\'identification : ' + err.stack);
          res.status(500).send('Une erreur s\'est produite lors de la vérification des informations d\'identification');
          return;
      }

      if (results.length > 0) {
          res.send('success'); // Les informations d'identification sont correctes
      } else {
          res.send('invalid'); // Les informations d'identification sont incorrectes
      }
  });
});



app.get('/dashboard', (req, res) => {
  res.sendFile(__dirname + '/dashboard.jsx');
});

app.get('/dashboard/gestionnaire', (req, res) => {
  res.sendFile(__dirname + '/AjouterGestionnaire.jsx');
});



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

*/

//Dernier vesrion pour serveur et cnx token
/*
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const jwtSecretKey = 'your_secret_key_here'; 

const app = express();

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Mettez le mot de passe de votre base de données
  database: 'projet',
});

db.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données :', err);
    return;
  }
  console.log('Connecté à la base de données MySQL');
});

app.get('/checkcin/:cin', (req, res) => {
  const cin = req.params.cin;

  db.query('SELECT * FROM condidat WHERE cin = ?', [cin], (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'exécution de la requête :', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (result.length > 0) {
      return res.json({ exists: true });
    } else {
      return res.json({ exists: false });
    }
  });
});

app.post('/loginform', (req, res) => {
  const { cin, nom, prenom, email, password, confirmPassword, numTel, dateNaissance, lieuNaissance } = req.body;

  db.query('SELECT * FROM condidat WHERE cin = ?', [cin], (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'exécution de la requête :', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (result.length > 0) {
      return res.status(400).json({ message: 'Ce CIN est déjà inscrit.' });
    }

    const sql = "INSERT INTO condidat (cin, nom, prenom, email, password, cfrmpassword, telephone, datenaiss, lieunaiss) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [cin, nom, prenom, email, password, confirmPassword, numTel, dateNaissance, lieuNaissance];
  
    db.query(sql, values, (err, data) => {
      if (err) {
        console.error('Erreur lors de l\'exécution de la requête :', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
    
      return res.json({ message: 'Inscription réussie' });
    });
  });
});

// Middleware pour vérifier le token
const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    const bearerToken = bearerHeader.split(' ')[1];
    req.token = bearerToken;

    // Décoder le token JWT
    jwt.verify(req.token, jwtSecretKey, (err, decoded) => {
      if (err) {
        return res.status(403).send('Token non valide'); // Token invalide
      }
      // Placer les informations décodées dans req.decoded
      req.decoded = decoded;
      next();
    });
  } else {
    res.sendStatus(403); // Forbidden
  }
};

// Route d'authentification du candidat
app.post('/cnxcdt', (req, res) => {
  const { cin, password } = req.body;
  const query = `SELECT * FROM condidat WHERE cin = ? AND password = ?`;

  db.query(query, [cin, password], (err, results) => {
    if (err) {
      console.error('Erreur lors de la vérification des informations d\'identification : ' + err.stack);
      res.status(500).send('Une erreur s\'est produite lors de la vérification des informations d\'identification');
      return;
    }

    if (results.length > 0) {
      const user = results[0];
      const token = jwt.sign({ cin: user.cin, id: user.id }, jwtSecretKey, { expiresIn: '1h' });
      res.cookie('token', token, { maxAge: 3600000, httpOnly: true });
      res.json({ token }); // Renvoyer le token dans la réponse
    } else {
      res.status(401).send('Unauthorized'); // Authentification échouée
    }
  });
});

// Exemple d'utilisation du middleware dans une route protégée
app.get('/protected-route', verifyToken, (req, res) => {
  jwt.verify(req.token, jwtSecretKey, (err, decoded) => {
    if (err) {
      console.error('Erreur de vérification du token :', err);
      return res.status(403).json({ error: 'Token non valide' });
    }
    res.json({ message: `Utilisateur authentifié : ${decoded.cin}` });
  });
});


app.get('/createDossierTable', (req, res) => {
  const sql = `
      CREATE TABLE IF NOT EXISTS dossier (
          id INT PRIMARY KEY AUTO_INCREMENT,
          fichier1 VARCHAR(255) NOT NULL,
          fichier2 VARCHAR(255) NOT NULL,
          fichier3 VARCHAR(255) NOT NULL
      )
  `;
  db.query(sql, (err, result) => {
      if (err) {
          console.error('Erreur lors de la création de la table :', err);
          return res.json({ message: 'Failed to create table' });
      }
      console.log('Table "dossier" créée avec succès');
      return res.json({ message: 'Table created successfully' });
  });
});



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

*/


/*
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const jwtSecretKey = 'your_secret_key_here';
const multer = require('multer');
const path = require('path');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Mettez le mot de passe de votre base de données
  database: 'projet',
});

db.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données :', err);
    return;
  }

  const createCandidatureTableQuery = `
CREATE TABLE IF NOT EXISTS candidature (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_condidat INT,
  anneeBac VARCHAR(4) NOT NULL,
  specialiteBac VARCHAR(255) NOT NULL,
  diplomeUniversitaire VARCHAR(255) NOT NULL,
  specialite VARCHAR(255) NOT NULL,
  anneeObtention VARCHAR(4) NOT NULL,
  redoublement1 VARCHAR(10) NOT NULL,
  moyenne1 DECIMAL(4,2) NOT NULL,
  session1 ENUM('Principal', 'Contrôle') NOT NULL,
  credit1 INT NOT NULL,
  releveNote1 VARCHAR(255) NOT NULL,
  redoublement2 VARCHAR(10) NOT NULL,
  moyenne2 DECIMAL(4,2) NOT NULL,
  session2 ENUM('Principal', 'Contrôle') NOT NULL,
  credit2 INT NOT NULL,
  releveNote2 VARCHAR(255) NOT NULL,
  redoublement3 VARCHAR(10) NOT NULL,
  moyenne3 DECIMAL(4,2) NOT NULL,
  session3 ENUM('Principal', 'Contrôle') NOT NULL,
  credit3 INT NOT NULL,
  releveNote3 VARCHAR(255) NOT NULL,
  FOREIGN KEY (id_condidat) REFERENCES condidat(id)
)
`;

  db.query(createCandidatureTableQuery, (err, result) => {
    if (err) {
      console.error('Erreur lors de la création de la table "Candidature" :', err);
      return;
    }
    console.log('Table "Candidature" créée avec succès');
  });
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploades/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

const addForeignKeyQuery = `
  ALTER TABLE candidature
  ADD CONSTRAINT fk_candidature_condidat FOREIGN KEY (id_condidat) REFERENCES condidat(id)
`;

// Vérifier si la contrainte de clé étrangère existe déjà
db.query("SELECT COUNT(*) as count FROM information_schema.TABLE_CONSTRAINTS WHERE CONSTRAINT_SCHEMA = 'projet' AND TABLE_NAME = 'candidature' AND CONSTRAINT_NAME = 'fk_candidature_condidat'", (err, result) => {
  if (err) {
    console.error('Erreur lors de la vérification de la contrainte de clé étrangère :', err);
    return;
  }

  const count = result[0].count;
  if (count === 0) {
    db.query(addForeignKeyQuery, (err, result) => {
      if (err) {
        console.error('Erreur lors de l\'ajout de la clé étrangère :', err);
        return;
      }
      console.log('Clé étrangère ajoutée avec succès');
    });
  } else {
    console.log('La contrainte de clé étrangère existe déjà');
  }
});

app.post('/Ajoutercandidature', upload.fields([
  { name: 'releveNote1', maxCount: 1 },
  { name: 'releveNote2', maxCount: 1 },
  { name: 'releveNote3', maxCount: 1 }
]), (req, res) => {
  try {
    const formData = req.body;

    const releveNote1Path = req.files['releveNote1'][0].filename;
    const releveNote2Path = req.files['releveNote2'][0].filename;
    const releveNote3Path = req.files['releveNote3'][0].filename;

    const sql = `INSERT INTO candidature 
                 (anneeBac, specialiteBac, diplomeUniversitaire, specialite, anneeObtention, 
                  redoublement1, moyenne1, session1, credit1, releveNote1, 
                  redoublement2, moyenne2, session2, credit2, releveNote2, 
                  redoublement3, moyenne3, session3, credit3, releveNote3) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const values = [
      formData.anneeBac, formData.specialiteBac, formData.diplomeUniversitaire, formData.specialite, formData.anneeObtention,
      formData.redoublement1, formData.moyenne1, formData.session1, formData.credit1, releveNote1Path,
      formData.redoublement2, formData.moyenne2, formData.session2, formData.credit2, releveNote2Path,
      formData.redoublement3, formData.moyenne3, formData.session3, formData.credit3, releveNote3Path
    ];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Erreur lors de l\'insertion des données :', err);
        throw err;
      }
      console.log('Données insérées avec succès.');
      res.send('Candidature enregistrée avec succès.');
    });
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement de la candidature :', error);
    res.status(500).send('Erreur lors de l\'enregistrement de la candidature.');
  }
});

app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});

*/


const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const jwtSecretKey = 'your_secret_key_here';
const multer = require('multer');
const path = require('path');

const app = express();

app.use(cors());
app.use(bodyParser.json());



const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Mettez le mot de passe de votre base de données
  database: 'projet',
});

db.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données :', err);
    return;
  }

  app.get('/checkcin/:cin', (req, res) => {
    const cin = req.params.cin;
  
    db.query('SELECT * FROM condidat WHERE cin = ?', [cin], (err, result) => {
      if (err) {
        console.error('Erreur lors de l\'exécution de la requête :', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
  
      if (result.length > 0) {
        return res.json({ exists: true });
      } else {
        return res.json({ exists: false });
      }
    });
  });
  
  app.post('/loginform', (req, res) => {
    const { cin, nom, prenom, email, password, confirmPassword, numTel, dateNaissance, lieuNaissance } = req.body;
  
    db.query('SELECT * FROM condidat WHERE cin = ?', [cin], (err, result) => {
      if (err) {
        console.error('Erreur lors de l\'exécution de la requête :', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
  
      if (result.length > 0) {
        return res.status(400).json({ message: 'Ce CIN est déjà inscrit.' });
      }
  
      const sql = "INSERT INTO condidat (cin, nom, prenom, email, password, cfrmpassword, telephone, datenaiss, lieunaiss) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
      const values = [cin, nom, prenom, email, password, confirmPassword, numTel, dateNaissance, lieuNaissance];
    
      db.query(sql, values, (err, data) => {
        if (err) {
          console.error('Erreur lors de l\'exécution de la requête :', err);
          return res.status(500).json({ error: 'Internal Server Error' });
        }
      
        return res.json({ message: 'Inscription réussie' });
      });
    });
  });
  /*
  // Middleware pour vérifier le token
  const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
      const bearerToken = bearerHeader.split(' ')[1];
      req.token = bearerToken;
  
      // Décoder le token JWT
      jwt.verify(req.token, jwtSecretKey, (err, decoded) => {
        if (err) {
          return res.status(403).send('Token non valide'); // Token invalide
        }
        // Placer les informations décodées dans req.decoded
        req.decoded = decoded;
        next();
      });
    } else {
      res.sendStatus(403); // Forbidden
    }
  };*/


  // Middleware pour vérifier le token
const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    const bearerToken = bearerHeader.split(' ')[1];
    req.token = bearerToken;

    // Décoder le token JWT
    jwt.verify(req.token, jwtSecretKey, (err, decoded) => {
      if (err) {
        return res.status(403).send('Token non valide'); // Token invalide
      }
      // Placer les informations décodées dans req.decoded
      req.decoded = decoded;
      next();
    });
  } else {
    res.sendStatus(403); // Forbidden
  }
};

  
  // Route d'authentification du candidat
  app.post('/cnxcdt', (req, res) => {
    const { cin, password } = req.body;
    const query = `SELECT * FROM condidat WHERE cin = ? AND password = ?`;
  
    db.query(query, [cin, password], (err, results) => {
      if (err) {
        console.error('Erreur lors de la vérification des informations d\'identification : ' + err.stack);
        res.status(500).send('Une erreur s\'est produite lors de la vérification des informations d\'identification');
        return;
      }
  
      if (results.length > 0) {
        const user = results[0];
        const token = jwt.sign({ cin: user.cin, id: user.id }, jwtSecretKey, { expiresIn: '1h' });
        res.cookie('token', token, { maxAge: 3600000, httpOnly: true });
        res.json({ token }); // Renvoyer le token dans la réponse
      } else {
        res.status(401).send('Unauthorized'); // Authentification échouée
      }
    });
  });
  




  const createCandidatureTableQuery = `
CREATE TABLE IF NOT EXISTS candidature (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_condidat INT,
  anneeBac VARCHAR(4) NOT NULL,
  specialiteBac VARCHAR(255) NOT NULL,
  diplomeUniversitaire VARCHAR(255) NOT NULL,
  specialite VARCHAR(255) NOT NULL,
  anneeObtention VARCHAR(4) NOT NULL,
  redoublement1 VARCHAR(10) NOT NULL,
  moyenne1 DECIMAL(4,2) NOT NULL,
  session1 ENUM('Principal', 'Contrôle') NOT NULL,
  credit1 INT NOT NULL,
  releveNote1 VARCHAR(255) NOT NULL,
  redoublement2 VARCHAR(10) NOT NULL,
  moyenne2 DECIMAL(4,2) NOT NULL,
  session2 ENUM('Principal', 'Contrôle') NOT NULL,
  credit2 INT NOT NULL,
  releveNote2 VARCHAR(255) NOT NULL,
  redoublement3 VARCHAR(10) NOT NULL,
  moyenne3 DECIMAL(4,2) NOT NULL,
  session3 ENUM('Principal', 'Contrôle') NOT NULL,
  credit3 INT NOT NULL,
  releveNote3 VARCHAR(255) NOT NULL,
  FOREIGN KEY (id_condidat) REFERENCES condidat(id)
)
`;

  db.query(createCandidatureTableQuery, (err, result) => {
    if (err) {
      console.error('Erreur lors de la création de la table "Candidature" :', err);
      return;
    }
    console.log('Table "Candidature" créée avec succès');
  });
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploades/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

const addForeignKeyQuery = `
  ALTER TABLE candidature
  ADD CONSTRAINT fk_candidature_condidat FOREIGN KEY (id_condidat) REFERENCES condidat(id)
`;

// Vérifier si la contrainte de clé étrangère existe déjà
db.query("SELECT COUNT(*) as count FROM information_schema.TABLE_CONSTRAINTS WHERE CONSTRAINT_SCHEMA = 'projet' AND TABLE_NAME = 'candidature' AND CONSTRAINT_NAME = 'fk_candidature_condidat'", (err, result) => {
  if (err) {
    console.error('Erreur lors de la vérification de la contrainte de clé étrangère :', err);
    return;
  }

  const count = result[0].count;
  if (count === 0) {
    db.query(addForeignKeyQuery, (err, result) => {
      if (err) {
        console.error('Erreur lors de l\'ajout de la clé étrangère :', err);
        return;
      }
      console.log('Clé étrangère ajoutée avec succès');
    });
  } else {
    console.log('La contrainte de clé étrangère existe déjà');
  }
});

  // Middleware pour vérifier le token
  const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
      const bearerToken = bearerHeader.split(' ')[1];
      req.token = bearerToken;
  
      // Décoder le token JWT
      jwt.verify(req.token, jwtSecretKey, (err, decoded) => {
        if (err) {
          return res.status(403).send('Token non valide'); // Token invalide
        }
        // Placer les informations décodées dans req.decoded
        req.decoded = decoded;
        next();
      });
    } else {
      res.sendStatus(403); // Forbidden
    }
  };
  // Route pour l'insertion de la candidature
  /*app.get('/Ajoutercandidature', verifyToken, upload.fields([
    { name: 'releveNote1', maxCount: 1 },
    { name: 'releveNote2', maxCount: 1 },
    { name: 'releveNote3', maxCount: 1 }
  ]), (req, res) => {
    try {
      const formData = req.body;

      // Extraire l'ID du candidat à partir du token
      const decodedToken = jwt.decode(req.token);
      const id_condidat = decodedToken.id;

      const releveNote1Path = req.files['releveNote1'][0].filename;
      const releveNote2Path = req.files['releveNote2'][0].filename;
      const releveNote3Path = req.files['releveNote3'][0].filename;

      const sql = `INSERT INTO candidature 
                   (id_condidat, anneeBac, specialiteBac, diplomeUniversitaire, specialite, anneeObtention, 
                    redoublement1, moyenne1, session1, credit1, releveNote1, 
                    redoublement2, moyenne2, session2, credit2, releveNote2, 
                    redoublement3, moyenne3, session3, credit3, releveNote3) 
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

      const values = [
        id_condidat, formData.anneeBac, formData.specialiteBac, formData.diplomeUniversitaire, formData.specialite, formData.anneeObtention,
        formData.redoublement1, formData.moyenne1, formData.session1, formData.credit1, releveNote1Path,
        formData.redoublement2, formData.moyenne2, formData.session2, formData.credit2, releveNote2Path,
        formData.redoublement3, formData.moyenne3, formData.session3, formData.credit3, releveNote3Path
      ];

      db.query(sql, values, (err, result) => {
        if (err) {
          console.error('Erreur lors de l\'insertion des données :', err);
          throw err;
        }
        console.log('Données insérées avec succès.');
        res.send('Candidature enregistrée avec succès.');
      });
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement de la candidature :', error);
      res.status(500).send('Erreur lors de l\'enregistrement de la candidature.');
    }
  });

*/


// Route pour l'insertion de la candidature
app.post('/Ajoutercandidature', verifyToken, upload.fields([
  { name: 'releveNote1', maxCount: 1 },
  { name: 'releveNote2', maxCount: 1 },
  { name: 'releveNote3', maxCount: 1 }
]), (req, res) => {
  try {
    const formData = req.body;

    /*// Extraire l'ID du candidat à partir du token
    const decodedToken = jwt.decode(req.token);
    const id_condidat = decodedToken.id;*/


const decodedToken = jwt.decode(req.token);
const id_condidat = decodedToken.id;

    const releveNote1Path = req.files['releveNote1'][0].filename;
    const releveNote2Path = req.files['releveNote2'][0].filename;
    const releveNote3Path = req.files['releveNote3'][0].filename;

    const sql = `INSERT INTO candidature 
                 (id_condidat, anneeBac, specialiteBac, diplomeUniversitaire, specialite, anneeObtention, 
                  redoublement1, moyenne1, session1, credit1, releveNote1, 
                  redoublement2, moyenne2, session2, credit2, releveNote2, 
                  redoublement3, moyenne3, session3, credit3, releveNote3) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const values = [
      id_condidat, formData.anneeBac, formData.specialiteBac, formData.diplomeUniversitaire, formData.specialite, formData.anneeObtention,
      formData.redoublement1, formData.moyenne1, formData.session1, formData.credit1, releveNote1Path,
      formData.redoublement2, formData.moyenne2, formData.session2, formData.credit2, releveNote2Path,
      formData.redoublement3, formData.moyenne3, formData.session3, formData.credit3, releveNote3Path
    ];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Erreur lors de l\'insertion des données :', err);
        throw err;
      }
      console.log('Données insérées avec succès.');
      res.send('Candidature enregistrée avec succès.');
    });
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement de la candidature :', error);
    res.status(500).send('Erreur lors de l\'enregistrement de la candidature.');
  }
});



app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});

