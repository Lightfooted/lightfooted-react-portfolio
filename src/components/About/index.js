import React from 'react';
import coverImage from "../../assets/cover/port-pic.png";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">Kimberly Collazo</h1>
      <img src={coverImage} className="my-2" style={{ width: "20%" }} alt="cover" />
      <div className="my-2">
        <p>
          About me descript here.
      </p>
      </div>
    </section>
  )
}

export default About;

//TO DO: Fill out a better about description