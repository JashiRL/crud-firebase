require('dotenv').config()
const { initializeApp, applicationDefault } = require('firebase-admin/app')
const { getFirestore } = require('firebase-admin/firestore')

initializeApp({
    credential: applicationDefault()
})

const db= getFirestore()

//aqui solo esportamos esta variable no el archivo completo
module.exports = {
    db
}
