
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
      name: "Smart Water Monitoring System",
      desc: "MERN-based app to monitor water levels and quality, with responsive UI and CRUD operations.",
      img: "https://tse1.mm.bing.net/th/id/OIP.tBtVc-wTCbHCVgQjQGgQwgHaDf?rs=1&pid=ImgDetMain&o=7&rm=3",
      link: "https://smart-water-monitoring-system.vercel.app/",
    },
    {
      name: "BloodDonor Booking App",
      desc: "React app for browsing and booking blood donors with Firebase Authentication and Firestore.",
      img: "https://i.pinimg.com/originals/af/e7/b9/afe7b90735c6b1726de086ad669056f8.jpg",
      link: "https://blood-donor-app-9150a.web.app/",
    },
    {
      name: "Micro ATS Interview Scheduler ",
      desc: "Developed scheduling logic preventing overlapping bookings—demonstrating attention to detail and conflict resolution",
      img: "https://thumbs.dreamstime.com/b/online-interview-icon-simple-illustration-128919195.jpg",
      link: "https://micro-ats.vercel.app/",
    },
    {
      name: "Customer Management Dashboard",
      desc: "Developed Customer Management Dashboard Using Next.js.",
      img: "https://cdni.iconscout.com/illustration/premium/thumb/woman-managing-support-dashboard-illustration-svg-download-png-12668360.png",
      link: "https://advanced-crm-dashboard-liard.vercel.app/",
    },
    {
      name: "7UP Website",
      desc: "Interactive 7UP promotional website built using GSAP animations.",
      img: "https://www.7up.com/images/products/slider/7up_featured_m.jpg",
      link: "https://7up-softdrink-e1b867gsap.netlify.app/",
    },
    {
      name: "Travel Muse Clone",
      desc: "Tailwind CSS project cloning Travel website with responsive design.",
      img: "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg",
      link: "https://traveller-pied.vercel.app/",
    },
  
  ];

  /* ================= CUSTOMER SERVICE SKILLS ================= */

  const customerSkills = [
    {
      icon: <FaHeadset />,
      title: "Customer Service",
      text: "Handling customer queries, providing assistance and maintaining a positive service experience.",
    },
    {
      icon: <FaUsers />,
      title: "Customer Relations",
      text: "Building professional relationships with customers and understanding their needs.",
    },
    {
      icon: <FaComments />,
      title: "Communication",
      text: "Clear verbal and written communication with customers, colleagues and stakeholders.",
    },
    {
      icon: <FaTasks />,
      title: "Coordination",
      text: "Coordinating tasks between different teams and following up to ensure completion.",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Project Support",
      text: "Supporting projects through task tracking, documentation, communication and follow-up.",
    },
    {
      icon: <FaLightbulb />,
      title: "Problem Solving",
      text: "Understanding problems, identifying solutions and coordinating with the appropriate teams.",
    },

  ];

  /* ================= TECHNICAL SKILLS ================= */

  const technicalSkills = [
    "MERN Stack",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
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
      name: "REACT",
      img: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
    },
    {
      name: "MONGODB",
      img: "https://vectorseek.com/wp-content/uploads/2023/10/Mongodb-Icon-Logo-Vector.svg-.png",
    },
    {
      name: "NODE",
      img: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
    },
  ];

  /* ================= SOCIAL LINKS ================= */

  const socialLinks = [
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/rasha-mubarak/",
    },
    {
      icon: FaGithub,
      link: "https://github.com/Rashamubarak",
    },
    {
      icon: FaEnvelope,
      link: "mailto:rashamubarak458@gmail.com",
    },
    {
      icon: FaWhatsapp,
      link: "https://wa.me/9656832483",
    },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/rashamubarak_/",
    },
  ];

  return (
    <div
      style={{
        fontFamily: "Inter, Arial, sans-serif",
        background: background,
        color: "#FFFFFF",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <AppBar
        position="fixed"
        sx={{
          background: "rgba(7,11,24,0.92)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 2px 20px rgba(0,245,255,0.08)",
          borderBottom: "1px solid rgba(0,245,255,0.12)",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            minHeight: "70px",
          }}
        >
          <Typography
            sx={{
              color: primaryBlue,
              fontWeight: "bold",
              letterSpacing: "3px",
              fontSize: "18px",
              textShadow: `0 0 12px ${primaryBlue}`,
            }}
          >
            RASHA MUBARACK
          </Typography>

          <div
            style={{
              display: "flex",
              gap: "20px",
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
                offset={-70}
                duration={600}
                style={{
                  cursor: "pointer",
                  color: "#FFFFFF",
                  fontSize: "13px",
                  fontWeight: "600",
                  letterSpacing: "0.5px",
                  transition: "0.3s",
                }}
              >
                {item.toUpperCase()}
              </Link>
            ))}
          </div>
        </Toolbar>
      </AppBar>

      {/* =====================================================
          HOME
      ====================================================== */}

      <section
        id="home"
        style={{
          paddingTop: "140px",
          textAlign: "center",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* Background glow */}

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

        <Container style={{ position: "relative", zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* Profile */}

            <div
              style={{
                width: "220px",
                height: "220px",
                margin: "0 auto",
                padding: "4px",
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${primaryBlue}, ${purple})`,
                boxShadow: `0 0 35px rgba(0,245,255,0.35)`,
              }}
            >
              <img
                src={profileImage}
                alt="Rasha Mubarak"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                  border: "5px solid #070B18",
                }}
              />
            </div>

            <Typography
              sx={{
                marginTop: "30px",
                color: "#9CA3AF",
                fontSize: "14px",
                letterSpacing: "3px",
              }}
            >
              WELCOME TO MY PORTFOLIO
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: "42px",
                  md: "60px",
                },
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              Hi, I'm{" "}
              <span
                style={{
                  color: primaryBlue,
                  textShadow: `0 0 20px rgba(0,245,255,0.5)`,
                }}
              >
                Rasha Mubarak
              </span>
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: "20px",
                  md: "27px",
                },
                marginTop: "15px",
                color: primaryBlue,
                fontWeight: "bold",
                minHeight: "40px",
              }}
            >
              <Typewriter
                options={{
                  strings: [
                    "Customer Service Professional",
                    "Project Coordinator",
                    "MERN Stack Developer",
                    "Frontend Developer",
                    "Customer Experience Enthusiast",
                    "Technology Enthusiast",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 55,
                }}
              />
            </Typography>

            <Typography
              sx={{
                maxWidth: "700px",
                margin: "20px auto",
                color: "#9CA3AF",
                lineHeight: 1.8,
              }}
            >
              Customer-focused professional combining communication,
              coordination, problem-solving and technology to create
              efficient solutions and positive experiences.
            </Typography>

            <Button
              href={resumeFile}
              download
              sx={{
                mt: 3,
                background: primaryBlue,
                color: "#050816",
                padding: "12px 25px",
                borderRadius: "30px",
                fontWeight: "bold",
                boxShadow: `0 0 20px rgba(0,245,255,0.25)`,

                "&:hover": {
                  background: "#FFFFFF",
                  boxShadow: `0 0 30px rgba(0,245,255,0.6)`,
                },
              }}
            >
              <FaDownload style={{ marginRight: 10 }} />
              Download Resume
            </Button>
          </motion.div>
        </Container>
      </section>

      {/* =====================================================
          ABOUT
      ====================================================== */}

      <section
        id="about"
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
              marginBottom: "15px",
            }}
          >
            ABOUT{" "}
            <span style={{ color: primaryBlue }}>
              ME
            </span>
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              color: "#9CA3AF",
              maxWidth: "700px",
              margin: "0 auto 50px",
            }}
          >
            A combination of customer service, coordination,
            communication and technical capabilities.
          </Typography>

          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "60px",
              flexWrap: "wrap",
            }}
          >

            <motion.img
              whileHover={{ scale: 1.03 }}
              src="https://img.freepik.com/premium-vector/hand-drawing-cartoon-girl-wearing-hijab-with-smile-face_488586-717.jpg?w=2000"
              alt="About"
              style={{
                width: "300px",
                borderRadius: "50%",
                background: darkCard,
                padding: "15px",
                border: `2px solid rgba(0,245,255,0.2)`,
                boxShadow: `0 0 25px rgba(0,245,255,0.08)`,
              }}
            />

            <div
              style={{
                maxWidth: "560px",
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >

              {[
                {
                  title: "Customer Service",
                  text: "Focused on understanding customer needs, responding professionally and creating positive service experiences.",
                },
                {
                  title: "Coordination",
                  text: "Experienced in coordinating with different teams, stakeholders and organizations to complete tasks effectively.",
                },
                {
                  title: "Communication",
                  text: "Strong verbal and written communication with the ability to work with people from different backgrounds.",
                },
                {
                  title: "Technology",
                  text: "MERN stack development experience with an interest in using technology to improve processes and customer experiences.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
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
                      opacity: 0.8,
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

      {/* =====================================================
          CUSTOMER SERVICE & COORDINATION
      ====================================================== */}

      <section
        id="skills"
        style={{
          padding: "100px 0",
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
            CUSTOMER SERVICE{" "}
            <span style={{ color: primaryBlue }}>
              & COORDINATION
            </span>
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              color: "#9CA3AF",
              maxWidth: "700px",
              margin: "15px auto 50px",
            }}
          >
            Professional strengths that support customer experience,
            coordination and day-to-day operations.
          </Typography>

          <Container
            sx={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
            }}
          >

            {customerSkills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                  boxShadow:
                    "0 0 25px rgba(0,245,255,0.12)",
                }}
                style={{
                  background: darkCard,
                  padding: "28px",
                  borderRadius: "15px",
                  border: "1px solid rgba(0,245,255,0.1)",
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
                    background: "rgba(0,245,255,0.08)",
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
                    marginTop: "10px",
                  }}
                >
                  {skill.text}
                </Typography>

              </motion.div>
            ))}

          </Container>

          {/* KEYWORDS */}

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
              "Complaint Handling",
              "Stakeholder Communication",
              "Cross-functional Coordination",
              "Service Excellence",
              "Problem Solving",
              "Documentation",
              "Task Follow-up",
              "Team Collaboration",
              "Time Management",
              "Customer Experience",
              "Operations Support",
            ].map((item, index) => (
              <span
                key={index}
                style={{
                  padding: "9px 15px",
                  borderRadius: "25px",
                  border: "1px solid rgba(0,245,255,0.25)",
                  color: "#D1D5DB",
                  fontSize: "13px",
                  background: "rgba(0,245,255,0.03)",
                }}
              >
                {item}
              </span>
            ))}
          </div>

        </Container>
      </section>

      {/* =====================================================
          TECHNICAL SKILLS
      ====================================================== */}

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
            TECHNICAL{" "}
            <span style={{ color: primaryBlue }}>
              SKILLS
            </span>
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
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={index}
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

      {/* =====================================================
          TECHNOLOGIES
      ====================================================== */}

      <section
        id="languages"
        style={{
          padding: "100px 0",
        }}
      >
        <Container>

          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              marginBottom: "15px",
            }}
          >
            TECHNOLOGIES
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              color: "#9CA3AF",
              marginBottom: "50px",
            }}
          >
            Technologies and tools used across my projects.
          </Typography>

          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "30px",
            }}
          >

            {technologies.map((technology, index) => (
              <motion.div
                key={index}
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
                  width="70"
                  height="70"
                  style={{
                    objectFit: "contain",
                  }}
                />

                <Typography
                  sx={{
                    mt: 2,
                    fontWeight: "bold",
                    fontSize: "13px",
                  }}
                >
                  {technology.name}
                </Typography>

              </motion.div>
            ))}

          </Container>
        </Container>
      </section>

      {/* =====================================================
          PROJECTS
      ====================================================== */}

      <section
        id="projects"
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
            MY{" "}
            <span style={{ color: primaryBlue }}>
              PROJECTS
            </span>
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              color: "#9CA3AF",
              maxWidth: "650px",
              margin: "15px auto 45px",
            }}
          >
            A selection of projects demonstrating development,
            creativity, problem-solving and user-focused design.
          </Typography>

          <Container
            sx={{
              display: "flex",
              gap: "25px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >

            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                }}
                transition={{ duration: 0.25 }}
              >

                <Card
                  sx={{
                    width: "350px",
                    background: darkCard,
                    color: "#FFFFFF",
                    borderRadius: "15px",
                    overflow: "hidden",
                    border:
                      "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "none",
                  }}
                >

                  <img
                    src={project.img}
                    alt={project.name}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />

                  <div
                    style={{
                      padding: "22px",
                    }}
                  >

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
                        lineHeight: 1.6,
                        minHeight: "68px",
                      }}
                    >
                      {project.desc}
                    </Typography>

                    <Button
                      sx={{
                        mt: 2,
                        width: "100%",
                        background: primaryBlue,
                        color: "#050816",
                        borderRadius: "30px",
                        fontWeight: "bold",

                        "&:hover": {
                          background: "#FFFFFF",
                          boxShadow:
                            "0 0 20px rgba(0,245,255,0.5)",
                        },
                      }}
                      onClick={() =>
                        window.open(
                          project.link,
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }
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

      {/* =====================================================
          CONTACT
      ====================================================== */}

      <section
        id="contact"
        style={{
          padding: "100px 0",
          textAlign: "center",
        }}
      >
        <Container>

          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
            }}
          >
            LET'S{" "}
            <span style={{ color: primaryBlue }}>
              CONNECT
            </span>
          </Typography>

          <Typography
            sx={{
              color: "#9CA3AF",
              maxWidth: "600px",
              margin: "15px auto",
            }}
          >
            Feel free to reach out for opportunities,
            collaborations or professional connections.
          </Typography>

          <form
            action="mailto:rashamubarak458@gmail.com"
            style={{
              maxWidth: "450px",
              margin: "40px auto",
              background: darkCard,
              padding: "25px",
              borderRadius: "15px",
              border: "1px solid rgba(0,245,255,0.1)",
            }}
          >

            <input
              placeholder="Name"
              style={input}
            />

            <input
              placeholder="Email"
              type="email"
              style={input}
            />

            <textarea
              placeholder="Message"
              rows={4}
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

          {/* SOCIAL */}

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "25px",
              fontSize: "32px",
              marginTop: "35px",
            }}
          >

            {socialLinks.map((social, index) => {
              const Icon = social.icon;

              return (
                <motion.a
                  key={index}
                  whileHover={{
                    scale: 1.2,
                  }}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
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

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer
        style={{
          padding: "25px",
          textAlign: "center",
          borderTop:
            "1px solid rgba(255,255,255,0.08)",
          color: "#6B7280",
          fontSize: "13px",
        }}
      >
        © {new Date().getFullYear()} Rasha — All Rights Reserved
      </footer>

    </div>
  );
}

/* =========================================================
   INPUT STYLE
========================================================= */

const input = {
  width: "100%",
  boxSizing: "border-box",
  padding: "13px",
  background: "#070B18",
  border: "1px solid rgba(0,245,255,0.2)",
  color: "#FFFFFF",
  borderRadius: "8px",
  marginBottom: "12px",
  outline: "none",
  fontSize: "14px",
};

