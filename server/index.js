require('dotenv').config()

const express = require('express')
const cors = require('cors')

const {sequelize} = require('./util/database')
const {PORT} = process.env
const {User} = require('./models/user')
const {Card} = require('./models/card')
const {getCurrentUserCards, addCard, editCard, deleteCard} = require('./controllers/cards')
const {register, login} = require('./controllers/auth')
const {isAuthenticated} = require('./middleware/isAuthenticated')

const app = express()

app.use(express.json())
app.use(cors())

User.hasMany(Card)
Card.belongsTo(User)

//AUTH
app.post('/register', register)
app.post('/login', login)

// // GET POSTS - no auth
// app.get('/posts', getAllPosts)

// CRUD POSTS - auth required
app.get('/usercards/:userId', getCurrentUserCards)
app.post('/cards', isAuthenticated, addCard)
app.put('/cards/:id', isAuthenticated, editCard)
app.delete('/cards/:id', isAuthenticated, deleteCard)

// the force: true is for development -- it DROPS tables!!!
sequelize.sync({ force: true })
// sequelize.sync()
    .then(() => {
        app.listen(PORT, () => console.log(`db sync successful & server running on port ${PORT}`))
    })
    .catch(err => console.log(err))