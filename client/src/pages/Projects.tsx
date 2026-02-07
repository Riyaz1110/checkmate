import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      title: "Developing a Modified Deep Belief Network with Metaheuristic Optimization Algorithm for Predicting Face Emotion and Sentimental Analysis using Electroencephalogram",
      description: (
        <>
          This funding will support hosting outstanding international researchers. Associate Professor Dr. Neelakandan Subramani will join the lab as a Research Professor for 1 year through this funding.
          <br />
          <span className="block mt-2">
            <span className="font-semibold">Funding Source:</span> National Research Foundation of Korea (NRFK),
            <span className="font-semibold ml-1">Duration:</span> 2023-2024
          </span>
        </>
      ),
      status: "Completed",
      technologies: [
        "Deep Belief Network",
        "Metaheuristics",
        "EEG",
        "Emotion Recognition",
        "Sentiment Analysis"
      ],
    },
    {
      title: "New AI Technologies for Security and Affective Computing in Health",
      description: (
        <>
          Joint project with the Institute for System Programming of the Russian Academy of Sciences and North Caucasus Federal University.
          <br />
          <span className="block mt-2">
            <span className="font-semibold">Duration:</span> 2026-2028
          </span>
        </>
      ),
      status: "Ongoing",
      technologies: [
        "AI Technologies",
        "Security",
        "Affective Computing",
        "Health Applications",
        "Russian Academy Collaboration"
      ],
    }
  ];

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-white">
      {/* Light Animated Gradient Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50/60 via-purple-50/60 to-pink-50/60 opacity-80 animate-gradient-flow"></div>
      
      {/* Large Floating Light Glowing Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl opacity-50 animate-float-1"></div>
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/25 via-pink-400/25 to-amber-400/25 rounded-full blur-3xl opacity-40 animate-float-2"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl opacity-60 animate-float-3"></div>
      </div>

      {/* Subtle Pastel Particle Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="particle absolute w-2 h-2 bg-gradient-to-r from-blue-400/70 to-indigo-400/70 rounded-full blur-sm animate-particle-1"></div>
        <div className="particle absolute w-1.5 h-1.5 bg-gradient-to-r from-purple-400/70 to-pink-400/70 rounded-full blur-sm animate-particle-2"></div>
        <div className="particle absolute w-2 h-2 bg-gradient-to-r from-amber-400/70 to-orange-400/70 rounded-full blur-sm animate-particle-3"></div>
        <div className="particle absolute w-1 h-1 bg-gradient-to-r from-emerald-400/70 to-teal-400/70 rounded-full blur-sm animate-particle-4"></div>
      </div>

      {/* Light Noise Texture */}
      <div className="absolute inset-0 pointer-events-none animate-noise-light"></div>

      <main className="relative z-10 flex-1 container mx-auto px-4 lg:px-10 py-20">
        <h1 className="text-5xl lg:text-6xl font-extrabold text-center mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-lg animate-gradient">
          Projects
        </h1>

        <p className="text-center text-lg text-slate-700 mb-16 drop-shadow-sm">
          Current and completed research projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="
                group relative p-8 flex flex-col
                rounded-3xl
                backdrop-blur-xl bg-white/70 hover:bg-white/85
                border border-slate-200/60 hover:border-indigo-200/80
                shadow-xl hover:shadow-2xl hover:shadow-indigo-100/50
                transition-all duration-700
                hover:-translate-y-4 hover:scale-[1.02]
              "
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-100/40 via-purple-100/40 to-pink-100/40 opacity-0 group-hover:opacity-100 transition-all duration-700 backdrop-blur-sm"></div>

              <div className="relative z-10 flex-1">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl lg:text-2xl font-bold leading-snug text-slate-900 drop-shadow-sm">
                    {project.title}
                  </h3>

                  <Badge
                    className={`ml-3 text-sm px-3 py-1 shadow-sm ${
                      project.status === "Ongoing"
                        ? "bg-emerald-500/90 text-white border-emerald-400/50"
                        : "bg-slate-300/90 text-slate-800 border-slate-300/50"
                    } backdrop-blur-sm`}
                  >
                    {project.status}
                  </Badge>
                </div>

                <p className="text-slate-700 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="bg-white/60 backdrop-blur-md border-slate-300/50 text-slate-800 hover:bg-indigo-50/80 hover:border-indigo-300/80 transition-all shadow-sm"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button
                variant="outline"
                className="
                  w-full gap-2
                  rounded-xl
                  border-slate-300 bg-white/80 backdrop-blur-md text-slate-800 shadow-md
                  hover:bg-indigo-50 hover:border-indigo-400 hover:shadow-glow-light
                  hover:shadow-indigo-200/60 transition-all duration-400
                "
              >
                View Details
                <ExternalLink className="h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>
      </main>

      <Footer
        professorName="Dr. S. Neelakandan"
        institution="R.M.K. Engineering College"
        email="drsnk730@gmail.com"
      />

      <style jsx>{`
        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          33% { transform: translateY(-30px) rotate(120deg) scale(1.1); }
          66% { transform: translateY(-15px) rotate(240deg) scale(0.95); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          33% { transform: translateY(-20px) rotate(-120deg) scale(1.15); }
          66% { transform: translateY(-40px) rotate(-240deg) scale(1.05); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-25px) rotate(180deg) scale(1.2); }
        }
        @keyframes particle-1 {
          0% { transform: translate(0, 0) scale(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(100vw, -100vh) scale(1); opacity: 0; }
        }
        @keyframes particle-2 {
          0% { transform: translate(0, 0) scale(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(-50vw, 100vh) scale(1); opacity: 0; }
        }
        @keyframes particle-3 {
          0% { transform: translate(0, 0) scale(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(50vw, -50vh) scale(1); opacity: 0; }
        }
        @keyframes particle-4 {
          0% { transform: translate(0, 0) scale(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(100vw, 50vh) scale(1); opacity: 0; }
        }
        @keyframes noise-light {
          0%, 100% { transform: translate(0); }
          10% { transform: translate(-1px, -1px); }
          20% { transform: translate(-0.5px, 0.5px); }
          30% { transform: translate(0.5px, 1px); }
          40% { transform: translate(1px, -0.5px); }
          50% { transform: translate(-0.5px, 0.5px); }
          60% { transform: translate(-1px, 0.5px); }
          70% { transform: translate(0.5px, 1px); }
          80% { transform: translate(-0.5px, -0.5px); }
          90% { transform: translate(1px, 1px); }
        }
        .animate-gradient-flow {
          background-size: 400% 400%;
          animation: gradient-flow 25s ease infinite;
        }
        .animate-float-1 { animation: float-1 20s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 25s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 22s ease-in-out infinite; }
        .animate-particle-1 { animation: particle-1 20s linear infinite; }
        .animate-particle-2 { animation: particle-2 25s linear infinite 3s; }
        .animate-particle-3 { animation: particle-3 22s linear infinite 6s; }
        .animate-particle-4 { animation: particle-4 28s linear infinite 9s; }
        .animate-noise-light {
          background-image: 
            radial-gradient(0.3px 0.3px at 20px 30px, rgba(0,0,0,0.02) 100%),
            radial-gradient(0.4px 0.4px at 3px 70px, rgba(0,0,0,0.01) 100%),
            radial-gradient(1px 1px at 13px 100px, rgba(0,0,0,0.005) 100%);
          animation: noise-light 0.3s infinite;
          opacity: 0.05;
        }
        .shadow-glow-light {
          box-shadow: 0 10px 40px rgba(99, 102, 241, 0.15), 0 0 20px rgba(99, 102, 241, 0.1);
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-flow 10s ease infinite;
        }
      `}</style>
    </div>
  );
}
