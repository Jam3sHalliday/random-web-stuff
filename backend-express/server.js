const app = require("./src/app")

const PORT = 3958

app.listen(PORT, () => console.log('Started on port ', PORT))

// const server = app.listen(PORT, () => {
//     console.log('Server started on port', PORT);
// })

// process.on('SIGINT', () => {
//     server.close(() => console.log('Express server exited'))
// })
