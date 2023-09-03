
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () =>{
    return (
        <>
            <div className='navbar'>
                <div className='logoName'>Dictionary App</div>
                <div className='links'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/history">History</NavLink>
                </div>
            </div>

        </>
    )
}


export default Navbar;

