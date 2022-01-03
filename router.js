const user = require('./controller/userController'),
    poll = require('./controller/pollController'),
    institution = require('./controller/institutionController'),
    pollUser = require('./controller/pollUserController')

const express = require('express')
const app = express()
app.use(express.json())
require('./db')

//user crud
app.post('/user', async (req, res) => {
    try {
        res.send(await user.create(req.body))
    } catch (err) {
        res.send({ code: 400, message: err.message || err })
    }
})
app.get('/user', async (req, res) => {
    try {
        res.send(await user.read(req.query))
    } catch (err) {
        res.send({ code: 400, message: err.message || err })
    }
})
app.put('/user', async (req, res) => {
    try {
        res.send(await user.update(req.body))
    } catch (err) {
        res.send({ code: 400, message: err.message || err })
    }
})
app.delete('/user/:id', async (req, res) => {
    try {
        res.send(await user.delete(req.params.id))
    } catch (err) {
        res.send({ code: 400, message: err.message || err })
    }
})

//poll crud
app.post('/poll', async (req, res) => {
    try {
        res.send(await poll.create(req.body))
    } catch (err) {
        res.send({ code: 400, message: err.message || err })
    }
})
app.get('/poll', async (req, res) => {
    try {
        res.send(await poll.read(req.query))
    } catch (err) {
        res.send({ code: 400, message: err.message || err })
    }
})
app.put('/poll', async (req, res) => {
    try {
        res.send(await poll.update(req.body))
    } catch (err) {
        res.send({ code: 400, message: err.message || err })
    }
})
app.delete('/poll/:id', async (req, res) => {
    try {
        res.send(await poll.delete(req.params.id))
    } catch (err) {
        res.send({ code: 400, message: err.message || err })
    }
})

//institution crud
app.post('/institution', async (req, res) => {
    try {
        res.send(await institution.create(req.body))
    } catch (err) {
        res.send({ code: 400, message: err.message || err })
    }
})
app.get('/institution', async (req, res) => {
    try {
        res.send(await institution.read(req.query))
    } catch (err) {
        res.send({ code: 400, message: err.message || err })
    }
})
app.put('/institution', async (req, res) => {
    try {
        res.send(await institution.update(req.body))
    } catch (err) {
        res.send({ code: 400, message: err.message || err })
    }
})
app.delete('/institution/:id', async (req, res) => {
    try {
        res.send(await institution.delete(req.params.id))
    } catch (err) {
        res.send({ code: 400, message: err.message || err })
    }
})

//pollUser crud
app.post('/pollUser', async (req, res) => {
    try {
        res.send(await pollUser.create(req.body))
    } catch (err) {
        res.send({ code: 400, message: err.message || err })
    }
})
app.get('/pollUser', async (req, res) => {
    try {
        res.send(await pollUser.read(req.query))
    } catch (err) {
        res.send({ code: 400, message: err.message || err })
    }
})
app.put('/pollUser', async (req, res) => {
    try {
        res.send(await pollUser.update(req.body))
    } catch (err) {
        res.send({ code: 400, message: err.message || err })
    }
})
app.delete('/pollUser/:id', async (req, res) => {
    try {
        res.send(await pollUser.del(req.params.id))
    } catch (err) {
        res.send({ code: 400, message: err.message || err })
    }
})

app.listen(3000, () => console.log('running'))