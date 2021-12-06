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
      <div className='relative flex mx-auto lg:pt-32'>
        <div className="container p-10 pl-24 mx-auto mb-20 text-white bg-black rounded-lg shadow-2xl poppy lg:grid lg:grid-cols-3 bg-opacity-80">
        <a href='https://high-tech-match.herokuapp.com/' rel='noopener noreferrer' target='_blank'>Final Group Project: High Tech Match Love<img src={LastGrpProject} className=' justify-evenly' style={{ width: '80% '}} alt='final-project'/></a>
        <a href='https://protected-hamlet-00069.herokuapp.com/' rel='noopener noreferrer' target='_blank'>Second Group Project: Pokedex-Project<img src={SecondGrpProject} className=' justify-evenly' style={{ width: '80% '}} alt='pokedex-project'/></a>
        <a href='https://lverghese.github.io/project-one/' rel='noopener noreferrer' target='_blank'>First Group Project: Halfstack-Media<img src={FirstGrpProject} className=' justify-evenly' style={{ width: '80% '}} alt='halfstack-media'/></a>
        <a href='https://github.com/Lightfooted/Budget-Tracker' rel='noopener noreferrer' target='_blank'>Module Assignment: Offline Budget Tracker<img src={BudgetAssignment} className=' justify-evenly' style={{ width: '80% '}} alt='budget-tracker'/></a>
        <a href='https://github.com/Lightfooted/Social-Network-API' rel='noopener noreferrer' target='_blank'>Module Assignment: Social Network API<img src={NetAPI} className=' justify-evenly' style={{ width: '80% '}} alt='n-api'/></a>
        <a href='https://github.com/Lightfooted/professional-README-generator' rel='noopener noreferrer' target='_blank'>Module Assignment: README Generator<img src={README} className=' justify-evenly' style={{ width: '80% '}} alt='gen'/></a>
        <a href='https://github.com/Lightfooted/password-generator' rel='noopener noreferrer' target='_blank'>Module Assignment: Password Generator<img src={Password} className=' justify-evenly' style={{ width: '80% '}} alt='pass'/></a>
        </div>
        </div>
    </main>
  )
}
export default Project;