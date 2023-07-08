import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'


const Contact = () => {
  return (

    <div className="min-[850px]:w-full mt-20 flex justify-between">
      <p className='w-96 mt-[-50px]'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Illo maiores iusto quasi fugiat magnam possimus necessitatibus,
        aliquid accusamus nesciunt omnis dolorum,
        animi nemo minima ut aliquam dolorem obcaecati dolor officia minus voluptate
        ! Eveniet blanditiis harum explicabo quae ipsum nemo, quia,
        libero iure illo inventore temporibus asperiores vitae itaque magni dicta!
      </p>
      <div className='flex gap-4'>
        <a href=""><FaInstagram /></a>
        <a href=""><FaTwitter /></a>
        <a href=""><FaFacebook /></a>
        <a href=""><FaGithub /></a>
        <a href=""><FaEnvelope /></a>
      </div>
    </div>
  )
}

export default Contact