import React from 'react';
import BackImage from '../../assets/background/gits-back.jpg';

function Home() {

  return (
      <main>
        <img src={BackImage} style={{ width: "100%", height: "100%" }} alt="background" className="absolute"/>
          <section className='relative flex justify-center min-h-screen px-8 pt-12 lg:pt-64'> 
            <h1 className='text-5xl text-white animate-pulse poppy lg:leading-snug home-name'>Welcome to Kimberly Collazo's Portfolio!</h1>
          </section>
      </main>
  )
}

export default Home;