const express = require('express')
const bodyParser = require( 'body-parser')
const utilsError = require('./utils/errorHandler')
const cors = require('cors')
require('dotenv').config()

// ###### RUTAS
const reunionRutas = require('./routes/reunion')




const PORT = process.env.PORT || 3001


const app = express()


app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type','Authorization')
    next()
})
app.options('*', cors())



app.use('/api/v1/meetings', reunionRutas)



// ###### ERROR HANDLER
app.use(utilsError.errorHandler)

//#### NOT FOUND ROUTE
app.use(utilsError.errorHandler404)
  
// ###### CONEXION A MONGO
//db.getConnection()

// ###### CONEXION A REDIS
//conectToRedis

/////////////////////////////////////////////
// Base de datos
// Relaciones y sincronización
/////////////////////////////////////////////

/*const sequelize = require('./database/sequelizeConnection')

sequelize.sync({ 
    schema: 'public', searchPath: 'public'
    , alter: true
})
.then(resultado => { console.log("\u001b[1;34m  [sequelize sync core]" + JSON.stringify(resultado.models)) })
.catch(error => { throw new Error(error) })

const reunion = require("./models/reunion");

/*
const cliente = require("./models/cliente");
const cliente2 = require("./models/servicio");
/*db.sync({ 
    schema: 'gestion', searchPath: 'gestion'
    //, alter: true
})
.then(resultado => { console.log("\u001b[1;34m  [sequelize sync core]" + JSON.stringify(resultado.models)) })
.catch(error => { throw new Error(error) })
*/
//const Stock = require("./models/stock");

//const cliente = require("./models/compra");
//const cliente2 = require("./models/compraProducto");
/*const cliente = require("./models/egreso");
const cliente2 = require("./models/egresoProducto");*/

module.exports = app;