import React from 'react';
import FirstGrpProject from '../../assets/projects/0.png'
import SecondGrpProject from '../../assets/projects/1.png'
import BudgetAssignment from '../../assets/projects/2.png'
import NetAPI from '../../assets/projects/3.png'
import README from '../../assets/projects/4.png'
import Password from '../../assets/projects/5.png'
import LastGrpProject from '../../assets/projects/6.png'
import GitLink from '../../assets/icons/github-2-24.png'
import ScrollToTop from '../../components/ScrollUpBtn'

function Project() {
  return (
    <main>
      <div className='relative flex justify-center p-20 mx-auto lg:pt-18'>
        <div className="grid grid-cols-1 gap-4 p-10 text-center text-white bg-black rounded-lg shadow-2xl md:grid-cols-3 lg:grid-cols-4 bg-opacity-80">
          <div>
            <a href='https://lverghese.github.io/project-one/' rel='noopener noreferrer' target='_blank'>First Group Project: Halfstack-Media<img src={FirstGrpProject} className='duration-300 transform outline-white hover:scale-110' alt='halfstack-media'/></a>
            <a href='https://github.com/lverghese/project-one' rel='noopener noreferrer' target='_blank'><img src={GitLink} className='mx-auto mt-2' alt='gitlink'/></a>
          </div>
          <div>
            <a href='https://protected-hamlet-00069.herokuapp.com/' rel='noopener noreferrer' target='_blank'>Second Group Project: Pokedex-Project<img src={SecondGrpProject} className='duration-300 transform outline-white hover:scale-110' alt='pokedex-project'/></a>
            <a href='https://github.com/Lightfooted/pokedex-project' rel='noopener noreferrer' target='_blank'><img src={GitLink} className='mx-auto mt-2' alt='gitlink'/></a>
          </div>
          <div>
            <a href='https://high-tech-match.herokuapp.com/' rel='noopener noreferrer' target='_blank'>Final Group Project: High Tech Match Love<img src={LastGrpProject} className='duration-300 transform outline-white hover:scale-110' alt='final-project'/></a>
            <a href='https://github.com/Lightfooted/High-Tech-Match-Love' rel='noopener noreferrer' target='_blank'><img src={GitLink} className='mx-auto mt-2' alt='gitlink'/></a>
          </div>
          <div>
            <a href='https://lightfooted.github.io/password-generator/' rel='noopener noreferrer' target='_blank'>Module Assignment: Password Generator<img src={Password} className='duration-300 transform outline-white hover:scale-110' alt='pass'/></a>
            <a href='https://github.com/Lightfooted/password-generator' rel='noopener noreferrer' target='_blank'><img src={GitLink} className='mx-auto mt-2' alt='gitlink'/></a>
          </div>
          <div>
            <a href='https://www.youtube.com/watch?v=HzrT7pC8dTw' rel='noopener noreferrer' target='_blank'>Module Assignment: README Generator<img src={README} className='duration-300 transform outline-white hover:scale-110' alt='gen'/></a>
            <a href='https://github.com/Lightfooted/professional-README-generator' rel='noopener noreferrer' target='_blank'><img src={GitLink} className='mx-auto mt-2' alt='gitlink'/></a>
          </div>
          <div>
            <a href='https://www.youtube.com/watch?v=2tp7mEg7tNU' rel='noopener noreferrer' target='_blank'>Module Assignment: Social Network API<img src={NetAPI} className='duration-300 transform outline-white hover:scale-110' alt='n-api'/></a>
            <a href='https://github.com/Lightfooted/Social-Network-API' rel='noopener noreferrer' target='_blank'><img src={GitLink} className='mx-auto mt-2' alt='gitlink'/></a>
          </div>
          <div>
            <a href='https://agile-scrubland-63874.herokuapp.com/' rel='noopener noreferrer' target='_blank'>Module Assignment: Offline Budget Tracker<img src={BudgetAssignment} className='duration-300 transform outline-white hover:scale-110' alt='budget-tracker'/></a>
            <a href='https://github.com/Lightfooted/Budget-Tracker' rel='noopener noreferrer' target='_blank'><img src={GitLink} className='mx-auto mt-2' alt='gitlink'/></a>
          </div>
        </div>
      </div>
      <ScrollToTop/>
    </main>
  )
}
export default Project;