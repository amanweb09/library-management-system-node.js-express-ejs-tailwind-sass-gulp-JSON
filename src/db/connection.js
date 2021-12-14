const mongoose = require('mongoose');

async function connection() {
    const localURL = "mongodb://localhost:27017/library-management-system";
    await mongoose.connect(localURL);
}

module.exports = connection;