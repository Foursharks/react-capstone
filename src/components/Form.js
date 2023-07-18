import {useState, useContext} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

import AuthContext from '../store/authContext'

//material UI 
import TextField from '@mui/material/TextField';
import { Box, Button } from '@mui/material';

const Form = () => {
    const {token, userId} = useContext(AuthContext)
    const navigate = useNavigate()

    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')


    const handleSubmit = e => {
        e.preventDefault()

        axios.post(`http://localhost:5050/cards`, {question, answer, userId}, {
            headers: {
                authorization: token
            }
        })
            .then(() => {
                navigate('/profile')
            })
            .catch(err => console.log(err))
    }

    return (
        <main>
            <Box p={5}>
            <form className='form add-card-form' onSubmit={handleSubmit}>
                <Box pt={3}>
                <TextField
                    type='text'
                    placeholder='question'
                    value={question}
                    onChange={e => setQuestion(e.target.value)}
                    
                />
                </Box>
                <Box pt={3}>
                <TextField 
                    type='text'
                    placeholder='answer'
                    value={answer}
                    onChange={e => setAnswer(e.target.value)}
                    
                />
                </Box>
                <Box pt={3}>
                <Button  variant="2">Add card</Button>
                </Box>
            </form>
            </Box>
        </main>
    )
}

export default Form