import mongoose from 'mongoose'


// Utilizar quando for rodar o app via container
//mongoose.connect('mongodb://mongo:27017/alura-node');

// Utilizar quando for rodar o app via local
mongoose.connect('mongodb://localhost:27017/alura-node');

let db = mongoose.connection;

export default db;