import React from 'react';
import coverImage from '../../assets/cover/port-pic.png';

function About() {

  return (
    <main>
        <div className='relative flex p-20 mx-auto lg:pt-48'>
          <section className='p-10 bg-black rounded-lg shadow-2xl bg-opacity-80 lg:flex'>
            <img src={coverImage} style={{ width: '15%' }} alt='bio' className='mr-6 rounded lg:w-64 lg:64'/>
              <div>
                <h1 className='mb-5 text-6xl text-white underline poppy'>Kimberly Collazo</h1>
                <p className='text-2xl text-white poppy'>Hi! I'm Kim! Nice to meet you! I'm a Full-Stack Web Developer. I attended the UCF Boot-Camp in June of 2021. It's been quite a journey! My interests are video gaming, anime, most genres of music and coding in my free time.</p>
              </div>
          </section>
        </div>
    </main>
  )
}

export default About;