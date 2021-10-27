import {openDatabase, enablePromise} from 'react-native-sqlite-storage';
enablePromise(true);
export const getDBConnection = async () => {
  return await openDatabase({name: 'hackernews-901.db', location: 'default'});
};

export const createTable = async db => {
  const query = `CREATE TABLE IF NOT EXISTS "users" (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,  "username"  VARCHAR(255) UNIQUE NOT NULL, "password" varchar(255) NOT NULL, "isLoggedIn"  boolean DEFAULT false);`;
  await db.executeSql(query);
};

export const findUserByUsername = async (db, username) => {
  const query = `SELECT * from users where username = '${username}';`;
  return (await db.executeSql(query))[0];
};

export const saveUser = async (db, username, password) => {
  const query = `INSERT INTO users (username, password) VALUES( '${username}',	'${password}');`;
  await db.executeSql(query);
};

export const deleteUser = async (db, username, password) => {
  const query = `DELETE FROM users WHERE username = '${username}';`;
  await db.executeSql(query);
};

export const updateUserLoggedInStatus = async (db, username, status) => {
  const query = `UPDATE users SET isLoggedIn = '${status}' WHERE username = '${username}'`;
  await db.executeSql(query);
};
