import React from 'react';
import ReactTyped from "react-typed";

import '../css/Hero.css';
import { portrait } from '../assets';
import { roles } from '../constants';

const Hero = () => {
    return (
        <>
            <section id='home' className='hero'>
                <div className="container">
                    <div className="content mt-20">
                        <div className="personal flex justify-between items-center">
                            <div className="w-fit">
                                <img className='rounded-full lg:h-20 lg:w-20 md:h-16 md:w-16 w-12 h-12 hover:scale-[1.05] hover:shadow-custom1 hover:-rotate-12 transition-all duration-300 ease-in-out' src={portrait} alt="profile pic" />
                            </div>
                        </div>

                        <div className="hero-text mt-10">
                            <h1 className='font-bold text-[60px] md:text-[80px]'>Hi, I'm <span className='text-accent'>Gustavs</span></h1>

                            <h1 className='font-light text-[40px] md:text-[50px]'>
                                I'm a{" "}
                                <ReactTyped
                                    strings={roles}
                                    typeSpeed={100}
                                    loop
                                    backSpeed={80}
                                    cursorChar="|"
                                    showCursor={true}
                                />
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
