const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');


// async function openDb() {
//     return open({
//         filename: './json/Data.db',
//         driver: sqlite3.Database
//     })
// };

// module.exports = async function openDb () {
//     return open({
//       filename: './json/Data.db',
//       driver: sqlite3.Database
//     })
// };


// module.exports = async function openDb () {
//     return await open({
//       filename: './json/Data.db',
//       driver: sqlite3.Database
//     });
// }

// const db = open({
//     filename: './json/database.db',
//     driver: sqlite3.Database,
// });

const db = new sqlite3.Database("./json/Data.db",sqlite3.OPEN_READWRITE, function(err){
   if(err) return console.error(err);
});

module.exports = {db}

// async function R_Query_r(query,data){
//     db.run(query,data,function(error){
//         if(error) return console.error(error);
//     })
// };
// async function R_Query_s(query){
//     let data = [] ; 
    
//     db.all(query,[],function(error,rows){
//         if(error) return console.error(error);

//         console.log("rows = ",rows)
        
//     });


//     console.log(" = ",data)
//     return data;
// };