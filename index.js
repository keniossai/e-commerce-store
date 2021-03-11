const path = require('path')
const express = require('express')

const { config, engine } = require('express-edge')


const app = express()

config({ cache: process.env.NODE_ENV === 'production' })
app.use(engine)

app.use(express.static('public'))
app.set('views', `${__dirname}/resources/views`)


app.get('/', (req, res) => {

    res.render('homepage')
})

app.get('/cart', (req, res) => {

    res.render('customers/cart')
})

app.get('/login', (req, res) => {

    res.render('auth/login')
})
app.get('/register', (req, res) => {

    res.render('auth/register')
})

app.listen(3000, () => {

    console.log('App is running on port 3000')
})