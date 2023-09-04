import React from 'react'

const Contact = () => {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="interest">
            <h1 className="font-bold text-[40px] text-accent mt-40">Interested?</h1>
            <h1 className="font-bold text-[40px]">Let's get in touch!</h1>
          </div>

          <div className="email mt-16">
            <a href="mailto:gustavs.iljuconoks@gmail.com" className="hover:underline font-normal text-[26px]">gustavs.iljuconoks@gmail.com</a>
          </div>

          <div className="describe mt-12">
            <h2 className="font-normal text-[21px]">I'm available on almost every social platform. Just hit me up! I'm always open to new opportunities.</h2>
            <h2 className="font-normal text-[21px] mt-5">Interested in my blog? Check it out <a href="https://gustavsiljuconoks.github.io/" target='_blank' className='underline'>here</a>.</h2>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact