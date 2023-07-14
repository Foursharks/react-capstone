import {useState, useContext, useCallback, useEffect } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

import AuthContext from '../store/authContext'

const Study = () => {
    const { userId, token } = useContext(AuthContext);
    const [cards, setCards] = useState([]);
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState(""); 
    const navigate = useNavigate()
    const [corrects, setCorrects] = useState('')
    const [incorrects, setIncorrects] = useState('')

//    may need to get the number of corrects and incorrects for that card - could display it as well

const getUserCards = useCallback(() => {
    axios
      .get(`http://localhost:5050/cards/${userId}`)
      .then((res) => setCards(res.data))
      .catch((err) => console.log(err));
  }, [userId]);

  useEffect(() => {
    getUserCards();
  }, [getUserCards]);

//   const updateCard = (id) => {
//     axios
//       .put(
//         `http://localhost:5052/cards/${id}`,
//         {corrects, incorrects},
//         {
//           headers: {
//             authorization: token,
//           },
//         }
//       )
//       .then(() => {
//         getUserCards();
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

    const showCard = cards.filter((card)=> {
        return (
      <div key={card.id} className="post-card">
        <h2>Question: </h2>
        <p>{card.question}</p>
        {/* <button onClick={
            <h2>Answer: </h2>
            <p>{card.answer}</p>
        // when the user clicks the button called "correct" it should add 1 to what's in the correct column for that card
            <button onClick={}>Correct</button>
        //when the user clicks the button called "incorrect" it should add 1 to what's in the correct column for that card
            <button onClick={}>Incorrect</button>
      }>
        Show answer
      </button> */}
    </div>
        )
    })


    return(
        <main>This should show a bunch of cards, one at a time, that have less than 5 correct markings, in order of most incorrects. The cards should show the question, and a "show answer" button. "show answer" should show the answer. Then buttons should be displayed "correct" and "incorrect".
        If the person selects "correct" it should update the cards table to increment 1 in the correct column, if the person selects "incorrect" it should increment 1 in the incorrect column of the cards table. 
        </main>
    )
}

export default Study