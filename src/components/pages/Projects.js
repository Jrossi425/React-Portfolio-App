import React from 'react';
import Project from '../Project';

// use map function to iterate through projects array and make the code more DRY
const projects = [
  {
    project: "Project 1",
    name: "Workout Routine App",
    image: "./Images/projectpic1.PNG",
    link: "https://evelynms1.github.io/workout-routine-app/"
  },
  {
    project: "Project 2",
    name: "Page Turner",
    image: "./Images/pageturnerpic4.PNG",
    link: "https://jrossi425.github.io/Page-Turner/"
  },
  {
    project: "Project 3",
    name: "Plantastic",
    image: "./Images/plantastic-image.PNG",
    link: "https://github.com/KateMcRo/Plantastic"
  },
  {
    project: "Project 4",
    name: "Javascript Quiz Game",
    image: "./Images/quizgame1.PNG",
    link: "https://github.com/Jrossi425/timed_javascript_quizgame"
  },
  {
    project: "Project 5",
    name: "Weather Dashboard",
    image: "./Images/Weather_Dashboard1.PNG",
    link: "https://github.com/Jrossi425/Weather_Forecast_Dashboard"
  },
  {
    project: "Project 6",
    name: "Work Day Scheduler",
    image: "./Images/Work-Day-Scheduler-Pic1.PNG",
    link: "https://github.com/Jrossi425/Day_Calendar_Scheduler"
  },
]

export default function Projects() {
  return (
<div className="Container">
{projects.map((project) => (
  <Project
    project={project.project}
    name={project.name}
    image={project.image}
    link={project.link}
  />
)
)}


  {/* <Project
    project={"Project 1"}
    name={"Workout Routine App"}
    image={"./Assets/Images/projectpic1.PNG"}
    link={"https://evelynms1.github.io/workout-routine-app/"}
  />

  <Project
    project={"Project 2"}
    name={"Page Turner"}
    image={"./Assets/Images/pageturnerpic1.PNG"}
    link={"https://jrossi425.github.io/Page-Turner/"}
  />

  <Project
    project={"Project 3"}
    name={"Mern Stack App"}
    image={"./Assets/Images/mernstackpic1.PNG"}
    link={"https://github.com/Jrossi425"}
  /> */}

</div>
  );
};
