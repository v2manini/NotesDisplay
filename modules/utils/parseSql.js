function ParseQuery(query) {
	query = query.replace(/"/g ,'\\"');         // "
	query = query.replace(/'/g , "\\'" );       // '
	// query = query.replace(/\\/g , "\\\\" );     // \ 
	query = query.replace(/%/g, "\\%" );        // %
	query = query.replace(/_/g , "\\_" );       // _
	return query;
};

module.exports = {ParseQuery}