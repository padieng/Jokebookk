const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/jokebook.db');

db.serialize(() => {
<<<<<<< HEAD
  db.run(`
=======
  db.run(\`
>>>>>>> e78e1f36c3ba4f96b62772865c80e3d2469dcb7d
    CREATE TABLE IF NOT EXISTS jokes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      category TEXT,
      setup TEXT,
      delivery TEXT
    );
<<<<<<< HEAD
  `);
});

module.exports = db;
=======
  \`);
});

module.exports = db;
>>>>>>> e78e1f36c3ba4f96b62772865c80e3d2469dcb7d
