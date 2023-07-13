import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'


const Contact = () => {
  return (

    <div className='pc:w-11/12 mt-20 pc:flex pc:justify-between phone:w-12 phone:block'>
  
      <p className='pc:w-96 mt-[-50px] phone:w-48 phone:leading-[18px] phone:ml-[-15px]'>
        <img className='pc:w-72 pc:h-60' src="/src/components/images/working_img.jpg" alt="" />
        
      </p>
      <div className='pc:block phone:flex pc:mr-[-50px] phone:mt-6 phone:gap-7 phone:ml-[-15px]'>
        <a href="" ><FaInstagram className='pc:mb-4  text-fuchsia-600 hover:scale-125 ease-in duration-200' /></a>
        <a href=""><FaTwitter   className='pc:mb-4  text-sky-400 hover:scale-125 ease-in duration-200' /></a>
        <a href=""><FaFacebook  className='pc:mb-4 text-blue-500 hover:scale-125 ease-in duration-200' /></a>
        <a href=""><FaGithub    className='pc:mb-4 hover:scale-125 ease-in duration-200' /> </a>
        <a href=""><FaEnvelope  className='pc:mb-4 text-red-400 hover:scale-125 ease-in duration-200' /></a>
      </div>
    </div>
  )
}

export default Contact