const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const morgan = require('morgan')

const app = express()

//Settings se configuran los uertos que vana  escuchar, plantillas o motor de plantillas
app.set('port', process.env.PORT || 3000) //que si encuentra una variable que se llama PORT va a usar este numero
app.set('views', path.join(__dirname, 'views')) //__dirname va a pegar 2 strings
app.engine('.hbs', exphbs.create({
    defaultLayout: 'main', 
    extname: '.hbs'
}).engine

)
app.set('view engine', '.hbs')

//Middlewares es una especie de intermediario entre tu back y tu front

app.use(morgan('dev'))
app.use(express.urlencoded({
    extended: false
}))

//rutas que se van a utilizar

app.use(require('./routes/index'))

// archivos Estáticos 
app.use('/public', express.static(path.join(__dirname, 'public')))

//para hacer publico o que desde cualquier otro 
//archivo podamos observar lo que hay dentro
module.exports = app


