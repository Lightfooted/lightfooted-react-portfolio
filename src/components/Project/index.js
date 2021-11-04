import React from 'react';
import FirstGrpProject from '../../assets/projects/0.png'
import SecondGrpProject from '../../assets/projects/1.png'
import backgroundImage from '../../assets/background/gits-back.jpg'

function Project() {
  return (
    <main>
      <img src={backgroundImage} style={{ width: "100%", height: "100%" }} alt="background" className="absolute"/>
      <div className='relative flex p-20 mx-auto lg:pt-64'>
        <section className='p-20 bg-black rounded-lg shadow-2xl bg-opacity-90 lg:flex'>
            <a href="https://lverghese.github.io/project-one/"><img src={FirstGrpProject} className="my-2" style={{ width: "75% "}} alt="halfstack-media"/></a>
          <a href="https://protected-hamlet-00069.herokuapp.com/"><img src={SecondGrpProject} className="my-2" style={{ width: "75% "}} alt="pokedex-project"/></a>
        </section>
        </div>
    </main>
  )
}
export default Project;