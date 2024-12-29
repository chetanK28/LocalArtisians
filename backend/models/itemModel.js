const db = require('../config/db.js');

const Item = {
  getAll: (callback) => {
    db.query("SELECT * FROM items", callback);
  },
  create: (data, callback) => {
    db.query("INSERT INTO items SET ?", data, callback);
  },
  update: (id, data, callback) => {
    db.query("UPDATE items SET ? WHERE id = ?", [data, id], callback);
  },
  delete: (id, callback) => {
    db.query("DELETE FROM items WHERE id = ?", id, callback);
  }
};

module.exports = Item;
