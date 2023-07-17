import { useContext, useEffect, useState, useCallback } from "react";
import axios from "axios";

import AuthContext from "../store/authContext";
import Editmodal from './Editmodal'

const Profile = () => {
  const { userId, token } = useContext(AuthContext);

  const [cards, setCards] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
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

  const updateCard = (id) => {
    axios
      .put(
        `http://localhost:5052/cards/${id}`,
        { question, answer },
        {
          headers: {
            authorization: token,
          },
        }
      )
      .then(() => {
        getUserCards();
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
      <div key={card.id} className="post-card">
        <h2>Question: </h2>
        <p>{card.question}</p>
        <h2>Answer: </h2>
        <p>{card.answer}</p>
        <div>
          <button className="form-btn" onClick={(e) => showForm(card, e)}>
            edit card
          </button>
          <button
            className="form-btn"
            style={{ marginLeft: 10 }}
            onClick={() => deleteCard(card.id)}
          >
            delete card
          </button>
        </div>
      </div>
    );
  });

  return (
    <main>
      <h1>Dashboard</h1>
      <h3>Status of how many cards you created</h3>
      <h1>View all cards</h1>
      {mappedCards}
      { isModalOpen && <Editmodal selectedCard={selectedCard} closeModal={closeModal} updateCard={updateCard} />}
    </main>
  );
};

export default Profile;
