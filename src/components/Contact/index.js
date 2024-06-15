import React from 'react';
import { FaGithub,FaLinkedin} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import './index.css';

const Contact = () => (
  <div className="contact">
    <h3 className='heading-text'>CONTACT</h3>
    <p><MdEmail /> <a href="mailto:abhijeetkoli39@gmail.com">abhijeetkoli39@gmail.com</a></p>
    <p><FaGithub/> <a href="https://github.com/conquererabhi25?tab=repositories" target="_blank" rel="noopener noreferrer">gitHub-username</a></p>
    <p><FaLinkedin /> <a href="https://www.linkedin.com/in/abhijeet-koli-111561248/" target="_blank" rel="noopener noreferrer">linkedin-username</a></p>
  </div>
);

export default Contact;
