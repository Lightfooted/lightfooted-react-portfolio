import React from 'react';
import FirstGrpProject from '../../assets/projects/0.png'
import SecondGrpProject from '../../assets/projects/1.png'
import BudgetAssignment from '../../assets/projects/2.png'
import NetAPI from '../../assets/projects/3.png'
import README from '../../assets/projects/4.png'
import Password from '../../assets/projects/5.png'
import BackImage from '../../assets/background/gits-back.jpg'

function Project() {
  return (
    <main>
      <img src={BackImage} style={{ width: '100%', height: '100%' }} alt='background' className='absolute'/>
      <div className='relative flex p-20 mx-auto lg:pt-64'>
        <div className="container p-10 mx-auto space-y-2 text-white bg-black rounded-lg shadow-2xl poppy lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3 bg-opacity-80">
        <div className="w-full rounded">
        <a href='https://protected-hamlet-00069.herokuapp.com/' rel='noopener noreferrer' target='_blank'>2nd Group Project: Pokedex-Project<img src={SecondGrpProject} className='my-2' style={{ width: '75% '}} alt='pokedex-project'/></a>
        </div>
        <div className="w-full rounded">
        <a href='https://lverghese.github.io/project-one/' rel='noopener noreferrer' target='_blank'>1st Group Project: Halfstack-Media<img src={FirstGrpProject} className='my-2' style={{ width: '75% '}} alt='halfstack-media'/></a>
        </div>
        <div className="w-full rounded">
        <a href='https://github.com/Lightfooted/Budget-Tracker' rel='noopener noreferrer' target='_blank'>Module Assignment: Offline Budget Tracker<img src={BudgetAssignment} className='my-2' style={{ width: '75% '}} alt='budget-tracker'/></a>
        </div>
        <div className="w-full rounded">
        <a href='https://github.com/Lightfooted/Social-Network-API' rel='noopener noreferrer' target='_blank'>Module Assignment: Social Net API<img src={NetAPI} className='my-2' style={{ width: '75% '}} alt='n-api'/></a>
        </div>
        <div className="w-full rounded">
        <a href='https://github.com/Lightfooted/professional-README-generator' rel='noopener noreferrer' target='_blank'>Module Assignment: READ Generator<img src={README} className='my-2' style={{ width: '75% '}} alt='gen'/></a>
        </div>
        <div className="w-full rounded">
        <a href='https://github.com/Lightfooted/password-generator' rel='noopener noreferrer' target='_blank'>Module Assignment: Password Generator<img src={Password} className='my-2' style={{ width: '75% '}} alt='pass'/></a>
        </div>
        </div>
    </div>
    </main>
  )
}
export default Project;