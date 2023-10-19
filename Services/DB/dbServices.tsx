
import * as SQLite from 'expo-sqlite'
import { TokenItem } from '../../Models/tokenDB'

const tableName = 'tokenData'
const db=SQLite.openDatabase('db.test')


export const createTable = async () => {
    
      db.transaction(tx => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS tokens (id INTEGER  AUTOINCREMENT, email TEXT PRIMARY KEY, password TEXT token TEXT)'
        )
      })
   
};

// export const getTokenItems = async () => {
//     try {
//         const tokenItems: TokenItem[] = [];
//         const results = await db.executeSql(`SELECT rowid as id,value FROM ${tableName}`);
//         results.forEach(result => {
//             for (let index = 0; index < result.rows.length; index++) {
//                 tokenItems.push(result.rows.item(index))
//             }
//         });
//         return tokenItems;
//     } catch (error) {
//         //console.error(error);
//         throw Error('Failed to get todoItems !!!');
//     }
// };

export const saveTokenItems = async ( email:string,password:string,token:string) => {
    db.transaction(tx => {
        tx.executeSql('INSERT INTO tokens (email, password,token) values (?, ?,?)', [email, password,token]),
        (txObj, resultSet) => {return true},
        (txObj, error) => console.log('Error', error)
      })
};

