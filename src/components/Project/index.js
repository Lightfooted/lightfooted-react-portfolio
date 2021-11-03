import React from 'react';
import FirstGrpProject from '../../assets/projects/0.png'
import SecondGrpProject from '../../assets/projects/1.png'

function Project() {
  return (
    <section>
      <h1>Halfstack Media</h1>
    <img src={FirstGrpProject} alt="halfstack-media"/>
      <h1>Pokedex Project</h1>
    <img src={SecondGrpProject} alt="pokedex-project"/>
    </section>
  );
}
export default Project;