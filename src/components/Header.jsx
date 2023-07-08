import { Link, NavLink } from 'react-router-dom'


const Header = () => {
    return (
        
        <nav className='flex justify-between mt-5'>
            <div className='flex'>
               
            
            </div>
            <div className='min-[850px]:flex min-[850px]:flex-col min-[850px]:mr-5 min-[850px]:m-[-20px]
            min-[280px]:flex min-[280px]:m-[-20px] '>
                <Link className='hover:scale-125 ease-in duration-200 min-[280px]:mx-1' exact to="/">Home</Link>
                <Link className='hover:scale-125 ease-in duration-200 min-[280px]:mx-1'  to="/About">About Me</Link>
                <Link className='hover:scale-125 ease-in duration-200 min-[280px]:mx-1'  to="Contact">Contact</Link>
            </div>
        </nav>
    )
}

export default Header