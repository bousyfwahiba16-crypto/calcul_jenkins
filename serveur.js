const app = require('./index');
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    console.log(`Serveur calculatrice en marche sur le port ${PORT}`);
});