// ###### INICIO DE LA APP
const app = require("./app");
const PORT = process.env.PORT || 3002
app.listen(PORT, () => {
    console.log(`Servidor levantado en el puerto ${PORT}`)
})