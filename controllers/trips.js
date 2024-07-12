const tripsRouter = require('express').Router()
const Trip = require('../models/trip')

tripsRouter.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

//Trae todos los viajes
tripsRouter.get('/api/trips', (req, res) => {
    Trip.find({}).then(trips => {
        res.json(trips)
    })
})

//Trae UN viaje
tripsRouter.get('/api/trips/:id', (req, res, next) => {
    Trip.findById(req.params.id)
        .then(trip => {
            if (trip) {
                res.json(trip)
            } else {
                res.status(404).end()
            }
        })
        .catch(error => next(error))
})

//Agregar viaje
tripsRouter.post('/api/trips', (req, res, next) => {
    const body = req.body

    if (
        body.operador === undefined || 
        body.tipoOperador === undefined || 
        body.fechaSalida === undefined || 
        body.kmSalida === undefined ||
        body.ruta === undefined ||
        body.unidad === undefined || 
        body.proyecto === undefined || 
        body.fechaLlegada === undefined || 
        body.kmLlegada === undefined ||
        body.diferencia === undefined 
    ) {
        return res.status(400).json({
            error: 'content missing'
        })
    }

    const trip = new Trip({
        operador: body.operador,
        tipoOperador: body.tipoOperador,
        fechaSalida: body.fechaSalida,
        kmSalida: body.kmSalida,
        ruta: body.ruta,
        unidad: body.unidad,
        proyecto: body.proyecto,
        fechaLlegada: body.fechaLlegada,
        kmLlegada: body.kmLlegada,
        diferencia: body.diferencia,
        observaciones: body.observaciones
    })

    trip.save()
        .then(savedTrip => {
            res.json(savedTrip)
        })
        .catch(error => next(error))
}) 

//Actualizar viaje
tripsRouter.put('/api/trips/:id', (req, res, next) => {
    const { 
        operador, 
        tipoOperador, 
        fechaSalida,
        kmSalida,
        ruta,
        unidad,
        proyecto,
        fechaLlegada,
        kmLlegada,
        diferencia,
        observaciones
    } = req.body

    Trip.findByIdAndUpdate(
        req.params.id,
        { 
            operador, 
            tipoOperador, 
            fechaSalida,
            kmSalida,
            ruta,
            unidad,
            proyecto,
            fechaLlegada,
            kmLlegada,
            diferencia,
            observaciones
        },
        { new: true, runValidators: true, context: 'query' }
    )
        .then(updatedTrip => {
            res.json(updatedTrip)
        })
        .catch(error => next(error))
})

//Eliminar viaje
tripsRouter.delete('/api/trips/:id', (req, res, next) => {
    Trip.findByIdAndDelete(req.params.id)
        .then(result => {
            res.status(204).end()
        })
        .catch(error => next(error))
})

module.exports = tripsRouter