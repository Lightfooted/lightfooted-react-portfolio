import React, { useState } from 'react';

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
        <div className='relative flex justify-center p-20 mx-auto lg:pt-48'>
          <section className='p-20 text-white bg-black rounded-lg shadow-2xl poppy bg-opacity-80 lg:flex'>
          <form onSubmit={handleSubmit}>
        <div>
          <label className='inline-block w-20 text-left'>Name: </label>
          <input className='mb-2 text-black' type='text' name='name' defaultValue={name} onBlur={handleChange} onChange={(e) => setFormState({...formState, name: e.target.value})} />
        </div>
        <div>
          <label className='inline-block w-20 text-left'>Email address: </label>
          <input className='mb-8 text-black' type='email' name='email' defaultValue={email} onBlur={handleChange} onChange={(e) => setFormState({...formState, email: e.target.value})} />
        </div>
        <div>
          <label className='inline-block w-20 text-left'>Message: </label>
          <textarea maxLength='150' className='text-black resize-none' name='message' defaultValue={message} onBlur={handleChange} onChange={(e) => setFormState({...formState, message: e.target.value})} />
        </div>
        <div>
        <label></label>
        <a href="mailto:vesselofbalance@hotmail.com" className='hover:text-blue-400'>Click here for Kimberly's email</a>
        </div>
        <div>
        <label></label>
        <a href="tel:+14074840907" className='hover:text-blue-400'>Click here for Kimberly's phone number</a>
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