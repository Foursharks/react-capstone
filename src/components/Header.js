import {useContext} from 'react'
import {NavLink} from 'react-router-dom'

import AuthContext from '../store/authContext'
import logo from '../assets/study-greek-logo.png'

const Header = () => {
    const authCtx = useContext(AuthContext)

    const styleActiveLink = ({ isActive }) => {
        return {
            color: isActive ? '#f57145' : ''
        }
    }
    
    return (
        <header className='header flex-row'>
            <div className='flex-row'>
                <img src={logo} alt='study-greek-logo' className='logo'/>
                <h2>Header.js</h2>
            </div>
            <nav>
                {
                    authCtx.token ? (
                        <ul className='main-nav'>
                            {/* <li>
                                <NavLink style={styleActiveLink} to='/'>Home</NavLink>
                            </li> */}
                            <li>
                                <NavLink style={styleActiveLink} to='profile'>Dashboard</NavLink>
                            </li>
                            <li>
                                <NavLink style={styleActiveLink} to='form'>Add Card</NavLink>
                            </li>
                            <li>
                                <NavLink style={styleActiveLink} to='study'>Study</NavLink>
                            </li>
                            <li>
                                <button className='logout-btn' onClick={() => authCtx.logout()}>Logout</button>
                            </li>
                        </ul>
                    ) : (
                        <ul className='main-nav'>
                            <li>
                                <NavLink style={styleActiveLink} to='/'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink style={styleActiveLink} to='/auth'>Login or Sign Up</NavLink>
                            </li>
                        </ul>
                    )
                }
            </nav>
        </header>
    )
}

export default Header