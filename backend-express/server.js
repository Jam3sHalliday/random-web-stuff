const app = require("./src/app")

const PORT = 3958

const server = app.listen(PORT, () => {
    console.log('Server started on port', PORT);
})

process.on('SIGINT', () => {
    server.close(() => console.log('Express server exited'))
})
