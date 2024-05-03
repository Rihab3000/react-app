
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
