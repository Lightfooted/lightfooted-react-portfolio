import React from 'react';
import coverImage from '../../assets/cover/port-pic.png';

function About() {

  return (
    <main>
        <div className='relative flex justify-center w-auto p-20 lg:pt-48'>
          <section className='p-10 bg-black rounded-lg shadow-2xl lg:flex bg-opacity-80'>
            <img src={coverImage} alt='bio' className='mr-6 rounded lg:flex'/>
              <div>
                <h1 className='mb-5 text-6xl text-white underline poppy'>Kimberly Collazo</h1>
                <p className='text-2xl text-white poppy'>Nice to meet you! I'm Kim! I'm a Full-Stack Web Developer.</p>
                <p className='text-2xl text-white poppy'>I attended the UCF Boot-Camp in June of 2021 and graduated on November 2021. It's been quite a journey!</p>
                <p className='text-2xl text-white poppy'>I'm interested in building a career in Web Development and eventually dabbling into Video Game Development. </p>
                <p className='text-2xl text-white poppy'>My hobbies are video gaming, anime, listening to most genres of music and coding for fun in my free time.</p>
              </div>
          </section>
        </div>
    </main>
  )
}

export default About;