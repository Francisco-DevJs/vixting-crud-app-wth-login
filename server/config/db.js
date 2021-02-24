const mongoose = require('mongoose');
const { database } = require('./keys');

const db = async () => {
    try {
        await mongoose.connect(
            database,
            { useUnifiedTopology: true },
            { useNewUrlParser: true },
            () => console.log('Conectado com o BD'))
        } catch (err) {
            console.log(`Error: ${err}`)
            throw err;
        }
    }

module.exports = db;

