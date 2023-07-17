import {useState, useContext} from 'react'
import axios from 'axios'

const Editmodal = ({selectedCard, closeModal, updateCard}) => (
    <div className='modal'>
        <div className='modal-content'>
          <form className="form add-card-form" onSubmit={updateCard.bind(null, selectedCard.id)}>
            <input
                type="text"
                placeholder={selectedCard.question}
                defaultValue={selectedCard.question}
                className="form-input add-card-input"
            />
            <textarea
                type="text"
                placeholder={selectedCard.answer}
                defaultValue={selectedCard.answer}
                className="form-input add-card-input"
            />
            <button className="form-btn">Update</button>
          </form>
          <button onClick={closeModal}>Close</button>
        </div>
    </div>
);
export default Editmodal;
