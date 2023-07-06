import { Link, NavLink } from 'react-router-dom'


const Header = () => {
    return (
        
        <nav className='flex justify-between mt-5'>
            <div className='flex'>
                <select className='h-6' name="" id="">
                    <option className='text-orange-600' value="">Tr</option>
                    <option className='text-orange-600' value="">En</option>
                </select>
                <h2 className='ml-10'>
                    EmrullahU
                </h2>
                <img src="" alt="" />
            </div>
            <div className='flex flex-col mr-20 '>
                <Link exact to="/">Home</Link>
                <Link to="/About">About Me</Link>
                <Link to="Contact">Contact</Link>
            </div>
        </nav>
    )
}

export default Header