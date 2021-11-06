import React, { useState } from 'react';
import BackImage from '../../assets/background/gits-back.jpg';

import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };

  return (
    <main>
      <img src={BackImage} style={{ width: '100%', height: '100%' }} alt='background' className='absolute'/>
        <div className='relative flex justify-center p-20 mx-auto lg:pt-64'>
          <section className='p-20 text-white bg-black rounded-lg shadow-2xl poppy bg-opacity-80 lg:flex'>
          <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input className='mb-3 text-black' type='text' name='name' defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
          <label>Email address: </label>
          <input className='mb-3 text-black' type='email' name='email' defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
          <label>Message: </label>
          <textarea maxLength='150' className='text-black resize-none' name='message' defaultValue={message} onBlur={handleChange} />
        </div>
        <div>
        <label></label>
        <a href="mailto:vesselofbalance@hotmail.com" className='hover:text-blue-400'>Click here for Kimberly's email</a>
        </div>
        <div>
        <label></label>
        <a href="tel:+4074840907" className='hover:text-blue-400'>Click here for Kimberly's phone number</a>
        </div>
        {errorMessage && (
          <div>
            <p>{errorMessage}</p>
          </div>
        )}
        <button type='submit' className='h-10 px-5 mt-3 text-white transition-colors duration-150 border rounded-lg focus:shadow-outline hover:bg-gray-700 hover:text-white'>Submit</button>
      </form>
          </section>
        </div>
    </main>
  )
}

export default Contact;