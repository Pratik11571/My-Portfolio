import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Task Manager",
    description:
      "Role-based MERN Task Manager with task assignment, progress tracking, and interactive reports.",
    image: "/projects/Project1.png",
    tags: ["React", "MongoDB Atlas", "TailwindCSS", "Nodejs"],
    demoUrl: "https://task-manager-roan-eight-84.vercel.app/",
    githubUrl: "https://github.com/Pratik11571/Task-Manager",
  },
  {
    id: 2,
    title: "Event Management Platform",
    description:
      "Full-stack app for event creation and volunteer registration with real-time notifications and automated alerts, built using Node.js, Express.js, MongoDB, and JavaScript(EJS as npm package).",
    image: "/projects/Project2.png",
    tags: ["Nodejs", "Expressjs", "MongoDB Atlas"],
    demoUrl: "https://event-management-uqwk.onrender.com/",
    githubUrl: "https://github.com/Pratik11571/Event-Management",
  },
  {
    id: 3,
    title: "Finance Tracker",
    description:
      "Built a finance management platform to add expenses, manage multiple accounts with budgets, categorize transactions, upload AI-powered bill receipts, set recurring payments, and visualize income/expenses with charts.",
    image: "/projects/Project3.png",
    tags: ["Nextjs", "Shadcn UI", "Clerk"],
    demoUrl: "https://finance-tracker-eight-topaz.vercel.app/",
    githubUrl: "https://github.com/Pratik11571/Finance-Tracker",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was crafted with
          attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-xl overflow-hidden shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="overflow-hidden h-[250px] md:h-[300px] rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground transition-opacity duration-300 group-hover:opacity-90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex space-x-4">
  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
    <button className="flex items-center gap-1 px-5 sm:px-10 py-3 rounded text-md text-white bg-blue-500 hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500">
      <ExternalLink size={18} /> Demo
    </button>
  </a>
  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
    <button className="flex items-center gap-1 px-5 sm:px-10 py-3 rounded text-md text-white bg-gray-800 hover:bg-gray-700 dark:bg-gray-200 dark:text-black dark:hover:bg-gray-300">
      <Github size={20} /> Code
    </button>
  </a>
</div>

              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Pratik11571"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
