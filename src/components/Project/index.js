import React from 'react';
import ProjectModList from '../ProjectModList';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Project(props) {
  const { currentCategory } = props;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      <ProjectModList category={currentCategory.name} />
    </section>
  );
}
export default Project;