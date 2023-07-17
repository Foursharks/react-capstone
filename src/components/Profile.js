import { useContext, useEffect, useState, useCallback } from "react";
import axios from "axios";

import AuthContext from "../store/authContext";
import Editmodal from './Editmodal'

//for material ui
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Profile = () => {
  const { userId, token } = useContext(AuthContext);

  const [cards, setCards] = useState([]);
  // const [question, setQuestion] = useState("");
  // const [answer, setAnswer] = useState("");


  // set which card the user is going to edit
  const [selectedCard, setSelectedCard] = useState(null);
  //set whether the modal will be displayed or not
  const [isModalOpen, setIsModalOpen] = useState(false);


  const getUserCards = useCallback(() => {
    axios
      .get(`http://localhost:5050/cards/${userId}`)
      .then((res) => setCards(res.data))
      .catch((err) => console.log(err));
  }, [userId]);

  useEffect(() => {
    getUserCards();
  }, [getUserCards]);

  const updateCard = (question, answer, cardId) => {
    axios
      .put(
        `http://localhost:5052/cards/${cardId}`,
        { question, answer },
        {
          headers: {
            authorization: token,
          },
        }
      )
      .then(() => {
        console.log('card updated');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteCard = (id) => {
    axios
      .delete(`http://localhost:5052/cards/${id}`, {
        headers: {
          authorization: token,
        },
      })
      .then(() => {
        getUserCards();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const showForm = (card, e) => {
    console.log("show form hit", card, e)
    setSelectedCard(card);
    setIsModalOpen(true);

  };

  const closeModal = () => setIsModalOpen(false);

  const mappedCards = cards.map((card) => {
    return (
      <Card variant="outlined" sx={{ minWidth: 275 }} key={card.id}>
        <CardContent>
        <Typography variant="h2">Question: </Typography>
        <Typography variant="h3">{card.question}</Typography>
        <Typography variant="h2">Answer: </Typography>
        <Typography variant="h3">{card.answer}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={(e) => showForm(card, e)}>
            edit card
          </Button>
          <Button size="small"
            onClick={() => deleteCard(card.id)}
          >
            delete card
          </Button>
        </CardActions>
      </Card>
    );
  });

  return (
    <main>
      <Typography variant="h1">Dashboard</Typography>
      <Typography variant="h3">Status of how many cards you created</Typography>
      <Typography variant="h2">View all cards</Typography>
      { isModalOpen && <Editmodal selectedCard={selectedCard} closeModal={closeModal} updateCard={updateCard} />}
      {mappedCards}
      
      
    </main>
  );
};

export default Profile;
