import React, { useState } from 'react';

const ProjectModList = ({ category }) => {

  const [photos] = useState([
    {
      name: 'Halfstack Media',
      category: 'projects',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Pokedex Project',
      category: 'projects',
      description: 'A Pokedex that allows you to search for any of the original 151 Pokemon and claim them',
    },
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.png`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectModList;

//TO DO: add modules