import mysql from "mysql2";
  
// create the connection to database
const db = mysql.createConnection({
  host: '192.168.219.142',
  user: 'root',
  password: '1234',
  database: 'mydb',
  port:'3306'
});
 
export default db;