import React, { useEffect } from 'react';
import { useDencrypt } from 'use-dencrypt-effect';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const values = ["Hello!", "My name is Kimberly Collazo.", "AKA Lightfooted.", "Welcome to my portfolio."];

const decryption = {
  chars: `人 生 今 時 力 新 部 八 九 保 同 方 強 自 正 理 
          愛 遊 勇 因 美 器 敬 永 選 治 賢 固 希 喜 軍 航`
    .replace(''),
  interval: 70
};

function Home() {

  const { result, dencrypt } = useDencrypt(decryption);
 
  useEffect(() => {
    let i = 0;
 
    const action = setInterval(() => {
      dencrypt(values[i]);
 
      i = i === values.length - 1 ? 0 : i + 1;
    }, 5000);
 
    return () => clearInterval(action);
    
  }, [dencrypt]);

  return (
      <main>
          <section className='relative flex justify-center p-20 mx-auto overflow-hidden lg:pt-64'>
              <Loader type='Puff' color='#ffffff' height={100} width={100} timeout={3000} />
            <h1 className='text-5xl text-white text-shadow poppy lg:leading-snug'>{result}</h1>
          </section>
      </main>
  )
}

export default Home;