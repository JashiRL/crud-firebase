const { db }= require('../firebase')
const { Router } = require('express')  //para que detecte los verbos de http o de peticion
const router = Router()

router.get('/', async(req, res) => {
    //try y catch es que si la app se rpeuba y
    //cacha algun error nos lo muestra
    try {           //son valores el querySnapshot
            const querySnapshot = await db.collection(contacts).get()
            const contacts = querySnapshot.docs.map((doc) => ({
                id: doc.id,      //map es para mapear y guardar como si fuera un arreglo
               ...doc.data() //3 puntos empujan todo el arreglo en una posición
            }))
            res.render('index', { contacts })
    } catch (error){
        console.log('Error ', error)
    }
})