import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Welcome to the eventory project -- auth service')
})

export default app