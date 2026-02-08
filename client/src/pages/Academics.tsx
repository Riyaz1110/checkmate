import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase } from "lucide-react";
import annaUniLogo from "@assets/anna-university-logo.png";
import velTechLogo from "@assets/veltech-logo.png";
import lcrLogo from "@assets/lcr-logo.png";
import johnBoscoLogo from "@assets/john-bosco-logo.png";
import hanyangLogo from "@assets/hanyang-logo.png";
import rmkLogo from "@assets/rmk-logo.png";
import jeppiaarLogo from "@assets/jeppiaar-logo.png";
import techMultiLogo from "@assets/techmulti-logo.png";
import Gyeongsang from "@assets/Gyeongsang.png";

function TimelineDot({ icon, color, logoUrl }) {
  return (
    <div
      className={`flex items-center justify-center
      w-28 h-28 lg:w-36 lg:h-36
      shadow-2xl border-4 border-white z-20 relative overflow-hidden
      bg-gradient-to-br ${color} rounded-2xl`}
    >
      {logoUrl ? (
        <img
          src={logoUrl}
          alt="Institution Logo"
          className="w-24 h-24 lg:w-32 lg:h-32 bg-white/95 p-3 shadow-xl border-2 border-white/80 object-contain rounded-xl"
        />
      ) : (
        icon
      )}
    </div>
  );
}


export default function Academics() {
  const education = [
    {
      degree: "Ph.D. (Computer Science & Engineering)",
      institution: "Anna University",
      year: "May 2021",
      logoUrl: annaUniLogo,
    },
    {
      degree: "M.E (Computer Science & Engineering)",
      institution: "Vel Tech Engineering College, Anna University",
      year: "2007 - 2009",
      logoUrl: velTechLogo,
    },
    {
      degree: "B.E (Computer Science & Engineering)",
      institution: "L.C.R College of Engineering & Technology, Anna University",
      year: "2003 - 2006",
      logoUrl: lcrLogo,
    },
    {
      degree: "Diploma (Computer Science & Engineering)",
      institution: "John Bosco Polytechnic College, Directorate of Technical Education",
      year: "2000 - 2003",
      logoUrl: johnBoscoLogo,
    },
  ];

  const experience = [
    {
      position: "Professor - Research",
      institution: "R.M.K. Engineering College",
      department: "Department of Computer Science & Engineering",
      period: "Sep 2021 - Mar 2024",
      logoUrl: rmkLogo,
    },
    {
      position: "Research Professor",
      institution: "Hanyang University",
      department: "Brain Pool Fellowship funded by National Research Foundation, South Korea",
      period: "Mar 2024 - Till Date",
      logoUrl: hanyangLogo,
    },
    {
      position: "Research Professor",
      institution: "Gyeongsang National University",
      department: "Brain Pool Fellowship funded by National Research Foundation, South Korea",
      period: "Sep 2023 - Till Date",
      logoUrl: Gyeongsang,
    },
    {
      position: "Assistant Professor",
      institution: "Jeppiaar Institute of Technology",
      department: "Department of Information Technology",
      period: "July 2014 - Sep 2021",
      logoUrl: jeppiaarLogo,
    },
    {
      position: "Assistant Professor",
      institution: "R.M.K. College of Engineering and Technology",
      department: "Department of Computer Science & Engineering",
      period: "May 2011 - April 2014",
      logoUrl: rmkLogo,
    },
    {
      position: "Assistant Professor",
      institution: "Tech Multi Tech Dr.RR & Dr.SR Engineering College",
      department: "Department of Information Technology",
      period: "March 2009 - April 2011",
      logoUrl: techMultiLogo,
    },
  ];

  function renderTimeline(entries, color) {
    return (
      <section className="relative my-20 lg:my-24">
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 h-full w-2 bg-gradient-to-b from-violet-200 via-blue-200 to-pink-200 z-10"></div>

        <div className="flex flex-col gap-24 lg:gap-28 relative">
          {entries.map((entry, idx) => {
            const leftSide = idx % 2 === 0;

            return (
              <div key={idx} className="flex flex-col md:flex-row md:items-center relative">
                {leftSide ? (
                  <>
                    <div className="md:w-5/12 md:pr-12 lg:pr-16 flex md:justify-end md:text-right z-20">
                      <Card className="p-8 lg:p-10 border border-violet-200 bg-gradient-to-tr from-white/80 to-purple-50 shadow-xl rounded-2xl transition-all duration-300 hover:scale-105 hover:bg-blue-100/80 hover:border-sky-300 animate-fade-slide-up">
                        <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-2">
                          {entry.degree || entry.position}
                        </h3>

                        <p className="text-lg lg:text-xl font-semibold text-violet-700">
                          {entry.institution}
                        </p>

                        {entry.department && (
                          <p className="text-base lg:text-lg text-slate-600 mt-1">
                            {entry.department}
                          </p>
                        )}

                        <p className="text-base lg:text-lg text-slate-500 mt-1 font-medium">
                          {entry.year || entry.period}
                        </p>
                      </Card>
                    </div>

                    <div className="md:w-2/12 flex items-center justify-center">
                      <TimelineDot icon={<GraduationCap className="w-12 h-12 lg:w-14 lg:h-14 text-white" />} color={color} logoUrl={entry.logoUrl} />
                    </div>

                    <div className="md:w-5/12"></div>
                  </>
                ) : (
                  <>
                    <div className="md:w-5/12"></div>

                    <div className="md:w-2/12 flex items-center justify-center">
                      <TimelineDot icon={<Briefcase className="w-12 h-12 lg:w-14 lg:h-14 text-white" />} color={color} logoUrl={entry.logoUrl} />
                    </div>

                    <div className="md:w-5/12 md:pl-12 lg:pl-16 flex md:justify-start md:text-left z-20">
                      <Card className="p-8 lg:p-10 border border-violet-200 bg-gradient-to-tr from-white/80 to-purple-50 shadow-xl rounded-2xl transition-all duration-300 hover:scale-105 hover:bg-blue-100/80 hover:border-sky-300 animate-fade-slide-up">
                        <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-2">
                          {entry.degree || entry.position}
                        </h3>

                        <p className="text-lg lg:text-xl font-semibold text-violet-700">
                          {entry.institution}
                        </p>

                        {entry.department && (
                          <p className="text-base lg:text-lg text-slate-600 mt-1">
                            {entry.department}
                          </p>
                        )}

                        <p className="text-base lg:text-lg text-slate-500 mt-1 font-medium">
                          {entry.year || entry.period}
                        </p>
                      </Card>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-white to-blue-100 overflow-hidden">
      <main className="flex-1 container mx-auto px-4 lg:px-8 py-16 lg:py-20">

        <h1 className="text-5xl lg:text-6xl font-extrabold mb-14 lg:mb-20 text-center tracking-tight bg-gradient-to-r from-purple-700 via-fuchsia-500 to-blue-400 bg-clip-text text-transparent animate-gradient">
          Academics & Experience
        </h1>

        <div className="mb-10 lg:mb-16 flex items-center gap-4 justify-center">
          <GraduationCap className="h-11 w-11 lg:h-14 lg:w-14 text-violet-700 animate-bounce" />
          <h2 className="text-3xl lg:text-4xl font-bold text-violet-600">Education</h2>
        </div>

        {renderTimeline(education, "from-violet-400 via-blue-400 to-purple-400")}

        <div className="mb-10 lg:mb-16 flex items-center gap-4 justify-center">
          <Briefcase className="h-11 w-11 lg:h-14 lg:w-14 text-pink-600 animate-bounce" />
          <h2 className="text-3xl lg:text-4xl font-bold text-pink-600">Experience</h2>
        </div>

        {renderTimeline(experience, "from-pink-400 via-blue-400 to-violet-400")}
      </main>

      <Footer
        professorName="Dr. S. Neelakandan"
        institution="R.M.K. Engineering College"
        email="drsnk730@gmail.com"
        linkedin="https://linkedin.com"
        youtube="https://youtube.com"
      />
    </div>
  );
}
