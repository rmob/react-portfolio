import React from "react";

export function SkillsList(props) {
  return <li className="skills-list">{props.set}</li>;
}

export default function Resume() {
  const skills = ['React', 'Node', 'Javascript', 'HTML', 'CSS'];
  
  return (
    <div>
      <h1>Download my resume here<img src='arrow.jpeg' width='75px' alt="download"/></h1>
      <h2>Proficiencies, briefly</h2>
      <ul className="unordered-list">
      {skills.map((skill) => <SkillsList set={skill} />)}
      </ul>
    </div>
  );
}