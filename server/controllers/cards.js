const {Card} = require('../models/card')
const {User} = require('../models/user')

module.exports = {
    addCard: async (req, res) => {
        try {
            const {question, answer, userId} = req.body
            await Card.create({question, answer, userId})
            res.sendStatus(200)
        } catch (error) {
            console.log('ERROR---addCard')
            console.log(error)
            res.sendStatus(400)
    }},
    getCurrentUserCards: async (req, res) => {
        try {
            const {userId} = req.params
            const cards = await Card.findAll({
                where: {userId: userId},
                include: [{
                    model: User,
                    required: true,
                    attributes: [`username`]
                }]})
            res.status(200).send(cards)
        } catch (error) {
            console.log('ERROR ----getCurrentUserCards')
            console.log(error)
            res.sendStatus(400)
        }
    },

    editCard: async (req, res) => {
        try {
            const {id} = req.params; 
            const{question, answer, corrects, incorrects} =req.body; 
            await Card.update({question: question, answer: answer, corrects: corrects, incorrects:incorrects}, {
                where: {
                    id: +id
                }
             });
            res.sendStatus(200)
        } catch (error) {
            console.log('ERROR IN update/edit card')
            console.log(error)
            res.sendStatus(400)
        }
    },

    deleteCard: async (req, res) => {
        try {
            const {id} = req.params
            await Card.destroy({where: {id: +id}})
            res.sendStatus(200)
        } catch (error) {
            console.log('ERROR IN delete card')
            console.log(error)
            res.sendStatus(400)
        }
    }
}

