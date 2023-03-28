import React from "react";


const projects = [
  {
    title: 'first',
    github: 'glink1',
    deploy: 'dlink1',
    id: 1,
  },
  {
    title: 'second',
    github: 'glink2',
    deploy: 'dlink2',
    id: 2,
  },
  {
    title: 'third',
    github: 'glink3',
    deploy: 'dlink3',
    id: 3,
  },
  {
    title: 'fourth',
    github: 'glink4',
    deploy: 'dlink4',
    id: 4,
  },
  {
    title: 'fifth',
    github: 'glink4',
    deploy: 'dlink4',
    id: 5,
  },
  {
    title: 'sixth',
    github: 'glink6',
    deploy: 'dlink6',
    id: 6,
  },
]

export function Project(props) {
  return <div>
    <div className="container">
      <div className="project-view">
    <h3>{props.title}</h3>
    <p className="github-link">{props.github}</p>
    <p className="deploy-link">{props.deploy}</p>
    </div>
    </div>
  </div>
}

export default function Portfolio() {
  return (
    <>
    
      
      <div className="container">
      <h2>Portfolio</h2>
      <div className="about-info">
      {projects.map((project) => <Project title={project.title} github={project.github} deploy={project.deploy} key={project.id} /> )}
    </div>
    </div>
    </>
  );
}
