const app = require('./app.js');
const PORT = require('./config.js').PORT;

app.listen(PORT, () => {
    console.log("Server running at port: " + PORT);
}).on('error', err => console.error(err));