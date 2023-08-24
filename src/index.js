const app = require('./app')
//una funcion asincrona se ocupa cuando 
//tienes que esperar respuesta de un servidor
const main = async() =>{
    app.listen(3000);
    console.log('Server Port: ', 3000)
}

main()