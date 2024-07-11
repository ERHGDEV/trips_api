const mongoose = require('mongoose')

const tripSchema = new mongoose.Schema({
    operador: {
        type: String,
        required: true
    },
    tipoOperador: {
        type: String,
        required: true
    },
    fechaSalida: {
        type: Date,
        required: true
    },
    kmSalida: {
        type: Number,
        required: true
    },
    ruta: {
        type: String,
        required: true
    },
    unidad: {
        type: String,
        required: true
    },
    proyecto: {
        type: String,
        required: true
    },
    fechaLlegada: {
        type: Date,
        required: true
    },
    kmLlegada: {
        type: Number,
        required: true
    },
    diferencia: {
        type: Number,
        required: true
    },
    observaciones: {
        type: String,
        required: false
    },
})

//Convertir id en String
tripSchema.set('toJSON', {
    transform: ( document, returnedObject ) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Trip', tripSchema)