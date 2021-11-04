import React from 'react';
import coverImage from "../../assets/cover/port-pic.png";
import backgroundImage from '../../assets/background/gits-back.jpg';

function About() {

  return (
    <main>
      <img src={backgroundImage} style={{ width: "100%", height: "100%" }} alt="background" className="absolute"/>
      <div className='relative flex p-20 mx-auto lg:pt-64'>
        <section className='p-20 bg-black rounded-lg shadow-2xl bg-opacity-90 lg:flex'>
        <img src={coverImage} style={{ width: "20%" }} alt="bio" className='mr-8 rounded lg:w-64 lg:64'/>
        <div>
          <h1 className='mb-2 text-5xl text-white'>Kimberly Collazo</h1>
          <p className='text-2xl text-white'>Hi! I'm Kim! Nice to meet you! I'm a Full-Stack Web Developer. I attended the UCF Boot-Camp in June of 2021. It's been quite a journey! My interests are video gaming, anime, most genres of music and coding in my free time.</p>
        </div>
        </section>
      </div>
    </main>
  )
}

export default About;