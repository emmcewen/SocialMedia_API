const mongoose = require('mongoose');
require ("dotenv").config()
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/socialNetwork_db',{
    useNewURLParser: true,
    useUnifiedTopology:true,
});

module.exports = mongoose.connection;