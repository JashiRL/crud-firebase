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

router.post('/new-contact', async(req, res)=> {
    const { firstname,lastname, email, phone } = req.body //va ser un objeto y asi estamos "concatenando" los valores en el body
    await db.collection('contacts').add({
        firstname,
        lastname,
        email,
        phone
    })
    res.redirect('/')
})
            //cuando ponemos : cargamos un valor y se va a identificar como id 
router.get('/delete-contact/:id', async(req, res)=> { //con eso despues de la diagonal va a llegar el id 
    await db.collection('contacts').doc(req.params.id).delete() //esod e doc y delet son funciones de firebase
    res.redirect('/')
}) 

router.get('/edit-contact/:id', async(req, res)=> {
    const doc = await db.collection('contacts').doc(req.params.id).get()
    res.render('index', { contact: {
        id: doc.id,
        ...doc.data()
    }})
})

router.post('/update-contact/:id', async(req, res)  =>    {
    const { firstname,lastname, email, phone } = req.body
    const id = req.params
    await db.collection('contacts').doc(id).update({
        firstname,
        lastname,
        email,
        phone
    })
    res.redirect('/')
})

module.exports = router
//esto es para exportar este codigo y hacerlo publico