import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div className="about">
    <div>
      <p>Splash Wine Journal was created using React, Redux, PostgreSQL, and Bootstrap</p>
      <p>My biggest challenge was deciding how to organize my data in the database tables</p>
      <p>Looking ahead, I would like to add a section where users can upload an image of the wine label 
        and an add friends feature to share wine lists</p>
      <p>Big thank you to Casie and Kris, the Ukkonen cohort (especially Matt!), and Doctor Chips</p>
    </div>
  </div>
);

export default AboutPage;
