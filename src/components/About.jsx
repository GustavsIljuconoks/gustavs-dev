import React from 'react';
import Tech from './Tech';

const About = () => {
  return (
    <>
      <section id='about' className='about pt-12'>
        <div className="container">
          <div className="about-me mt-40">
            <h1 className='font-bold text-[40px] text-accent'>About Me</h1>
            <p className='text-black-40'>As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React and Tailwind. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. Let’s work together and bring your ideas to life!</p>
          </div>

          {/* <Tech /> */}
        </div>
      </section>
    </>
  )
}

// export default SectionWrapper(About, "about");
export default About;