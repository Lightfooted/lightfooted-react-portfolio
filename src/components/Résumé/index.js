import React from 'react';
import BackgroundImage from '../../assets/background/gits-back.jpg';
import PDF from '../../assets/resume/resume.pdf';

function Résumé() {

  return (
    <main>
      <img src={BackgroundImage} style={{ width: "100%", height: "100%" }} alt="background" className="absolute"/>
        <div className='relative flex justify-center p-20 mx-auto lg:pt-64'>
          <section className='p-10 bg-black rounded-lg shadow-2xl bg-opacity-80 lg:flex'>
              <div>
                <h1 className='mb-2 text-5xl text-white'>Résumé</h1>
                <ul className='text-white list-disc poppy'>
                <a href={PDF} rel='noreferrer' target="_blank" download>Résumé Download</a>
                  <h1 className='underline'>Front-end Proficiencies</h1>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Bootstrap</li>
                  <li>Tailwind</li>
                  <li>Version Control</li>
                  <h1 className='underline'>Back-end Proficiencies</h1>
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