import React from 'react';

const styles = {
  avatar: {
    borderRadius: 50,
  }
}

export default function About() {
  return (
    <>
    <div className='container'>
      
      <div>
        <img src="portfolio-avatar-3.png" width='550px' style={styles.avatar} alt="avatar"/>
      </div>
      <h2>About me</h2>
      <p className='about-info'>
        Hi my name is Riley.  I'm a full stack web-developer now! Thanks for looking at my portfolio page designed using REACT.js motherfucker
      </p>
    </div>
    </>
  );
}
