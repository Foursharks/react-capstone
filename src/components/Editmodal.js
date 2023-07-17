import {useState, useContext} from 'react'
import axios from 'axios'
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
          <button className="form-btn">Update</button>
        </form>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
}
export default Editmodal;

