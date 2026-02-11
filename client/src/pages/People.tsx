// import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import p1 from "@assets/image1.png";
import p2 from "@assets/image2.png";
import p3 from "@assets/image3.png";
import p4 from "@assets/image4.png";
import p5 from "@assets/image5.png";
import p6 from "@assets/image6.png";
import p7 from "@assets/image7.png";
import p8 from "@assets/image8.png";
import p9 from "@assets/image9.png";
import professorPhoto from "@assets/imagep.png";

export default function People() {
  const people = [
    {
      name: "Mr. Shine Henry (Ph.D)",
      role: "Assistant Professor",
      area: "Jeppiaar Institute of Technology",
      email: "shinehenry@example.com",
      linkedin: "https://www.linkedin.com/in/shine-henry-22966019a",
      logo: p1,
    },
    {
      name: "Ms. Indhumathi.C (Ph.D)",
      role: "Assistant Professor",
      area: "Sri Sai Ram Engineering College",
      email: "indhumathi@example.com",
      linkedin: "https://www.linkedin.com/in/indhumathi-c-8220b210 ",
      logo: p2,
    },
    {
      name: "Mr. Premkumar.R (Ph.D)",
      role: "Assistant Professor",
      area: "R.M.K College of Engineering and Technology",
      email: "premkumar@example.com",
      linkedin: "https://www.linkedin.com/",
      logo: p3,
    },
  ];

  const masterStudents = [
    {
      name: "Mr. Thamaraiselvan.K",
      course: "M.E. Computer Science and Engineering",
      institution: "R.M.K Engineering College",
      image: p4,
      linkedin: "https://www.linkedin.com/in/thamaraiselvan-k-52b174246 ",
      // email: "thamaraiselvan@example.com",
    },
  ];

  const postGraduateStudents = [
    {
      name: "Ms.Haripriya.N",
      program: "M.E. - Computer Science and Engineering",
      year: "2024 - 2026",
      institution: "R.M.K Engineering College",
      // email: "hari2402.pcs@rmkec.ac.in",
      image: p5,
      linkedin: "https://linkedin.com/in/haripriya-n",
    },
    {
      name: "Ms.Shree Gaayathri. V",
      program: "M.E. - Computer Science and Engineering",
      year: "2024 - 2026",
      institution: "R.M.K Engineering College",
      // email: "shree24003.pcs@rmkec.ac.in",
      image: p6,
      linkedin: "https://linkedin.com/in/shree-gaayathri-v",
    },
    {
      name: "Ms.Aparna. T",
      program: "M.E. - Computer Science and Engineering",
      year: "2024 - 2026",
      institution: "R.M.K Engineering College",
      // email: "agar24001.pcs@rmkec.ac.in",
      image: p7,
      linkedin: "https://linkedin.com/in/aparna-t",
    },
    {
      name: "Ms.Harinee.K",
      program: "M.E. - Computer Science and Engineering",
      year: "2024 - 2026",
      institution: "R.M.K Engineering College",
      // email: "hari24005.pcs@rmkec.ac.in",
      image: p8,
      linkedin: "https://linkedin.com/in/harinee-k",
    },
    {
      name: "Mr. Thillaiselvan A.S",
      program: "M.E. - Computer Science and Engineering",
      year: "2024 - 2026",
      institution: "R.M.K Engineering College",
      // email: "thil24004.pcs@rmkec.ac.in",
      image: p9,
      linkedin: "https://linkedin.com/in/thillaiselvan-a-s",
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-tr from-sky-100 via-purple-50 to-pink-100">
      {/* Enhanced Animated background blobs */}
      <div className="absolute top-[-130px] left-[-120px] w-[360px] h-[360px] bg-gradient-to-br from-pink-300 via-yellow-100 to-rose-200 opacity-25 blur-[90px] rounded-full animate-float z-0"></div>
      <div className="absolute bottom-[-180px] right-[-140px] w-[440px] h-[440px] bg-gradient-to-bl from-sky-400 via-green-200 to-indigo-100 opacity-20 blur-[110px] rounded-full animate-float z-0"></div>
      <div className="absolute top-[180px] right-[-140px] w-[240px] h-[240px] bg-gradient-to-tr from-violet-200 via-pink-200 to-yellow-100 opacity-30 blur-[80px] rounded-full animate-float z-0"></div>
      {/* Main Content Layer */}
      <div className="relative z-10">
  <main className="flex-1">
    <div className="container mx-auto px-4 lg:px-8 py-16">
      <div className="mb-16 flex justify-center">
  <div className="w-full max-w-4xl">

    <h2 className="text-3xl lg:text-4xl font-extrabold text-center text-red-700 mb-8">
      Principal Investigator
    </h2>

    <Card className="
      flex flex-col md:flex-row items-center gap-6
      p-6 md:p-8
      bg-white/90 backdrop-blur-md
      shadow-xl
      border border-gray-200
      rounded-2xl
      hover:shadow-2xl
      transition-all duration-300
    ">

      <img
        src={professorPhoto}
        alt="Dr. Neelakandan Subramani"
        className="
          w-40 h-48
          md:w-44 md:h-52
          object-cover
          rounded-xl
          shadow-md
        "
      />

      <div className="space-y-2 text-center md:text-left">

        <h3 className="text-xl font-bold text-purple-700">
          Dr. Neelakandan Subramani
        </h3>

        <ul className="text-gray-700 space-y-1 text-sm leading-relaxed">
          <li>Professor – Research</li>
          <li>Department of Computer Science and Engineering</li>
          <li>R.M.K. Engineering College, Chennai</li>
          <li>
            <span className="font-medium">Email:</span>{" "}
            snk.cse@rmkec.ac.in | drsnk1730@gmail.com
          </li>
        </ul>

      </div>
    </Card>

  </div>
</div>



      {/* Page Title */}
      <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 text-center text-gray-800">
        People
      </h1>
      <br/>
      <br/>

      {/* <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        Meet the passionate team of scholars, researchers, and innovators shaping the future.
      </p> */}


      {/* Doctorate Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-primary tracking-wide">
          Ph.D  Students
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mt-3 rounded-full"></div>
      </div>


      {/* Research Team Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {people.map((person, index) => (
          <Card
            key={index}
            className="p-6 bg-white/60 backdrop-blur-lg shadow-2xl border border-sky-200 rounded-xl hover:scale-105 hover:bg-gradient-to-br hover:from-rose-100 hover:to-sky-50 transition-transform duration-300 animate-float"
            data-testid={`card-person-${index}`}
          >
            <div className="flex flex-col items-center text-center space-y-4">

              {person.logo ? (
                <img
                  src={person.logo}
                  alt={`${person.name} logo`}
                  className="w-24 h-24 rounded-full object-cover border shadow-md animate-wiggle"
                />
              ) : (
                <Avatar className="w-24 h-24 animate-wiggle">
                  <AvatarFallback className="text-2xl bg-primary/10 text-primary">
                    {person.name.split(" ").map((n) => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
              )}

              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {person.name}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {person.role}
                </p>

                <p className="text-sm text-muted-foreground italic">
                  {person.area}
                </p>
              </div>


              <div className="flex flex-col gap-2 w-full">

                {/* <a
                  href={`mailto:${person.email}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 border rounded-md text-sm font-medium text-primary border-primary transition-all duration-300 hover:bg-gradient-to-r hover:from-sky-100 hover:to-pink-100"
                  data-testid={`button-email-${index}`}
                >
                  <Mail className="h-4 w-4 animate-bounce" />
                  Contact
                </a> */}


                {person.linkedin && (
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 border rounded-md text-sm font-medium text-primary border-primary transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-100 hover:to-yellow-100"
                    data-testid={`button-linkedin-${index}`}
                  >
                    <FaLinkedin className="h-4 w-4 animate-bounce" />
                    LinkedIn
                  </a>
                )}

              </div>
            </div>
          </Card>
        ))}

      </div>

            {/* Alumni Section Title */}


{/* Master Students */}
<br/>
<br/>
<br/>
<h2 className="text-3xl font-bold mb-8 text-slate-800 text-center">
  Master Students
</h2>
<div className="text-center mt-20 mb-10">
  <h2 className="text-3xl font-bold text-primary tracking-wide">
    Alumni
  </h2>
  <div className="w-24 h-1 bg-primary mx-auto mt-3 rounded-full"></div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {masterStudents.map((student, idx) => (
    <Card
      key={idx}
      className="p-6 bg-white/70 backdrop-blur-lg shadow-xl border border-rose-200 rounded-xl hover:scale-105 hover:rotate-2 transition duration-300 animate-float"
      data-testid={`card-master-${idx}`}
    >
      <div className="flex flex-col items-center text-center space-y-4">

        <img
          src={student.image}
          alt={student.name}
          className="w-32 h-32 object-cover rounded-full border shadow-sm animate-wiggle"
        />

        <h3 className="text-lg font-semibold text-rose-600">
          {student.name}
        </h3>

        <p className="text-sm text-muted-foreground font-semibold">
          {student.course}
        </p>

        <p className="text-sm text-muted-foreground">
          {student.institution}
        </p>

        <p className="text-sm text-muted-foreground">
          {student.email}
        </p>

        <div className="flex gap-2 mt-3">

          <a
            href={student.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border rounded-md text-sm font-medium text-primary border-primary hover:bg-gradient-to-r hover:from-yellow-50 hover:to-rose-100 transition-all duration-300"
            data-testid={`button-linkedin-master-${idx}`}
          >
            <FaLinkedin className="h-5 w-5 animate-bounce" />
            LinkedIn
          </a>

          {/* <a
            href={`mailto:${student.email}`}
            className="inline-flex items-center px-4 py-2 border rounded-md text-sm font-medium text-primary border-primary hover:bg-gradient-to-r hover:from-sky-100 hover:to-pink-100 transition-all duration-300"
            data-testid={`button-email-master-${idx}`}
          >
            <Mail className="h-5 w-5 animate-bounce" />
            Contact
          </a> */}

        </div>
      </div>
    </Card>
  ))}
</div>

            {/* Current Post Graduate Students */}
            <h2 className="text-3xl font-bold mt-20 mb-8 text-slate-800 text-center">
              Current Post Graduate Students
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {postGraduateStudents.map((student, idx) => (
                <Card
                  key={idx}
                  className="p-6 bg-white/80 backdrop-blur-lg shadow-2xl border border-purple-200 rounded-xl hover:scale-110 hover:rotate-1 transition-all duration-300 animate-float"
                  data-testid={`card-postgraduate-${idx}`}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <img
                      src={student.image}
                      alt={student.name}
                      className="w-32 h-32 object-cover rounded-full border shadow-sm animate-wiggle"
                    />
                    <h3 className="text-lg font-semibold text-rose-600">{student.name}</h3>
                    <p className="text-sm text-muted-foreground font-semibold">{student.program}</p>
                    <p className="text-sm text-muted-foreground">{student.year}</p>
                    <p className="text-sm text-muted-foreground">{student.institution}</p>
                    <p className="text-sm text-muted-foreground">{student.email}</p>
                    <div className="flex gap-2 mt-3">
                      {/* <a
                        href={student.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border rounded-md text-sm font-medium text-primary border-primary hover:bg-gradient-to-r hover:from-purple-100 hover:to-yellow-100 transition-all duration-300"
                        data-testid={`button-linkedin-postgraduate-${idx}`}
                      >
                        <FaLinkedin className="h-5 w-5 animate-bounce" />
                        LinkedIn
                      </a> */}
                      {/* <a
                        href={`mailto:${student.email}`}
                        className="inline-flex items-center px-4 py-2 border rounded-md text-sm font-medium text-primary border-primary hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-100 transition-all duration-300"
                      >
                        <Mail className="h-5 w-5 animate-bounce" />
                        Contact
                      </a> */}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </main>
        <Footer
          professorName="Dr. S. Neelakandan"
          institution="R.M.K. Engineering College"
          email="drsnk730@gmail.com"
          linkedin="https://linkedin.com"
          youtube="https://youtube.com"
        />
      </div>
    </div>
  );
}
