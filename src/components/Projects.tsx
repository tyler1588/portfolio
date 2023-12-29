import Project from "./Project";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      img: "/taskr.png",
      alt: "taskr",
      title: "Taskr",
      description:
        "Implemented robust CRUD functionality in a Trello clone using Next.js and TypeScript, providing users with seamless task creation, editing, and deletion capabilities. This feature enhances user interaction and mirrors industry-standard practices for effective data management.",
      preview: "https://taskr-bice.vercel.app",
      github: "https://github.com/tyler1588/task-ai",
    },
    {
      id: 2,
      img: "/algo-viz.png",
      alt: "algorighm-visualizer",
      title: "Algorithm Visualizer",
      description:
        "Developed a searching algorithm visualizer using React and Redux. Implemented an interactive user interface that dynamically illustrates the step-by-step execution of various search algorithms with a speed change slider, enhancing understanding and engagement.",
      preview: "https://tyler1588.github.io/visualizer",
      github: "https://github.com/tyler1588/visualizer",
    },
    {
      id: 3,
      img: "/student-sorter.png",
      alt: "student-sorter",
      title: "Student Sorter",
      description:
        "Worked with a team of 3 engineers to develop a hackathon project app using Next.js and TypeScript, enabling educators to upload CSV files for student data. Implemented intelligent grouping algorithms for streamlined organization and dynamic seating chart generation.",
      preview: "https://student-sorter-delta.vercel.app/",
      github: "https://github.com/tyler1588/StudentSorter",
    },
  ];
  return (
    <div id="projects" className="w-10/12 mx-auto pt-16">
      <div className="pt-5 text-center">
        <h1 className="text-4xl">Projects</h1>
        <div className="flex justify-center pt-10 gap-12 flex-wrap">
          {projectData.map((project) => (
            <Project
              key={project.id}
              img={project.img}
              alt={project.alt}
              title={project.title}
              description={project.description}
              preview={project.preview}
              github={project.github}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
