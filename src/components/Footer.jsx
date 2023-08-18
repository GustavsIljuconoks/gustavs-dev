import React from 'react';
import { AiOutlineInstagram } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
            <div className="icons flex flex-col py-2 mb-5 mt-44 w-full items-center justify-center">
              <div className="divide-x divide-solid divide-black grid grid-cols-3 w-full">
              
                <a 
                    href="https://www.instagram.com/moskagustavs/" 
                    target='_blank' 
                    className="flex items-center justify-center flex-col text-lg text-black hover:text-accent transition-colors duration-300 ease-in-out"                    
                >
                    <AiOutlineInstagram className="social-icon h-7 w-7 sm:h-8 sm:w-8 xl:h-9 xl:w-9 2xl:h-10 2xl:w-10" />
                </a>

                <a 
                    href="https://github.com/GustavsIljuconoks" 
                    target='_blank'
                    className="flex items-center justify-center flex-col text-lg text-black hover:text-accent transition-colors duration-300 ease-in-out"
                >
                    <BsGithub className="social-icon h-7 w-7 sm:h-8 sm:w-8 xl:h-9 xl:w-9 2xl:h-10 2xl:w-10" />
                </a>

                <a 
                    href="https://www.linkedin.com/in/gustavs-i%C4%BCju%C4%8Donoks-60559b223/" 
                    target='_blank'
                    className="flex items-center justify-center flex-col text-lg text-black hover:text-accent transition-colors duration-300 ease-in-out"
                >
                    <BsLinkedin  className="social-icon h-7 w-7 sm:h-8 sm:w-8 xl:h-9 xl:w-9 2xl:h-10 2xl:w-10" />
                </a>
              </div>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer