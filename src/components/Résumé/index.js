import React from 'react';
import PDF from '../../assets/resume/resume.pdf';

function Résumé() {

  return (
    <main>
        <div className='relative flex justify-center p-20 mx-auto lg:pt-24'>
          <section className='p-10 bg-black rounded-lg shadow-2xl bg-opacity-80 lg:flex'>
              <div>
                <h1 className='mb-3 text-5xl text-white poppy'>Résumé</h1>
                <ul className='text-white list-disc poppy'>
                <a className='hover:text-blue-400' href={PDF} rel='noreferrer' target="_blank" download>Résumé Download</a>
                  <h1 className='mt-2 mb-2 underline'>Front-end Proficiencies</h1>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Bootstrap</li>
                  <li>Tailwind</li>
                  <li>Version Control</li>
                  <h1 className='mt-2 mb-2 underline'>Back-end Proficiencies</h1>
                  <li>Express</li>
                  <li>Node</li>
                  <li>APIs</li>
                  <li>SQL</li>
                  <li>Sequelize</li>
                  <li>Mongoose</li>
                  <li>MongoDB</li>
                </ul>
              </div>
          </section>
        </div>
    </main>
  )
}

export default Résumé;