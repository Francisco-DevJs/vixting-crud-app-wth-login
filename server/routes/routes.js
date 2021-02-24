const user = require('./user');


const appRouter = (app, fs) => {
    app.get('/', (req, res) => {
        res.send(`<h1>Rotas ok!!!</h1>`);
        res.end();
    })
    // Routes
    user(app);
   
}

module.exports = appRouter;