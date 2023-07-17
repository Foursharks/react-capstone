import { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

import Header from './components/Header'
import Home from './components/Home'
import Auth from './components/Auth'
import Form from './components/Form'
import Profile from './components/Profile'
import Study from './components/Study'

import AuthContext from './store/authContext'

//material ui 
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider} from '@mui/material/styles';

const lightTheme = createTheme({ palette: { mode: 'light' } });


const App = () => {
  const authCtx = useContext(AuthContext)

  return (
    <Paper elevation={0}>
      <ThemeProvider theme={lightTheme}>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={!authCtx.token ? <Auth/> : <Navigate to='/profile'/>}/>
        <Route path='/form' element={authCtx.token ? <Form/> : <Navigate to='/auth'/>}/>
        <Route path='/profile' element={authCtx.token ?<Profile/> : <Navigate to='/auth'/>}/>
        <Route path='/study' element={authCtx.token ?<Study/> : <Navigate to='/auth'/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
      </ThemeProvider>
    </Paper>
  )
}

export default App
