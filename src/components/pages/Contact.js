import React from 'react';

export default function Contact() {
  return (
    <div>
      <h2>Contact Me</h2>
      <div className='container'>
      <form className='formFormat'>
        <input type="text" placeholder="enter your name" required='true'></input>
        <input type="text" placeholder="enter email" required='true'></input>
        <label for='textarea'>What do you have to say to me?</label>
        <textarea type='text' required='true' id='text-area'></textarea>
      </form>
      </div>
    </div>
  );
}
