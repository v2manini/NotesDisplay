var mysql = require("mysql2/promise");

require("dotenv").config(); // Asegurar token

//var MySQL = require('./modulos/mysql'); //Añado el archivo mysql.js presente en la carpeta módulos
//let notDeportes = await MySQL.Realizar_Query("select * from textos where categoria = 'Deporte';");

var SQL_Config_Data =
{
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PW,
	database: process.env.MYSQL_DB, 
	port: process.env.PORT_DB,
	charset: 'UTF8_GENERAL_CI'
}

async function Realizar_Query(query){
	var String_A_Devolver;
	var connection;
	try
	{
		connection = await mysql.createConnection(SQL_Config_Data);
		String_A_Devolver = await connection.execute(query);
	}
	catch(err)
	{
		console.log(err);
		
	}
	finally
	{
		if(connection && connection.end) connection.end();
	}
	return String_A_Devolver[0];
}

exports.Realizar_Query = Realizar_Query;