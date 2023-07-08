import { Link, NavLink } from 'react-router-dom'


const Header = () => {
    return (
        
        <nav className='flex justify-between mt-5'>
            <div className='flex'>
               
            
            </div>
            <div className='pc:flex pc:flex-col pc:mr-5 pc:m-[-20px]
            phone:flex phone:m-[-20px] '>
                <Link className='hover:scale-125 ease-in duration-200 phone:mx-1' exact to="/">Home</Link>
                <Link className='hover:scale-125 ease-in duration-200 phone:mx-1'  to="/About">About Me</Link>
                <Link className='hover:scale-125 ease-in duration-200 phone:mx-1'  to="Contact">Contact</Link>
            </div>
        </nav>
    )
}

export default Header