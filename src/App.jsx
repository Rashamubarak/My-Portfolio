import { useState } from "react";
import { AppBar, Toolbar, Button, Container, Typography, Grid, Card, Chip } from "@mui/material";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaInstagram, FaWhatsapp } from "react-icons/fa";

import profileImage from "./assets/profile.jpg";
import resumeFile from "./assets/resume.pdf";
import Reveal from "./components/Reveal"; // Scroll animation wrapper



export default function App() {

  const primaryBlue = "#1E90FF";
  const [selected, setSelected] = useState("education");

  return (
    <div style={{ fontFamily: "Inter, sans-serif", background: "#0A0F24", color: "#fff" }}>

      {/* NAVBAR */}
      <AppBar position="fixed" sx={{ background: "#000", borderBottom: `2px solid ${primaryBlue}` }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: primaryBlue }}>RASHA</Typography>

          <div style={{ display: "flex", gap: "20px", fontWeight: "bold" }}>
            {["home", "about", "projects", "experience", "skills", "contact"].map((item) => (
              <Link key={item} to={item} smooth duration={600} style={{ cursor: "pointer", color: "#fff" }}>
                {item.toUpperCase()}
              </Link>
            ))}
          </div>
        </Toolbar>
      </AppBar>



      {/* HERO SECTION */}
      <section
        id="home"
        style={{
          paddingTop: "150px",
          textAlign: "center",
          minHeight: "100vh",
          position: "relative",
          background: "radial-gradient(circle at top, #1E90FF22, #0A0F24 80%)",
        }}
      >

        {/* Background Grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('https://static.vecteezy.com/system/resources/previews/001/993/784/original/futuristic-technology-particle-wave-background-free-vector.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.12,
            filter: "blur(1px)",
          }}
        ></div>

        <Container style={{ position: "relative", zIndex: 2 }}>
          
          <motion.img
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            src={profileImage}
            alt="Profile"
            style={{
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: "0px 0px 25px rgba(30,144,255,0.35)",
            }}
          />

          <Typography variant="h3" sx={{ mt: 3, fontWeight: "bold" }}>
            Hi, I'm <span style={{ color: primaryBlue }}>Rasha</span>
          </Typography>

          <Typography sx={{ fontSize: "22px", marginTop: "10px", color: "#BFD7FF", fontWeight: 500 }}>
            <Typewriter
              options={{
                strings: ["MERN Stack Developer", "Frontend Engineer", "UI Enthusiast"],
                autoStart: true,
                loop: true,
              }}
            />
          </Typography>

          <Typography
            sx={{
              margin: "25px auto",
              maxWidth: "650px",
              lineHeight: "1.7",
              opacity: ".9",
              fontSize: "16px",
            }}
          >
            I specialize in building modern and responsive web applications using the MERN stack.
            My focus is on clean UI, accessibility, performance and scalable architecture.
          </Typography>

          <div style={{ marginTop: "25px", display: "flex", gap: "15px", justifyContent: "center" }}>
            <Button
              href={resumeFile}
              download
              startIcon={<FaDownload />}
              variant="contained"
              sx={{ background: primaryBlue, padding: "10px 22px" }}
            >
              Download Resume
            </Button>

            <Button
              variant="outlined"
              sx={{ borderColor: primaryBlue, color: primaryBlue, padding: "10px 22px" }}
              onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
            >
              Contact Me
            </Button>
          </div>
        </Container>
      </section>


      {/* PROJECTS */}
      <Reveal>
      <section id="projects" style={{ padding: "90px 0", textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: primaryBlue }}>PROJECTS</Typography>

        <Container sx={{ marginTop: "40px" }}>
          <Grid container spacing={4} justifyContent="center">

            {[   
              {
                title: "Blood Donor App",
                description: "A responsive blood donation platform using React and Firebase.",
                tech: ["React", "Firebase", "Material UI"],
                demo: "https://blood-donor-app-9150a.web.app/",
              },
              {
                title: "AquaCare Monitoring System",
                description: "Smart MERN-based dashboard for tracking water quality and purifier health.",
                tech: ["MongoDB", "Express", "React", "Node.js"],
                demo: "#",
              },
              {
                title: "Traveller App",
                description: "A responsive travel landing page made using Bootstrap.",
                tech: ["HTML", "Bootstrap", "CSS"],
                demo: "https://traveller-pied.vercel.app/",
              },
            ].map((project, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <motion.div whileHover={{ scale: 1.04 }}>
                  <Card sx={{
                    background: "#111827",
                    padding: "15px",
                    borderRadius: "10px",
                    height: "220px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    border: "1px solid #1E90FF40",
                    boxShadow: "0px 0px 12px rgba(30,144,255,.2)"
                  }}>

                    <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: primaryBlue }}>
                      {project.title}
                    </Typography>

                    <Typography sx={{ color: "#fff", textAlign: "center", fontSize: "14px" }}>
                      {project.description}
                    </Typography>

                    <div style={{ display: "flex", gap: "6px", justifyContent: "center", flexWrap: "wrap" }}>
                      {project.tech.map((t, index) => (
                        <Chip key={index} label={t} size="small" sx={{ background: primaryBlue, color: "#fff", fontSize: "11px" }} />
                      ))}
                    </div>

                    {project.demo && (
                      <Button size="small" variant="outlined" href={project.demo} target="_blank"
                        sx={{ borderColor: primaryBlue, color: primaryBlue }}>
                        Live Demo
                      </Button>
                    )}

                  </Card>
                </motion.div>
              </Grid>
            ))}

          </Grid>
        </Container>
      </section>
      </Reveal>




      {/* EXPERIENCE */}
      <Reveal>
      <section id="experience" style={{ padding: "90px 0", textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: primaryBlue }}>EXPERIENCE & EDUCATION</Typography>

        <Container>
          <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "15px" }}>
            <Button variant={selected === "education" ? "contained" : "outlined"} sx={{ borderColor: primaryBlue }} onClick={() => setSelected("education")}>
              Education
            </Button>
            <Button variant={selected === "experience" ? "contained" : "outlined"} sx={{ borderColor: primaryBlue }} onClick={() => setSelected("experience")}>
              Experience
            </Button>
          </div>

          <motion.div key={selected} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            style={{ background: "#111827", padding: "25px", margin: "30px auto", borderRadius: "10px", maxWidth: "600px" }}>
            
            {selected === "education" ? (
              <>
                <Typography variant="h6">B.Tech — Electronics & Communication Engineering</Typography>
                <Typography sx={{ opacity: 0.7 }}>APJ Abdul Kalam Technological University | 2021 - 2025</Typography>

                <br />

                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>Higher Secondary Education</Typography>
                <Typography sx={{ opacity: 0.7 }}>Dayapuram Residential School | 2019 - 2021</Typography>
              </>
            ) : (
              <>
                <Typography variant="h6">MERN Stack Developer Intern</Typography>
                <Typography sx={{ opacity: 0.7 }}>Luminar Technolab, Kochi</Typography>
              </>
            )}
          </motion.div>
        </Container>
      </section>
      </Reveal>




      {/* SKILLS */}
      <Reveal>
      <section id="skills" style={{ padding: "90px 0", textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: primaryBlue }}>SKILLS</Typography>

        <Container sx={{ marginTop: "30px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))", gap: "15px" }}>
            {["React", "Node.js", "MongoDB", "TailwindCSS", "Firebase", "Express.js", "Git", "JavaScript"].map((skill, i) => (
              <motion.div key={i} whileHover={{ scale: 1.08 }}
                style={{ padding: "15px", background: "#111827", textAlign: "center", borderRadius: "8px", fontWeight: "bold" }}>
                {skill}
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
      </Reveal>




      {/* CONTACT */}
      <Reveal>
      <section id="contact" style={{ padding: "90px 0", textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: primaryBlue }}>CONTACT</Typography>
        <Typography sx={{ opacity: 0.7, marginTop: "5px" }}>Let’s collaborate or connect!</Typography>

        <Container>
          <div style={{ maxWidth: "450px", margin: "40px auto" }}>
            <input placeholder="Your Name" style={inputStyle} />
            <input placeholder="Email" type="email" style={inputStyle} />
            <input placeholder="Phone (optional)" style={inputStyle} />
            <textarea placeholder="Message..." rows="5" style={inputStyle}></textarea>
            <Button variant="contained" sx={{ width: "100%", background: primaryBlue }}>Send Message</Button>
          </div>

          <div style={{ marginTop: "35px", fontSize: "35px", display: "flex", gap: "25px", justifyContent: "center" }}>
            <a href="https://linkedin.com" target="_blank" style={{ color: "#fff" }}><FaLinkedin /></a>
            <a href="https://github.com" target="_blank" style={{ color: "#fff" }}><FaGithub /></a>
            <a href="mailto:rashamubarak458@gmail.com" style={{ color: "#fff" }}><FaEnvelope /></a>
            <a href="https://wa.me/918113473680" target="_blank" style={{ color: "#fff" }}><FaWhatsapp /></a>
            <a href="https://instagram.com" target="_blank" style={{ color: "#fff" }}><FaInstagram /></a>
          </div>
        </Container>
      </section>
      </Reveal>




      {/* FOOTER */}
      <footer style={{ padding: "20px", textAlign: "center", borderTop: `2px solid ${primaryBlue}`, background: "#000" }}>
        © {new Date().getFullYear()} Rasha — All Rights Reserved
      </footer>

    </div>
  );
}



// INPUT STYLE
const inputStyle = {
  width: "100%",
  padding: "12px",
  background: "#111827",
  border: "1px solid #1E90FF",
  color: "#fff",
  borderRadius: "6px",
  marginBottom: "12px",
  outline: "none"
};
