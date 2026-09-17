const sqlite3 = require('sqlite3').verbose();
console.log("sqlite3 loaded");
const db = new sqlite3.Database(':memory:', (err) => {
  if (err) console.error(err);
  else console.log("Memory DB opened");
});
