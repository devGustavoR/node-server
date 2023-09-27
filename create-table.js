import { sql } from './db.js'

sql`
CREATE TABLE videos (
  title TEXT,
  description TEXT,
  duration INTERVAL
);
`.then(() =>{
  console.log("Tabela pronta")
})