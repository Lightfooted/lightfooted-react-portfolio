import React from 'react';
import FirstGrpProject from '../../assets/projects/0.png'
import SecondGrpProject from '../../assets/projects/1.png'
import BudgetAssignment from '../../assets/projects/2.png'
import NetAPI from '../../assets/projects/3.png'
import README from '../../assets/projects/4.png'
import Password from '../../assets/projects/5.png'
import LastGrpProject from '../../assets/projects/6.png'

function Project() {
  return (
    <main>
      <div className='relative flex justify-center p-20 mx-auto lg:pt-24'>
        <div class="rounded-lg shadow-2xl grid grid-cols-4 gap-5 bg-black text-white bg-opacity-80 p-10">
          <div href='https://lverghese.github.io/project-one/' rel='noopener noreferrer' target='_blank'>First Group Project: Halfstack-Media<img src={FirstGrpProject} className=' justify-evenly' alt='halfstack-media'/></div>
          <div href='https://protected-hamlet-00069.herokuapp.com/' rel='noopener noreferrer' target='_blank'>Second Group Project: Pokedex-Project<img src={SecondGrpProject} className=' justify-evenly' alt='pokedex-project'/></div>
          <div href='https://high-tech-match.herokuapp.com/' rel='noopener noreferrer' target='_blank'>Final Group Project: High Tech Match Love<img src={LastGrpProject} className=' justify-evenly' alt='final-project'/></div>
          <div href='https://github.com/Lightfooted/password-generator' rel='noopener noreferrer' target='_blank'>Module Assignment: Password Generator<img src={Password} className=' justify-evenly' alt='pass'/></div>
          <div href='https://github.com/Lightfooted/professional-README-generator' rel='noopener noreferrer' target='_blank'>Module Assignment: README Generator<img src={README} className=' justify-evenly' alt='gen'/></div>
          <div href='https://github.com/Lightfooted/Social-Network-API' rel='noopener noreferrer' target='_blank'>Module Assignment: Social Network API<img src={NetAPI} className=' justify-evenly' alt='n-api'/></div>
          <div href='https://github.com/Lightfooted/Budget-Tracker' rel='noopener noreferrer' target='_blank'>Module Assignment: Offline Budget Tracker<img src={BudgetAssignment} className=' justify-evenly' alt='budget-tracker'/></div>
        </div>
      </div>
    </main>
  )
}
export default Project;