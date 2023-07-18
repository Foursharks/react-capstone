import {useState, useContext} from 'react'
import axios from 'axios'
// material ui
import { Modal, Box, Button } from '@mui/material';

// shows a modal with two fields, question, and answer, and allows user to update them 

const Editmodal = ({selectedCard, closeModal, updateCard}) => {
  const [question, setQuestion] = useState(selectedCard.question);
  const [answer, setAnswer] = useState(selectedCard.answer);
  const cardId = selectedCard.id; 

  const handleUpdateCard = (event) => {
    event.preventDefault();
    updateCard(question, answer, cardId);
    closeModal();
  }



  return (
    <div className='modal'>
      <div className='modal-content'>
        <form className="form add-card-form" onSubmit={handleUpdateCard}>
          <input
            type="text"
            placeholder={selectedCard.question}
            defaultValue={selectedCard.question}
            className="form-input add-card-input"
            onChange={(e) => setQuestion(e.target.value)}
          />
          <textarea
            type="text"
            placeholder={selectedCard.answer}
            defaultValue={selectedCard.answer}
            className="form-input add-card-input"
            onChange={(e) => setAnswer(e.target.value)}
          />
          <Button className="form-btn">Update</Button>
        </form>
        <Button onClick={closeModal}>Close</Button>
      </div>
    </div>
  );
}
export default Editmodal;

