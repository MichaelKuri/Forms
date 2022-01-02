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
    res.send(await poll.create(req))
})
app.get('/poll', async (req, res) => {
    res.send(await poll.read(req))
})
app.put('/poll', async (req, res) => {
    res.send(await poll.update(req))
})
app.delete('/poll', async (req, res) => {
    res.send(await poll.del(req))
})

//institution crud
app.post('/institution', async (req, res) => {
    res.send(await institution.create(req))
})
app.get('/institution', async (req, res) => {
    res.send(await institution.read(req))
})
app.put('/institution', async (req, res) => {
    res.send(await institution.update(req))
})
app.delete('/institution', async (req, res) => {
    res.send(await institution.del(req))
})

//pollUser crud
app.post('/pollUser', async (req, res) => {
    res.send(await pollUser.create(req))
})
app.get('/pollUser', async (req, res) => {
    res.send(await pollUser.read(req))
})
app.put('/pollUser', async (req, res) => {
    res.send(await pollUser.update(req))
})
app.delete('/pollUser', async (req, res) => {
    res.send(await pollUser.del(req))
})

app.listen(3000, () => console.log('running'))