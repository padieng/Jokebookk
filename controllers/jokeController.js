const db = require('../models/jokeModel');

exports.getCategories = (req, res) => {
  db.all("SELECT DISTINCT category FROM jokes", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    const categories = rows.map(r => r.category);
    res.json(categories);
  });
};

exports.getJokesByCategory = (req, res) => {
  const category = req.params.category;
  const limit = parseInt(req.query.limit) || 100;
  db.all("SELECT * FROM jokes WHERE category = ? LIMIT ?", [category, limit], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (rows.length === 0) return res.status(404).json({ error: "Category not found" });
    res.json(rows);
  });
};

exports.getRandomJoke = (req, res) => {
  db.get("SELECT * FROM jokes ORDER BY RANDOM() LIMIT 1", [], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(row);
  });
};

exports.addJoke = (req, res) => {
  const { category, setup, delivery } = req.body;
  if (!category || !setup || !delivery) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const stmt = "INSERT INTO jokes (category, setup, delivery) VALUES (?, ?, ?)";
  db.run(stmt, [category, setup, delivery], function(err) {
    if (err) return res.status(500).json({ error: err.message });

    db.all("SELECT * FROM jokes WHERE category = ?", [category], (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(rows);
    });
  });
};