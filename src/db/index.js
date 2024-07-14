import * as SQLite from "expo-sqlite"

const table_name = "sessions"
const db = SQLite.openDatabase(`${table_name}.db`)

// sql sentence for sessions table creation (localId, email, token)
const SQL_TABLE_CREATION = `CREATE TABLE IF NOT EXISTS ${table_name} (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, token TEXT NOT NULL)`
const SQL_SESSION_INSERTION = `INSERT INTO ${table_name} (email, localId, token) VALUES (?,?,?);`
const SQL_SESSION_DELETION = `DELETE FROM ${table_name} WHERE localId = ?`
const SQL_GET_SESSION = `SELECT * FROM ${table_name}`

export const init = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(SQL_TABLE_CREATION, [], () => resolve(), (_, error) => reject(error))
    })
  })
}

export const insertSession = ({
  email,
  localId,
  token
}) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(SQL_SESSION_INSERTION, [email, localId, token], (_, result) => resolve(result), (_, error) => reject(error))
    })
  })
}

export const getLocalSession = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(SQL_GET_SESSION, [], (_, result) => resolve(result), (_, error) => reject(error))
    })
  })
}

export const deleteSession = ({localId}) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(SQL_SESSION_DELETION, [localId], (_, result) => resolve(result), (_, error) => reject(error))
    })
  })
}
