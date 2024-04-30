const mysql = require('mysql');

// adatbázishoz kapcsolódás
const connection = mysql.createConnection({
    host: '192.168.255.103',
    user: 'u95_6SdB0WjixX',
    password: 'Kt6^ftiE=sm+Sevag=A81hYz',
    database: 's95_db'
});

connection.connect((err) => {
    if (err) {
        console.log(`Hiba az adatbázis kapcsolódásakor: ${err}`);
        return;
    }

    console.log('Sikeres adatbázis kapcsolat!');
});

module.exports = connection;