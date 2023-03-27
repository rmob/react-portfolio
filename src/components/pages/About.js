import React from 'react';

const styles = {
  avatar: {
    borderRadius: 50,
  }
}

export default function About() {
  return (
    <div>
      <h1>About me</h1>
      <div>
        <img src="racoondog.avif" width='550px' style={styles.avatar} alt="avatar"/>
      </div>
      <p className='about-info'>
        Hi my name is Riley.  I'm a full stack web-developer now! Thanks for looking at my portfolio page designed using REACT.js motherfucker
      </p>
    </div>
  );
}
