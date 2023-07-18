import { useState, useEffect, useContext } from "react";
import herohome from '../assets/homescreen_happystudent.png'
import herohome2 from '../assets/homescreen_happystudent2.png'

// material UI 
import { Typography } from "@mui/material";
import {Divider, Chip}  from "@mui/material";
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
      
      <Typography variant="h1">Get started by logging in or signing up</Typography>
      <span></span>
      <Divider>
        <Chip label="Learn More" />
      </Divider>
      <img src={herohome} alt='study-greek' className='logo'/>
      <img src={herohome2} alt='study-greek' className='logo'/>
    </main>
  );
};

export default Home;
