import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle"
import { StarBackground } from "@/components/StarBackground"
import { Navbar } from "@/components/Navbar"

//TODO:Hide Empty URLs

const projects = [
  {
    id: 1,
    title: "Tang's Labyrinth",
    description: "A website built for the purposes of showcasing my other projects. Built with React and TailwindCSS, deployed on Vercel. Constantly being worked on!",
    image: "/projects/labyrinth.png",
    tags: ["React", "TailwindCSS", "Vercel"],
    demoUrl: "#",
    githubUrl: "https://github.com/Lintangalit2002/TangsLabyrinth",
  },
  {
    id: 2,
    title: "SenseHub",
    description: "An online database and dashboard webapp built for IMEC with a team of 8 people. Gathers sensor data from the Workplace Vitality Hub in the High Tech Campus, Eindhoven. Code unavailable due to being stored on IMEC's proprietary Azure repository",
    image: "/projects/sensehub.png",
    tags: ["RestAPI", "Django", "postgreSQL"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Process Mining Project",
    description: "A process mining tool for the business process intelligence challenge. Acted as scrum master in a group of 6 people. Recieved a 9/10.",
    image: "/projects/processmining.png",
    tags: ["Process Mining", "Neural Networks", "Business Process Intelligence"],
    demoUrl: "#",
    githubUrl: "https://github.com/Lintangalit2002/BPI_Challenge_Process_Mining",
  },
  {
    id: 4,
    title: "movieViz",
    description: "A visual analytics tool for movie night, built with dash. Features TF-IDF clustering and heatmap visualizations.",
    image: "/projects/movieviz.png",
    tags: ["Dash", "scikit-learn", "Python", "plotly"],
    demoUrl: "#",
    githubUrl: "https://github.com/Lintangalit2002/2AMV10-2025-Group-15",
  },

];

export const Projects = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <ThemeToggle />
        <StarBackground />
        <Navbar />
        <section id="projects" className="py-24 px-4 relative">
            
        <div className="container mx-auto max-w-5xl">
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {" "}
            Featured <span className="text-primary"> Projects </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, key) => (
                <div
                key={key}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                >
                <div className="h-48 overflow-hidden">
                    <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                        {tag}
                        </span>
                    ))}
                    </div>

                    <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                    </p>
                    <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                        <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                        <Github size={20} />
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            ))}
            </div>

            <div className="text-center mt-12">
            <a
                className="cosmic-button w-fit flex items-center mx-auto gap-2"
                target="_blank"
                href="https://github.com/lintangalit2002"
            >
                Check My Github
            </a>
            </div>
        </div>
        </section>
    </div>
  );
};