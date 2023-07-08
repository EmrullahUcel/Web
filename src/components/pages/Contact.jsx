import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'


const Contact = () => {
  return (

    <div className='pc:w-11/12 mt-20 pc:flex pc:justify-between phone:w-12 phone:block'>
  
      <p className='pc:w-96 mt-[-50px] phone:w-48 phone:leading-[18px] phone:ml-[-15px]'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Illo maiores iusto quasi fugiat magnam possimus necessitatibus,
        aliquid accusamus nesciunt omnis dolorum,
        animi nemo minima ut aliquam dolorem obcaecati dolor officia minus voluptate
        ! Eveniet blanditiis harum explicabo quae ipsum nemo, quia,
        libero iure illo inventore temporibus asperiores vitae itaque magni dicta!
      </p>
      <div className='pc:block phone:flex phone:mt-6 phone:gap-7 phone:ml-[-15px]'>
        <a href=""><FaInstagram className='pc:mb-4' /></a>
        <a href=""><FaTwitter   className='pc:mb-4' /></a>
        <a href=""><FaFacebook  className='pc:mb-4' /></a>
        <a href=""><FaGithub    className='pc:mb-4' /> </a>
        <a href=""><FaEnvelope  className='pc:mb-4' /></a>
      </div>
    </div>
  )
}

export default Contact