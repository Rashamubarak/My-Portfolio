
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Typography,
  Card,
} from "@mui/material";

import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaInstagram,
  FaWhatsapp,
  FaHeadset,
  FaUsers,
  FaComments,
  FaTasks,
  FaProjectDiagram,
  FaLightbulb,
} from "react-icons/fa";

import profileImage from "./assets/profile.jpg";
import resumeFile from "./assets/resume.pdf";

export default function App() {
  /* ================= COLORS ================= */

  const primaryBlue = "#d4ff14";
  const purple = "#8B5CF6";
  const background = "#000207";
  const darkCard = "#111827";

  /* ================= PROJECTS ================= */

  const projects = [
    {
      name: "Advanced CRM Dashboard",
      desc: "Developed a customer management dashboard using Next.js to organize customer information and present business data through a structured interface.",
      img: "https://cdni.iconscout.com/illustration/premium/thumb/woman-managing-support-dashboard-illustration-svg-download-png-12668360.png",
      link: "https://advanced-crm-dashboard-liard.vercel.app/",
    },
    {
      name: "Smart Water Monitoring System",
      desc: "MERN-based application for monitoring water levels and quality, with dashboard features and CRUD operations.",
      img: "https://tse1.mm.bing.net/th/id/OIP.tBtVc-wTCbHCVgQjQGgQwgHaDf?rs=1&pid=ImgDetMain&o=7&rm=3",
      link: "https://smart-water-monitoring-system.vercel.app/",
    },
    {
      name: "Blood Donor Booking App",
      desc: "React application for browsing and booking blood donors using Firebase Authentication and Firestore.",
      img: "https://i.pinimg.com/originals/af/e7/b9/afe7b90735c6b1726de086ad669056f8.jpg",
      link: "https://blood-donor-app-9150a.web.app/",
    },
    {
      name: "Micro ATS Interview Scheduler",
      desc: "Developed an interview scheduling application with logic to detect overlapping bookings and support scheduling workflows.",
      img: "https://thumbs.dreamstime.com/b/online-interview-icon-simple-illustration-128919195.jpg",
      link: "https://micro-ats.vercel.app/",
    },
    {
      name: "7UP Website",
      desc: "Interactive promotional website featuring GSAP animations and engaging visual elements.",
      img: "https://www.7up.com/images/products/slider/7up_featured_m.jpg",
      link: "https://7up-softdrink-e1b867gsap.netlify.app/",
    },
    {
      name: "Travel Muse Clone",
      desc: "Travel website clone built using Tailwind CSS with a focus on responsive layouts and user-friendly presentation.",
      img: "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg",
      link: "https://traveller-pied.vercel.app/",
    },
  ];




/* ================= PROFESSIONAL SKILLS ================= */

const customerSkills = [
  {
    icon: <FaTasks />,
    title: "Problem Solving",
    text: "Identify issues, analyze requirements and develop practical solutions to improve user experiences.",
  },
  {
    icon: <FaComments />,
    title: "Communication",
    text: "Communicate clearly with team members and stakeholders to understand requirements and share ideas.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Team Collaboration",
    text: "Collaborate with others to support project goals, coordinate tasks and contribute to shared outcomes.",
  },
  {
    icon: <FaLightbulb />,
    title: "Adaptability & Learning",
    text: "Adapt to new tools and technologies while continuously improving technical and professional skills.",
  },
  {
    icon: <FaUsers />,
    title: "User-Focused Thinking",
    text: "Consider user needs and usability when approaching interfaces, features and digital solutions.",
  },
  {
    icon: <FaHeadset />,
    title: "Task & Project Coordination",
    text: "Organize tasks, manage priorities and follow up on activities to support timely project completion.",
  },
];


  /* ================= TECHNICAL SKILLS ================= */

  const technicalSkills = [
    "React.js",
    "Next.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "MERN Stack",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "Firebase",
    "Git & GitHub",
    "Advanced MS Excel",
  ];

  /* ================= TECHNOLOGIES ================= */

  const technologies = [
    {
      name: "HTML",
      img: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png",
    },
    {
      name: "CSS",
      img: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    },
    {
      name: "JAVASCRIPT",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "REACT",
      img: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
    },
    {
      name: "NEXT.JS",
      img: "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
    },
    {
      name: "TAILWIND CSS",
      img: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    },
    {
      name: "MONGODB",
      img: "https://vectorseek.com/wp-content/uploads/2023/10/Mongodb-Icon-Logo-Vector.svg-.png",
    },
    {
      name: "NODE.JS",
      img: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
    },
  ];

  /* ================= SOCIAL LINKS ================= */

  const socialLinks = [
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/rasha-mubarak/",
      label: "LinkedIn",
    },
    {
      icon: FaGithub,
      link: "https://github.com/Rashamubarak",
      label: "GitHub",
    },
    {
      icon: FaEnvelope,
      link: "mailto:rashamubarak458@gmail.com",
      label: "Email",
    },
    {
      icon: FaWhatsapp,
      link: "https://wa.me/9656832483",
      label: "WhatsApp",
    },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/rashamubarak_/",
      label: "Instagram",
    },
  ];

  /* ================= RENDER ================= */

  return (
    <div
      style={{
        fontFamily: "Inter, Arial, sans-serif",
        background,
        color: "#FFFFFF",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      {/* ================= NAVBAR ================= */}

      <AppBar
        position="fixed"
        sx={{
          background: "rgba(7,11,24,0.92)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 2px 20px rgba(212,255,20,0.08)",
          borderBottom: "1px solid rgba(212,255,20,0.12)",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            minHeight: "70px",
            flexWrap: "wrap",
            gap: 1,
            py: 1,
          }}
        >
          <Typography
            sx={{
              color: primaryBlue,
              fontWeight: "bold",
              letterSpacing: "2px",
              fontSize: { xs: "14px", md: "18px" },
              textShadow: `0 0 12px ${primaryBlue}`,
            }}
          >
            RASHA MUBARACK
          </Typography>

          <div
            style={{
              display: "flex",
              gap: "16px",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {[
              "home",
              "about",
              "skills",
              "languages",
              "projects",
              "contact",
            ].map((item) => (
              <Link
                key={item}
                to={item}
                smooth
                spy
                offset={-80}
                duration={600}
                style={{
                  cursor: "pointer",
                  color: "#FFFFFF",
                  fontSize: "12px",
                  fontWeight: "600",
                  letterSpacing: "0.5px",
                }}
              >
                {item.toUpperCase()}
              </Link>
            ))}
          </div>
        </Toolbar>
      </AppBar>

      {/* ================= HOME ================= */}

      <section
        id="home"
        style={{
          paddingTop: "140px",
          paddingBottom: "70px",
          textAlign: "center",
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background: primaryBlue,
            opacity: 0.06,
            filter: "blur(100px)",
            left: "-150px",
            top: "200px",
          }}
        />

        <Container sx={{ position: "relative", zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* PROFILE IMAGE */}

            <div
              style={{
                width: "220px",
                height: "220px",
                margin: "0 auto",
                padding: "4px",
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${primaryBlue}, ${purple})`,
                boxShadow: `0 0 35px rgba(212,255,20,0.18)`,
              }}
            >
              <img
                src={profileImage}
                alt="Rasha Mubarack"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                  border: "5px solid #070B18",
                  boxSizing: "border-box",
                }}
              />
            </div>

            <Typography
              sx={{
                mt: 4,
                color: "#9CA3AF",
                fontSize: "14px",
                letterSpacing: "3px",
              }}
            >
              WELCOME TO MY PORTFOLIO
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "36px", sm: "46px", md: "60px" },
                fontWeight: "bold",
                mt: 1,
              }}
            >
              Hi, I'm{" "}
              <span
                style={{
                  color: primaryBlue,
                  textShadow: `0 0 20px rgba(212,255,20,0.25)`,
                }}
              >
                Rasha Mubarack
              </span>
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "20px", md: "27px" },
                mt: 2,
                color: primaryBlue,
                fontWeight: "bold",
                minHeight: "40px",
              }}
            >
              <Typewriter
                options={{
                  strings: [
                    "Front-End Developer",
                    "React.js & Next.js Developer",
                    "MERN Stack Developer",
                    "Web Application Developer",
                    "Advanced MS Excel",
                    "Communication & Coordination",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 55,
                }}
              />
            </Typography>

            <Typography
              sx={{
                maxWidth: "720px",
                mt: 2,
                mx: "auto",
                color: "#9CA3AF",
                lineHeight: 1.8,
              }}
            >
              B.Tech graduate with web development experience, skilled in
              building user-friendly interfaces, working with data and
              collaborating to create practical digital solutions.
            </Typography>

            <Button
              href={resumeFile}
              download
              sx={{
                mt: 3,
                background: primaryBlue,
                color: "#050816",
                px: 3,
                py: 1.5,
                borderRadius: "30px",
                fontWeight: "bold",
                boxShadow: "0 0 20px rgba(212,255,20,0.15)",
                "&:hover": {
                  background: "#FFFFFF",
                  boxShadow: "0 0 30px rgba(212,255,20,0.35)",
                },
              }}
            >
              <FaDownload style={{ marginRight: 10 }} />
              Download Resume
            </Button>
          </motion.div>
        </Container>
      </section>

      {/* ================= ABOUT ================= */}

      <section
        id="about"
        style={{
          padding: "100px 0",
          background: "rgba(255,255,255,0.015)",
          scrollMarginTop: "80px",
        }}
      >
        <Container>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              mb: 2,
            }}
          >
            ABOUT <span style={{ color: primaryBlue }}>ME</span>
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              color: "#9CA3AF",
              maxWidth: "700px",
              mx: "auto",
              mb: 6,
            }}
          >
            Front-end development, web technologies, data skills and
            professional strengths that support effective collaboration.
          </Typography>

          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: 4, md: 7 },
              flexWrap: "wrap",
            }}
          >
            <motion.img
              whileHover={{ scale: 1.03 }}
              src="https://img.freepik.com/premium-vector/hand-drawing-cartoon-girl-wearing-hijab-with-smile-face_488586-717.jpg?w=2000"
              alt="Illustration"
              style={{
                width: "min(300px, 85vw)",
                borderRadius: "50%",
                background: darkCard,
                padding: "15px",
                border: "2px solid rgba(212,255,20,0.2)",
                boxShadow: "0 0 25px rgba(212,255,20,0.08)",
                boxSizing: "border-box",
              }}
            />

            <div
              style={{
                width: "100%",
                maxWidth: "560px",
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              {[
                {
                  title: "Front-End Development",
                  text: "Build responsive, user-friendly web interfaces using React.js, Next.js, JavaScript, HTML and CSS.",
                },
                {
                  title: "Full-Stack Development",
                  text: "Develop web applications using the MERN stack, with knowledge of APIs, backend integration and database management.",
                },
                {
                  title: "Data & Productivity Tools",
                  text: "Trained in Advanced MS Excel, with skills in spreadsheet management, data organization and reporting.",
                },
                {
                  title: "Communication & Coordination",
                  text: "Apply communication, teamwork, problem-solving and coordination skills to support projects and user needs.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  whileHover={{
                    scale: 1.02,
                    borderColor: primaryBlue,
                  }}
                  style={{
                    background: darkCard,
                    padding: "20px",
                    borderRadius: "12px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    transition: "0.3s",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: primaryBlue,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#D1D5DB",
                      opacity: 0.85,
                      mt: 1,
                      lineHeight: 1.7,
                    }}
                  >
                    {item.text}
                  </Typography>
                </motion.div>
              ))}
            </div>
          </Container>
        </Container>
      </section>

      {/* ================= PROFESSIONAL SKILLS ================= */}

      <section
        id="skills"
        style={{
          padding: "100px 0",
          scrollMarginTop: "80px",
        }}
      >
        <Container>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            PROFESSIONAL{" "}
            <span style={{ color: primaryBlue }}>SKILLS</span>
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              color: "#9CA3AF",
              maxWidth: "700px",
              mx: "auto",
              mt: 2,
              mb: 6,
            }}
          >
            Strong communication, problem-solving, teamwork, and coordination skills that complement my technical expertise and support effective project delivery.
          </Typography>

          <Container
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px",
            }}
          >
            {customerSkills.map((skill) => (
              <motion.div
                key={skill.title}
                whileHover={{
                  y: -8,
                  boxShadow: "0 0 25px rgba(212,255,20,0.08)",
                }}
                style={{
                  background: darkCard,
                  padding: "28px",
                  borderRadius: "15px",
                  border: "1px solid rgba(212,255,20,0.1)",
                  transition: "0.3s",
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "12px",
                    color: primaryBlue,
                    background: "rgba(212,255,20,0.08)",
                    fontSize: "23px",
                    marginBottom: "18px",
                  }}
                >
                  {skill.icon}
                </div>

                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "19px",
                  }}
                >
                  {skill.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#9CA3AF",
                    fontSize: "14px",
                    lineHeight: 1.7,
                    mt: 1,
                  }}
                >
                  {skill.text}
                </Typography>
              </motion.div>
            ))}
          </Container>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "10px",
              marginTop: "45px",
            }}
          >
            {[
              "Customer Relations",
              "Professional Communication",
              "Team Collaboration",
              "Problem Solving",
              "Documentation",
              "Task Follow-up",
              "Time Management",
              "Project Coordination",
              "Data Organization",
              "Operations Support",
            ].map((item) => (
              <span
                key={item}
                style={{
                  padding: "9px 15px",
                  borderRadius: "25px",
                  border: "1px solid rgba(212,255,20,0.25)",
                  color: "#D1D5DB",
                  fontSize: "13px",
                  background: "rgba(212,255,20,0.03)",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= TECHNICAL SKILLS ================= */}

      <section
        style={{
          padding: "100px 0",
          background: "rgba(255,255,255,0.015)",
        }}
      >
        <Container>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            TECHNICAL <span style={{ color: primaryBlue }}>SKILLS</span>
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              color: "#9CA3AF",
              mt: 2,
            }}
          >
            Technologies and tools used in my development projects.
          </Typography>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "12px",
              marginTop: "40px",
            }}
          >
            {technicalSkills.map((skill) => (
              <motion.div
                key={skill}
                whileHover={{
                  scale: 1.05,
                  color: primaryBlue,
                  borderColor: primaryBlue,
                }}
                style={{
                  padding: "12px 20px",
                  borderRadius: "30px",
                  background: darkCard,
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#D1D5DB",
                  fontSize: "14px",
                  fontWeight: "600",
                  transition: "0.3s",
                }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= TECHNOLOGIES ================= */}

      <section
        id="languages"
        style={{
          padding: "100px 0",
          scrollMarginTop: "80px",
        }}
      >
        <Container>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              mb: 2,
            }}
          >
            TECHNOLOGIES
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              color: "#9CA3AF",
              mb: 6,
            }}
          >
            Technologies and tools used across my projects.
          </Typography>

          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "25px",
            }}
          >
            {technologies.map((technology) => (
              <motion.div
                key={technology.name}
                whileHover={{
                  y: -8,
                  scale: 1.04,
                }}
                style={{
                  width: "130px",
                  height: "140px",
                  background: darkCard,
                  borderRadius: "15px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid rgba(255,255,255,0.08)",
                  transition: "0.3s",
                }}
              >
                <img
                  src={technology.img}
                  alt={technology.name}
                  width="60"
                  height="60"
                  loading="lazy"
                  style={{
                    objectFit: "contain",
                  }}
                />

                <Typography
                  sx={{
                    mt: 2,
                    fontWeight: "bold",
                    fontSize: "12px",
                    textAlign: "center",
                  }}
                >
                  {technology.name}
                </Typography>
              </motion.div>
            ))}
          </Container>
        </Container>
      </section>

      {/* ================= PROJECTS ================= */}

      <section
        id="projects"
        style={{
          padding: "100px 0",
          background: "rgba(255,255,255,0.015)",
          scrollMarginTop: "80px",
        }}
      >
        <Container>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            MY <span style={{ color: primaryBlue }}>PROJECTS</span>
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              color: "#9CA3AF",
              maxWidth: "650px",
              mx: "auto",
              mt: 2,
              mb: 6,
            }}
          >
            A selection of projects demonstrating front-end development,
            web technologies, creativity and problem-solving.
          </Typography>

          <Container
            sx={{
              display: "flex",
              gap: "25px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.name}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <Card
                  sx={{
                    width: { xs: "min(350px, 82vw)", sm: "350px" },
                    background: darkCard,
                    color: "#FFFFFF",
                    borderRadius: "15px",
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "none",
                    height: "100%",
                  }}
                >
                  <img
                    src={project.img}
                    alt={project.name}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />

                  <div style={{ padding: "22px" }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                      }}
                    >
                      {project.name}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#9CA3AF",
                        fontSize: "14px",
                        mt: 1,
                        lineHeight: 1.7,
                        minHeight: "90px",
                      }}
                    >
                      {project.desc}
                    </Typography>

                    <Button
                      component="a"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        mt: 2,
                        width: "100%",
                        background: primaryBlue,
                        color: "#050816",
                        borderRadius: "30px",
                        fontWeight: "bold",
                        "&:hover": {
                          background: "#FFFFFF",
                          boxShadow: "0 0 20px rgba(212,255,20,0.25)",
                        },
                      }}
                    >
                      VIEW PROJECT
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </Container>
        </Container>
      </section>

      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        style={{
          padding: "100px 0",
          textAlign: "center",
          scrollMarginTop: "80px",
        }}
      >
        <Container>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold" }}
          >
            LET'S <span style={{ color: primaryBlue }}>CONNECT</span>
          </Typography>

          <Typography
            sx={{
              color: "#9CA3AF",
              maxWidth: "600px",
              mx: "auto",
              mt: 2,
            }}
          >
            Feel free to reach out for front-end development opportunities,
            collaborations or professional connections.
          </Typography>

          <form
            action="mailto:rashamubarak458@gmail.com"
            method="post"
            encType="text/plain"
            style={{
              maxWidth: "450px",
              margin: "40px auto",
              background: darkCard,
              padding: "25px",
              borderRadius: "15px",
              border: "1px solid rgba(212,255,20,0.1)",
              boxSizing: "border-box",
            }}
          >
            <input
              name="Name"
              placeholder="Name"
              required
              style={input}
            />

            <input
              name="Email"
              placeholder="Email"
              type="email"
              required
              style={input}
            />

            <textarea
              name="Message"
              placeholder="Message"
              rows={4}
              required
              style={input}
            />

            <Button
              type="submit"
              sx={{
                background: primaryBlue,
                color: "#050816",
                width: "100%",
                mt: 1,
                borderRadius: "30px",
                fontWeight: "bold",
                "&:hover": {
                  background: "#FFFFFF",
                },
              }}
            >
              SEND MESSAGE
            </Button>
          </form>

          {/* SOCIAL LINKS */}

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "25px",
              fontSize: "30px",
              marginTop: "35px",
              flexWrap: "wrap",
            }}
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <motion.a
                  key={social.label}
                  whileHover={{
                    scale: 1.2,
                    color: primaryBlue,
                  }}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  style={{
                    color: "#FFFFFF",
                    transition: "0.3s",
                  }}
                >
                  <Icon />
                </motion.a>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ================= FOOTER ================= */}

      <footer
        style={{
          padding: "25px",
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          color: "#6B7280",
          fontSize: "13px",
        }}
      >
        © {new Date().getFullYear()} Rasha Mubarack — All Rights Reserved
      </footer>
    </div>
  );
}

/* ================= INPUT STYLE ================= */

const input = {
  width: "100%",
  boxSizing: "border-box",
  padding: "13px",
  background: "#070B18",
  border: "1px solid rgba(212,255,20,0.2)",
  color: "#FFFFFF",
  borderRadius: "8px",
  marginBottom: "12px",
  outline: "none",
  fontSize: "14px",
  fontFamily: "inherit",
};
