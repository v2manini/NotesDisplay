function ParseQuery(query) { // Esto es inseguro
	if (!query) return "null";

	query = query.replace(/\\/g , "\\\\" );     // \ 
	query = query.replace(/"/g ,'\\"');         // "
	query = query.replace(/'/g , "\\'" );       // '
	query = query.replace(/%/g, "\\%" );        // %
	query = query.replace(/_/g , "\\_" );       // _

	return query;
};


function ParseQuerytoData(query) { // Esto es inseguro
	if (!query) return "";

	query = query.replace(/\\"/g ,'"');			// "
	query = query.replace(/\\'/g , "'" ) 		// '
	query = query.replace(/\\%/g, "%" ); 		// %
	query = query.replace(/\\_/g , "_" ); 		// _
	query = query.replace(/\\\\/g , "\\" ); 	// \ 

	return query;
};

module.exports = {ParseQuery,ParseQuerytoData}