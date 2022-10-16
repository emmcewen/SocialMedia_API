const { connect, connection } = require('mongoose');

connect (process.env.MONGODB_URI || 'mongodb://localhost/socialNetwork_db',{
    useNewURLParser: true,
    useUnifiedTopology:true,
});

module.exports = connection;