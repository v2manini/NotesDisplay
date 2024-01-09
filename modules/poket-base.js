const PocketBase = require('pocketbase/cjs');

require("dotenv").config();
try {
    const pb = new PocketBase(`http://${process.env.PB_URL}:${process.env.PB_PORT}`);
    module.exports = {pb};

} catch (error) {
    console.log(error);
}
// https://pocketbase.io/docs/api-records/

// console.log(pb);
