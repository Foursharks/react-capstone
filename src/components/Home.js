import {useState, useEffect, useContext} from 'react'
import axios from 'axios'

import AuthContext from '../store/authContext'


const Home = () => {
    const {userId} = useContext(AuthContext)

    const [cards, setCards] = useState([{id:1232,question:"test question", user: { username: "name"}, answer:"test answer" }])

    useEffect(() => {
        axios.get(`http://127.0.0.1:5050/cards`)
        .then(res => {
            console.log(res, 'response from /cards')
            if (userId) {
                console.log('userId exists')
                // why would I want this???
                const otherUsersPosts = res.data.filter(post => userId !== post.userId)
                setCards(otherUsersPosts)
                
            } else {
                console.log('userId does not exist - please create an account')
                
            }
        })
        .catch(err => {
            console.log(err)
        })
    }, [userId])

    const mappedCards = cards.map(card => {
        return (
            <div key={card.id} className='post-card'>
                <h2>{card.question}</h2>
                <h4>{card.user.username}</h4>
                <p>{card.answer}</p>
            </div>
        )
    })

    return mappedCards.length >= 1 ? (
        <main>
            {mappedCards}
        </main>
    ) : (
        <main>
            <h1>home.js</h1>
        </main>
    )
}

export default Home