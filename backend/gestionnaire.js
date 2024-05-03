//premerre travail sans token et travail marche w jwha bhy ymsha wehid nogtlu
/*
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Mettez le mot de passe de votre base de données ici
  database: 'projet',
});




db.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données :', err);
    process.exit(1); // Arrête le processus en cas d'erreur de connexion
  }
  console.log('Connecté à la base de données MySQL');
});





app.post('/AjouterGestionnaire', async (req, res) => {
  const { cin, nom, prenom, email, password, numtel, etablissement } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const sql = 'INSERT INTO gestionnaire (cin, nom, prenom, email, mdp, numtel, etablissement) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(sql, [cin, nom, prenom, email, hashedPassword, numtel, etablissement], (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'ajout du gestionnaire :', err);
      res.status(500).send('Erreur lors de l\'ajout du gestionnaire');
      return;
    }
    console.log('Gestionnaire ajouté avec succès !');
    res.status(200).send('Gestionnaire ajouté avec succès !');
  });
});


app.get("/ListeGestionnaire",(req,res) =>{
  db.query("select * from gestionnaire", (err,resultat) =>{
    if(err) {
      console.log("erreur hors la recuperation des données");
      res.status(500).send("erreur hors la recuperation des données")
    }
    else{
      res.send(resultat);
    }
  });
});



app.get('/modifiergest/:cin', (req, res) => {
  const cin = req.params.cin;
  const sql = 'SELECT * FROM gestionnaire WHERE cin = ?';

  db.query(sql, [cin], (err, result) => {
    if (err) {
      console.error('Error retrieving gestionnaire:', err);
      res.status(500).json({ message: 'Error retrieving gestionnaire' });
      return;
    }

    if (result.length === 0) {
      res.status(404).json({ message: 'Gestionnaire not found' });
      return;
    }

    res.json(result[0]); 
  });
});

app.put('/modifiergest/:cin', (req, res) => {
  const sql = 'UPDATE gestionnaire SET nom = ?, prenom = ?, email = ?, mdp = ?, numtel = ?, etablissement = ? WHERE cin = ?';
  const cin = req.params.cin;
  const { nom, prenom, email, mdp, numtel, etablissement } = req.body;

  db.query(sql, [nom, prenom, email, mdp, numtel, etablissement, cin], (err, result) => {
    if (err) {
      console.error('Erreur lors de la requête UPDATE :', err);
      res.status(500).json({ message: "Erreur lors de la mise à jour des données dans la base de données" });
    } else {
      res.json(result);
    }
  });
});



app.post('/authentification', (req, res) => {
  const { cin, password } = req.body;
  const query = `SELECT * FROM gestionnaire WHERE cin = ? AND mdp = ?`;
  
  db.query(query, [cin, password], (err, results) => {
      if (err) {
          console.error('Erreur lors de la vérification des informations d\'identification : ' + err.stack);
          res.status(500).send('Une erreur s\'est produite lors de la vérification des informations d\'identification');
          return;
      }

      if (results.length > 0) {
          res.send('success'); 
      } else {
          res.send('invalid'); 
      }
  });
});




const checkTableQuery = `SHOW TABLES LIKE 'etablissement'`;

db.query(checkTableQuery, (err, result) => {
    if (err) {
        console.error('Erreur lors de la vérification de l\'existence de la table :', err);
        return;
    }

    if (result.length === 0) {
        const createTableQuery = `CREATE TABLE etablissement (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nom VARCHAR(255),
            gouvernement VARCHAR(255)
        )`;

        db.query(createTableQuery, (err, result) => {
            if (err) {
                console.error('Erreur lors de la création de la table :', err);
                return;
            }
            console.log('Table "etablissement" créée avec succès');
        });
    } else {
        console.log('La table "etablissement" existe déjà');
    }
});

app.post('/AjouterEtablissement', (req, res) => {
  const sql = "INSERT INTO etablissement (nom, gouvernement) VALUES (?, ?)";

  const values = [
      req.body.nom,
      req.body.gouvernement
  ];
  db.query(sql, values, (err, result) => {
      if (err) {
          console.error('Erreur lors de la requête INSERT:', err);
          res.status(500).json({ message: "Erreur lors de l'ajout des données dans la base de données" });
      } else {
          res.json(result);
      }
  });
});


app.get('/ListeEtablissements', (req, res) => {
  const sql = "SELECT * FROM etablissement";
  db.query(sql, (err, result) => {
      if (err) {
          console.error('Erreur lors de la requête SELECT:', err);
          res.status(500).json({ message: "Erreur lors de la récupération des données depuis le serveur" });
      } else {
          res.json(result);
      }
  });
});

app.put('/update/:nom', (req, res) => {
  const sql = 'UPDATE etablissement SET nom = ?, gouvernement = ? WHERE nom = ?';

  const nom = req.params.nom;
  db.query(sql, [req.body.nom, req.body.gouvernement, nom], (err, result) => {
      if (err) {
          console.error('Erreur lors de la requête UPDATE:', err);
          res.status(500).json({ message: "Erreur lors de la mise à jour des données dans la base de données" });
      } else {
          res.json(result);
      }
  });
});

app.delete('/delete/:nom', (req, res) => {
  const sql = "DELETE FROM etablissement WHERE nom = ?";
  const nom = req.params.nom;
  db.query(sql, [nom], (err, result) => {
      if (err) {
          console.error('Erreur lors de la requête DELETE:', err);
          res.status(500).json({ message: "Erreur lors de la suppression des données dans la base de données" });
      } else {
          res.json(result);
      }
  });
});


app.get('/AjouterGestionnaire', (req, res) => {
  const sql = "SELECT nom FROM etablissement";
  db.query(sql, (err, results) => {
      if (err) {
          console.error('Erreur lors de la récupération des établissements:', err);
          res.status(500).send('Erreur lors de la récupération des établissements');
      } else {
          
          res.json(results);
      }
  });
});


const checkMastereTableQuery = `SHOW TABLES LIKE 'mastere'`;
db.query(checkMastereTableQuery, (err, result) => {
  if (err) {
    console.error('Erreur lors de la vérification de l\'existence de la table "mastere" :', err);
    return;
  }

  if (result.length === 0) {
    const createMastereTableQuery = `CREATE TABLE mastere ( id INT AUTO_INCREMENT PRIMARY KEY, nom VARCHAR(255), dateOuverture DATE, dateCloture DATE,
        details TEXT )`;
    db.query(createMastereTableQuery, (err, result) => {
      if (err) {
        console.error('Erreur lors de la création de la table "mastere" :', err);
        return;
      }
      console.log('Table "mastere" créée avec succès');
    });
  } else {
    console.log('La table "mastere" existe déjà');
  }
});


app.post('/Ajoutermastere', (req, res) => {
  const sql = "INSERT INTO mastere (nom, dateOuverture, dateCloture,  details) VALUES (?, ?, ?, ?)";

  const values = [ req.body.nom, req.body.dateOuverture, req.body.dateCloture, req.body.details  ];
  db.query(sql, values, (err, result) => {
      if (err) {
          console.error('Erreur lors de la requête INSERT:', err);
          res.status(500).json({ message: "Erreur lors de l'ajout des données dans la base de données" });
      } else {
          res.json(result);
      }
  });
});


app.get('/Listemastere', (req, res) => {
  try {
      const sql = "SELECT * FROM mastere";
      db.query(sql, (err, result) => {
          if (err) {
              console.error('Erreur lors de la requête SELECT:', err);
              res.status(500).json({ message: "Erreur lors de la récupération des données depuis le serveur" });
          } else {
              res.json(result);
          }
      });
  } catch (error) {
      console.error('Une erreur s\'est produite lors de la récupération des données de la table "mastere":', error);
      res.status(500).json({ message: "Erreur lors de la récupération des données depuis le serveur" });
  }
});


app.delete('/delete/:id', (req, res) => {
  const sql = "DELETE FROM mastere WHERE id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, result) => {
      if (err) {
          console.error('Erreur lors de la requête DELETE:', err);
          res.status(500).json({ message: "Erreur lors de la suppression des données dans la base de données" });
      } else {
          res.json(result);
      }
  });
});
const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

*/





//deuxieme travail avec token





const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());
const jwt = require('jsonwebtoken');
const jwtSecretKey = 'your_secret_key_here'; 


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Mettez le mot de passe de votre base de données ici
  database: 'projet',
});




db.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données :', err);
    process.exit(1); // Arrête le processus en cas d'erreur de connexion
  }
  console.log('Connecté à la base de données MySQL');
});




app.post('/AjouterGestionnaire', (req, res) => {
  const { cin, nom, prenom, email, password, numtel, etablissement } = req.body;
  const sql = 'INSERT INTO gestionnaire (cin, nom, prenom, email, mdp, numtel, etablissement) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(sql, [cin, nom, prenom, email, password, numtel, etablissement], (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'ajout du gestionnaire :', err);
      res.status(500).send('Erreur lors de l\'ajout du gestionnaire');
      return;
    }
    console.log('Gestionnaire ajouté avec succès !');
    res.status(200).send('Gestionnaire ajouté avec succès !');
  });
});


app.get("/ListeGestionnaire",(req,res) =>{
  db.query("select * from gestionnaire", (err,resultat) =>{
    if(err) {
      console.log("erreur hors la recuperation des données");
      res.status(500).send("erreur hors la recuperation des données")
    }
    else{
      res.send(resultat);
    }
  });
});


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
// Exemple d'utilisation du middleware dans une route protégée
app.get('/protected-route', verifyToken, (req, res) => {
  jwt.verify(req.token, jwtSecretKey, (err, decoded) => {
    if (err) {
      console.error('Erreur de vérification du token :', err);
      return res.status(403).json({ error: 'Token non valide' });
    }
    res.json({ message: `Utilisateur authentifié : ${decoded.etablissement}` });
  });
});

// Route d'authentification
app.post('/authentification', (req, res) => {
  const { cin, password } = req.body;
  const query = `SELECT * FROM gestionnaire WHERE cin = ? AND mdp = ?`;

  db.query(query, [cin, password], (err, results) => {
    if (err) {
      console.error('Erreur lors de la vérification des informations d\'identification : ' + err.stack);
      res.status(500).send('Une erreur s\'est produite lors de la vérification des informations d\'identification');
      return;
    }

    if (results.length > 0) {
      const user = results[0];
      const token = jwt.sign({ etablissement: user.etablissement }, jwtSecretKey, { expiresIn: '1h' });
      res.cookie('token', token, { maxAge: 3600000, httpOnly: true });
      res.json({ token }); // Renvoyer le token dans la réponse
    } else {
      res.status(401).send('Unauthorized'); // Authentification échouée
    }
  });
});






const checkTableQuery = `SHOW TABLES LIKE 'etablissement'`;

db.query(checkTableQuery, (err, result) => {
    if (err) {
        console.error('Erreur lors de la vérification de l\'existence de la table :', err);
        return;
    }

    if (result.length === 0) {
        const createTableQuery = `CREATE TABLE etablissement (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nom VARCHAR(255),
            gouvernement VARCHAR(255)
        )`;

        db.query(createTableQuery, (err, result) => {
            if (err) {
                console.error('Erreur lors de la création de la table :', err);
                return;
            }
            console.log('Table "etablissement" créée avec succès');
        });
    } else {
        console.log('La table "etablissement" existe déjà');
    }
});

app.post('/AjouterEtablissement', (req, res) => {
  const sql = "INSERT INTO etablissement (nom, gouvernement) VALUES (?, ?)";

  const values = [
      req.body.nom,
      req.body.gouvernement
  ];
  db.query(sql, values, (err, result) => {
      if (err) {
          console.error('Erreur lors de la requête INSERT:', err);
          res.status(500).json({ message: "Erreur lors de l'ajout des données dans la base de données" });
      } else {
          res.json(result);
      }
  });
});


app.get('/ListeEtablissements', (req, res) => {
  const sql = "SELECT * FROM etablissement";
  db.query(sql, (err, result) => {
      if (err) {
          console.error('Erreur lors de la requête SELECT:', err);
          res.status(500).json({ message: "Erreur lors de la récupération des données depuis le serveur" });
      } else {
          res.json(result);
      }
  });
});

app.put('/modifieretab/:id', (req, res) => {
  const sql = 'UPDATE etablissement SET nom = ?, gouvernement = ? WHERE id = ?';

  const { id} = req.params; // Utiliser un autre nom de variable pour éviter les conflits
  const { nom, gouvernement } = req.body;

  db.query(sql, [nom, gouvernement, id], (err, result) => {
      if (err) {
          console.error('Erreur lors de la requête UPDATE:', err);
          res.status(500).json({ message: "Erreur lors de la mise à jour des données dans la base de données" });
      } else {
          res.json(result);
      }
  });
});



app.delete('/ListeEtablissements/:id', (req, res) => {
  const sql = "DELETE FROM etablissement WHERE id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, result) => {
      if (err) {
          console.error('Erreur lors de la requête DELETE:', err);
          res.status(500).json({ message: "Erreur lors de la suppression des données dans la base de données" });
      } else {
          res.json(result);
      }
  });
});








app.get('/AjouterGestionnaire', (req, res) => {
  const sql = "SELECT nom FROM etablissement";
  db.query(sql, (err, results) => {
      if (err) {
          console.error('Erreur lors de la récupération des établissements:', err);
          res.status(500).send('Erreur lors de la récupération des établissements');
      } else {
          
          res.json(results);
      }
  });
});
app.use(bodyParser.json());




app.put("/modifiergest/:id", (req, res) => {
  const { id } = req.params;
  const { nom, prenom, email, numtel, etablissement } = req.body;
  const sql = "UPDATE gestionnaire SET nom = ?, prenom = ?, email = ?, numtel = ?, etablissement = ? WHERE id = ?";
  db.query(sql, [nom, prenom, email, numtel, etablissement, id], (err, result) => {
    if (err) {
      console.error("Error updating user:", err);
      return res.status(500).json({ message: "Erreur lors de la mise à jour de l'utilisateur" });
    }
    res.status(200).json({ message: "Utilisateur mis à jour avec succès" });
  });
});







const checkMastereTableQuery = `SHOW TABLES LIKE 'mastere'`;
db.query(checkMastereTableQuery, (err, result) => {
  if (err) {
    console.error('Erreur lors de la vérification de l\'existence de la table "mastere" :', err);
    return;
  }

  if (result.length === 0) {
    const createMastereTableQuery = `CREATE TABLE mastere ( id INT AUTO_INCREMENT PRIMARY KEY, nom VARCHAR(255), dateOuverture DATE, dateCloture DATE,
        details TEXT )`;
    db.query(createMastereTableQuery, (err, result) => {
      if (err) {
        console.error('Erreur lors de la création de la table "mastere" :', err);
        return;
      }
      console.log('Table "mastere" créée avec succès');
    });
  } else {
    console.log('La table "mastere" existe déjà');
  }
});





app.post('/Ajoutermastere', verifyToken, (req, res) => {
  const decoded = req.decoded;

  // Récupérer les données du formulaire
  const { nom, dateOuverture, dateCloture, details } = req.body;

  // Vérifier si toutes les données requises sont présentes
  if (!nom || !dateOuverture || !dateCloture || !details) {
    return res.status(400).send('Données de master manquantes');
  }

  // Récupérer l'établissement du gestionnaire
  const etablissement = decoded.etablissement;

  // Ajouter le master dans la base de données en filtrant par établissement
  const query = 'INSERT INTO mastere (nom, dateOuverture, dateCloture, details, etablissement) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [nom, dateOuverture, dateCloture, details, etablissement], (err, results) => {
    if (err) {
      console.error('Erreur lors de l\'ajout du master :', err);
      return res.status(500).send('Une erreur s\'est produite lors de l\'ajout du master');
    }
    res.status(200).send('Master ajouté avec succès');
  });
});



//regroupement par etabliisement

app.get('/Home', (req, res) => {
  const query = `
    SELECT etablissement, GROUP_CONCAT(nom SEPARATOR ', ') AS mastere_list FROM mastere GROUP BY etablissement `;
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la sélection des mastères :', err);
      return res.status(500).send('Une erreur s\'est produite lors de la sélection des mastères');
    }
    res.status(200).json(results);
  });
});


app.put("/modifiermast/:id", (req, res) => {
  const { id } = req.params;
  const { nom, dateOuverture, dateCloture, details } = req.body;
  const sql = "UPDATE mastere SET nom = ?, dateOuverture = ?, dateCloture = ?, details = ? WHERE id = ?";
  db.query(sql, [nom, dateOuverture, dateCloture, details, id], (err, result) => {
    if (err) {
      console.error("Error updating mastere:", err);
      return res.status(500).json({ message: "Erreur lors de la mise à jour du mastère" });
    }
    res.status(200).json({ message: "Mastère mis à jour avec succès" });
  });
});



/*
app.get('/Listemastere', verifyToken, (req, res) => {
  const decoded = req.decoded;

  // Récupérer l'établissement du gestionnaire
  const etablissement = decoded.etablissement;

  // Sélectionner les mastères en fonction de l'établissement du gestionnaire
  const query = 'SELECT * FROM mastere WHERE etablissement = ?';
  db.query(query, [etablissement], (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des mastères :', err);
      return res.status(500).send('Une erreur s\'est produite lors de la récupération des mastères');
    }
    res.status(200).json(results);
  });
});
*/


/*
app.get('/Listemastere/:etablissement', verifyToken, (req, res) => {
  // Récupérer l'établissement du gestionnaire
  const etablissement = req.params.etablissement;

  // Sélectionner les mastères en fonction de l'établissement du gestionnaire
  const query = 'SELECT * FROM mastere WHERE etablissement = ?';
  db.query(query, [etablissement], (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des mastères :', err);
      return res.status(500).send('Une erreur s\'est produite lors de la récupération des mastères');
    }

    // Envoyer les résultats au format JSON
    res.status(200).json(results);
  });
});
*/


// Route pour récupérer les mastères
app.get('/Listemastere', verifyToken, (req, res) => {
  const etablissement = req.decoded.etablissement;

  // Sélectionner les mastères en fonction de l'établissement du gestionnaire
  const query = 'SELECT * FROM mastere WHERE etablissement = ?';
  db.query(query, [etablissement], (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des mastères :', err);
      return res.status(500).send('Une erreur s\'est produite lors de la récupération des mastères');
    }
    res.status(200).json(results);
  });
});



app.delete('/ListeGestionnaire/:id', (req, res) => {
  const id = req.params.id;

  // Supprimer l'élément avec l'ID spécifié dans votre base de données
  db.query('DELETE FROM gestionnaire WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.error('Erreur lors de la suppression de l\'élément :', err);
      return res.status(500).send('Une erreur s\'est produite lors de la suppression de l\'élément');
    }

    if (result.affectedRows === 0) {
      // Aucun enregistrement n'a été supprimé (ID introuvable)
      return res.status(404).send('Aucun élément trouvé avec cet ID');
    }

    // Élément supprimé avec succès
    res.status(200).send('Élément supprimé avec succès');
  });
});
/*
app.get('/details/:nom', (req, res) => {
  const query = "SELECT nom, details FROM mastere WHERE nom = ?";

  db.query(query, [req.params.nom], (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des détails du mastère : ' + err.stack);
      return res.status(500).send('Une erreur s\'est produite lors de la récupération des détails du mastère');
    }

    if (results.length === 0) {
      return res.status(404).send('Le mastère spécifié n\'a pas été trouvé');
    }

    const mastereDetails = results[0]; // On suppose que le nom du mastère est unique

    res.json(mastereDetails);
  });
});
*/
app.get('/details/:nom', (req, res) => {
  const query = 'SELECT nom, details FROM mastere WHERE nom = ?';

  db.query(query, [req.params.nom], (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des détails du mastère : ' + err.stack);
      return res.status(500).send('Une erreur s\'est produite lors de la récupération des détails du mastère');
    }

    if (results.length === 0) {
      return res.status(404).send('Le mastère spécifié n\'a pas été trouvé');
    }

    const mastereDetails = results[0]; // On suppose que le nom du mastère est unique

    res.json(mastereDetails);
  });
});


const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});







