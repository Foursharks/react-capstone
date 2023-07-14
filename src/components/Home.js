import { useState, useEffect, useContext } from "react";
// import axios from 'axios'

// import AuthContext from '../store/authContext'

const Home = () => {
  // const {userId} = useContext(AuthContext)

  // const [cards, setCards] = useState()

  // useEffect(() => {
  //     axios.get(`http://localhost:5050/cards`)
  //     .then(res => {
  //         console.log(res, 'response from /cards')
  //         if (userId) {
  //             console.log('userId exists')

  //         } else {
  //             console.log('userId does not exist - please create an account')

  //         }
  //     })
  //     .catch(err => {
  //         console.log(err)
  //     })
  // }, [userId])

  // const mappedCards = cards.map(card => {
  //     return (
  //         <div key={card.id} className='post-card'>
  //             <h2>{card.question}</h2>
  //             <h4>{card.user.username}</h4>
  //             <p>{card.answer}</p>
  //         </div>
  //     )
  // })

  return (
    <main>
      <h1>Welcome! home.js </h1>
      <span>Get started by logging in or signing up</span>
    </main>
  );
};

export default Home;
