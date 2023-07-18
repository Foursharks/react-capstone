import {useContext} from 'react'
import {NavLink} from 'react-router-dom'
import { AppBar, Typography } from '@mui/material';

import AuthContext from '../store/authContext'
import logo from '../assets/study-greek-logo.png'



//material UI 
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';


const Header = () => {
    const authCtx = useContext(AuthContext)

    const styleActiveLink = ({ isActive }) => {
        return {
            color: isActive ? '#f57145' : ''
        }
    }
    
    return (
        <AppBar position="static">
            
            <div>
                <img src={logo} alt='study-greek-logo' className='logo'/>
                <Typography variant="h2"> Welcome! </Typography><h2></h2>
            </div>
            <nav>
                {
                    authCtx.token ? (
                        <Toolbar>
                            <li>
                                <Button><NavLink style={styleActiveLink} to='profile'>Dashboard</NavLink></Button>
                            </li>
                            <li>
                                <Button><NavLink style={styleActiveLink} to='form'>Quick Add: New Card</NavLink></Button>
                            </li>
                            <li>
                                <Button><NavLink style={styleActiveLink} to='study'>Study</NavLink></Button>
                            </li>
                            <li>
                                <Button variant="2" onClick={() => authCtx.logout()}>Logout</Button>
                            </li>
                        </Toolbar>
                    ) : (
                        <Toolbar>
                            <li>
                                <Button><NavLink style={styleActiveLink} to='/'>Home</NavLink></Button>
                            </li>
                            <li>
                            <Button variant="3"><NavLink style={styleActiveLink} to='/auth'>Login or Sign Up</NavLink></Button>
                            </li>
                        </Toolbar>
                    )
                }
            </nav>
        </AppBar>
    )
}

export default Header