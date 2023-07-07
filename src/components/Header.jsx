import { Link, NavLink } from 'react-router-dom'


const Header = () => {
    return (
        
        <nav className='flex justify-between mt-5'>
            <div className='flex'>
               
            
            </div>
            <div className='flex flex-col mr-5 m-[-20px]'>
                <Link className='hover:scale-125 ease-in duration-200' exact to="/">Home</Link>
                <Link className='hover:scale-125 ease-in duration-200'  to="/About">About Me</Link>
                <Link className='hover:scale-125 ease-in duration-200'  to="Contact">Contact</Link>
            </div>
        </nav>
    )
}

export default Header