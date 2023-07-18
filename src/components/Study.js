import { useState, useContext, useCallback, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import AuthContext from "../store/authContext";

//material ui
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// This should show a bunch of cards, one at a time, that have less than 5 correct markings, in order of most incorrects. The cards should show the question, and a "show answer" button. "show answer" should show the answer. Then buttons should be displayed "correct" and "incorrect".
// If the person selects "correct" it should update the cards table to increment 1 in the correct column, if the person selects "incorrect" it should increment 1 in the incorrect column of the cards table.

const Study = () => {
  const { userId, token } = useContext(AuthContext);
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();
  const [corrects, setCorrects] = useState("");
  const [incorrects, setIncorrects] = useState("");

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

  // const updateCard = (id) => {
  //   axios
  //     .put(
  //       `http://localhost:5052/cards/${id}`,
  //       { corrects, incorrects },
  //       {
  //         headers: {
  //           authorization: token,
  //         },
  //       }
  //     )
  //     .then(() => {
  //       getUserCards();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const updateCorrects = (card, e) => {
    axios
      .put(
        `http://localhost:5052/cards/${card.id}`,
        { corrects: card.corrects + 1 },
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

  const updateIncorrects = (card, e) => {
    axios
      .put(
        `http://localhost:5052/cards/${card.id}`,
        { incorrects: card.incorrects + 1 },
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

  const CardComponent = ({ card }) => {
    const [show, setShow] = useState(false);

    return (
      <div key={card.id} className="post-card">
        <Typography variant="h2">Question:</Typography>
        <Typography variant="h3">{card.question}</Typography>
        <Button variant="2" onClick={() => setShow(!show)}>
          show answer
        </Button>

        {show && (
          <div>
            <p>{card.answer}</p>
            <button onClick={(e) => updateCorrects(card, e)}>
              I got this correct
            </button>
            <button onClick={(e) => updateIncorrects(card, e)}>
              I got this incorrect
            </button>
          </div>
        )}
      </div>
    );
  };

  // show cards that have a value of less than 5 in the corrects column of database
  const showCard = cards
    .filter((card) => card.corrects < 5)
    .map((card) => <CardComponent card={card} />);
  return <main>{showCard}</main>;
};

export default Study;
