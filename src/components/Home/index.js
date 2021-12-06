import React from 'react';
import { useDencrypt } from 'use-dencrypt-effect';

const values = ["Hello!", "My name is Kimberly Collazo.", "AKA Lightfooted.", "Welcome to my portfolio."];

function Home() {

  const { result, dencrypt } = useDencrypt();
 
  React.useEffect(() => {
    let i = 0;
 
    const action = setInterval(() => {
      dencrypt(values[i]);
 
      i = i === values.length - 1 ? 0 : i + 1;
    }, 5000);
 
    return () => clearInterval(action);
    // eslint-disable-next-line
  }, []);

  return (
      <main>
          <section className='relative flex justify-center p-20 mx-auto overflow-hidden lg:pt-64'> 
            <h1 className='text-5xl text-white text-shadow poppy lg:leading-snug home-name'>{result}</h1>
          </section>
      </main>
  )
}

export default Home;