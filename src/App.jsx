import { AppBar, Toolbar, Button, Container, Typography, Card } from "@mui/material";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaInstagram, FaWhatsapp } from "react-icons/fa";

import profileImage from "./assets/profile.jpg";
import resumeFile from "./assets/resume.pdf";

export default function App() {

  const primaryBlue = "#e6e9eeff";

  const projects = [
    {
      name:"Smart Water Monitoring System",
      desc:"MERN-based app to monitor water levels and quality, with responsive UI and CRUD operations.",
      img:"https://tse1.mm.bing.net/th/id/OIP.tBtVc-wTCbHCVgQjQGgQwgHaDf?rs=1&pid=ImgDetMain&o=7&rm=3",
      link:"https://smart-water-monitoring-system.vercel.app/"
    },
    {
      name:"BloodDonor Booking App",
      desc:"React app for browsing and booking blood donors with Firebase Authentication and Firestore.",
      img:"https://i.pinimg.com/originals/af/e7/b9/afe7b90735c6b1726de086ad669056f8.jpg",
      link:"https://blood-donor-app-9150a.web.app/"
    },
    {
      name:"E-Smart Intelligent Meter",
      desc:"Full-stack MERN app to monitor daily electricity usage per appliance and total monthly consumption.",
      img:"https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg",
      link:"https://example.com/project-link"
    },
    {
      name:"7UP Website",
      desc:"Interactive 7UP promotional website built using GSAP animations.",
      img:"https://www.7up.com/images/products/slider/7up_featured_m.jpg",
      link:"https://7up-softdrink-e1b867gsap.netlify.app/"
    },
    {
      name:"Travel Muse Clone",
      desc:"Tailwind CSS project cloning Travel website with responsive design.",
      img:"https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg",
      link:"https://traveller-pied.vercel.app/"
    },
    {
      name:"Starbucks Clone",
      desc:"Bootstrap-based clone of Starbucks website demonstrating responsive layout.",
      img:"https://velog.velcdn.com/images/whansu/post/a648d0ea-bcbb-4d3b-bd3b-7566b4b144b2/image.png",
      link:"https://clone-starbuckcoffees-bfbff4.netlify.app/"
    },
  ];

  return (
    <div style={{ fontFamily: "Inter", background: "#0A0F24", color: "#fff" }}>

      {/* NAVBAR */}
      <AppBar position="fixed" sx={{ background:"#000" }}>
        <Toolbar sx={{ justifyContent:"space-between" }}>
          <Typography variant="h6" sx={{ color:primaryBlue }}>PORTFOLIO</Typography>

          <div style={{ display:"flex", gap:"20px" }}>
            {["home","about","languages","projects","contact"].map(item=>(
              <Link key={item} to={item} smooth spy offset={-70} duration={600}
                style={{ cursor:"pointer",color:"#fff" }}>
                {item.toUpperCase()}
              </Link>
            ))}
          </div>
        </Toolbar>
      </AppBar>

      {/* HOME */}
      <section id="home" style={{ paddingTop:"150px", textAlign:"center", minHeight:"100vh" }}>
        <Container>
          <motion.img
            initial={{ opacity:0, scale:0.8 }}
            animate={{ opacity:1, scale:1 }}
            transition={{ duration:1 }}
            src={profileImage}
            style={{ width:260, height:260, objectFit:"cover", borderRadius:"50%" }}
          />

          <Typography variant="h3" sx={{ mt:3, fontWeight:"bold" }}>
            Hi, I'm <span style={{ color:primaryBlue }}>Rasha Mubarak</span>
          </Typography>

          <Typography sx={{ fontSize:25, marginTop:"10px", color:"#6c9becff" }}>
            <Typewriter options={{
              strings:["MERN Stack Developer","Junior Software Developer","React Developer","Frontend Developer","Angular Developer","UI/UX Developer"],
              autoStart:true, loop:true
            }}/>
          </Typography>

          <Button href={resumeFile} download sx={{ mt:3, background:primaryBlue }}>
            <FaDownload style={{ marginRight:10 }} />Download Resume
          </Button>
        </Container>
      </section>

      {/* ABOUT */}
      <section id="about" >
        <Typography variant="h4" sx={{ textAlign:"center", fontWeight:"bold", mb:6 }}>
          ABOUT ME
        </Typography>

        <Container sx={{
          display:"flex", alignItems:"center", justifyContent:'center',
          gap:"80px", flexWrap:"wrap"
        }}>
          <img
            src="https://img.freepik.com/premium-vector/hand-drawing-cartoon-girl-wearing-hijab-with-smile-face_488586-717.jpg?w=2000"
            style={{ width:"350px", borderRadius:"50%", background:"#111827", padding:"20px" }}
          />

          <div style={{ maxWidth:540, display:"flex", flexDirection:"column", gap:"30px" }}>
            {[
              {title:"Frontend Developer", text:"I build responsive modern frontend designs."},
              {title:"Backend Developer", text:"Creating clean API & backend logic."},
              {title:"UI Designer", text:"Designing UI layouts and themed interfaces."},
              {title:"FullStack Developer", text:"Building full MERN applications."},
              {title:"IoT/Embedded Systems", text:"Experience with sensors, Arduino, and monitoring applications."}
            ].map((item,index)=>(
              <motion.div key={index} whileHover={{ scale:1.02 }}
                style={{
                  background:"#111827",
                  padding:"20px", borderRadius:"10px"
                }}>
                <Typography variant="h6" sx={{ fontWeight:"600" }}>{item.title}</Typography>
                <Typography sx={{ opacity:.8, mt:1 }}>{item.text}</Typography>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* LANGUAGES */}
      <section id="languages" style={{ padding:"100px 0" }}>
        <Typography variant="h4" sx={{ textAlign:"center", fontWeight:"bold", mb:6 }}>
          LANGUAGES KNOWN
        </Typography>

        <Container sx={{ display:"flex", justifyContent:"center", flexWrap:"wrap", gap:"70px" }}>
          {[
            {name:"HTML", img:"https://cdn-icons-png.flaticon.com/512/1051/1051277.png"},
            {name:"CSS", img:"https://cdn-icons-png.flaticon.com/512/732/732190.png"},
            {name:"REACT", img:"https://cdn-icons-png.flaticon.com/512/1126/1126012.png"},
            {name:"MONGODB", img:"https://vectorseek.com/wp-content/uploads/2023/10/Mongodb-Icon-Logo-Vector.svg-.png"},
            {name:"NODE", img:"https://cdn-icons-png.flaticon.com/512/919/919825.png"},
          ].map((lang,i)=>(
            <div key={i} style={{ textAlign:"center" }}>
              <img src={lang.img} width={100} height={100} style={{ objectFit:"contain" }}/>
              <Typography sx={{ mt:2, fontWeight:600 }}>{lang.name}</Typography>
            </div>
          ))}
        </Container>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding:"100px 0" }}>
        <Typography variant="h4" sx={{ textAlign:"center", fontWeight:"bold" }}>PROJECTS</Typography>

        <Container sx={{ display:"flex", gap:"20px", justifyContent:"center", mt:"40px", flexWrap:"wrap" }}>
          {projects.map((p,i)=>(
            <Card key={i} sx={{
              width:"350px", background:"#314777ff", borderRadius:"10px",
              "&:hover": { transform:"scale(1.03)", transition:"0.3s" }
            }}>
              <img src={p.img} style={{ width:"100%", height:"200px", objectFit:"cover" }}/>
              <div style={{ padding:"20px" }}>
                <Typography variant="h6" sx={{ fontWeight:"bold" }}>{p.name}</Typography>
                <Typography sx={{ opacity:.8, fontSize:"14px", mt:1 }}>{p.desc}</Typography>
                <Button sx={{
                  mt:3, background:primaryBlue, width:"100%", borderRadius:"40px",
                  "&:hover":{ background:"#326be3" }
                }} onClick={() => window.open(p.link, "_blank")}>
                  SHOW
                </Button>
              </div>
            </Card>
          ))}
        </Container>
      </section>

      {/* CONTACT + SOCIAL */}
      <section id="contact" style={{ padding:"100px 0", textAlign:"center" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>CONTACT</Typography>

        <Container>
          <form action="mailto:rashamubarak458@gmail.com"
            style={{
              maxWidth:"420px", margin:"40px auto",
              background:"#111827", padding:"25px",
              borderRadius:"10px"
            }}>
            <input placeholder="Name" style={input}/>
            <input placeholder="Email" type="email" style={input}/>
            <textarea placeholder="Message" rows={3} style={input}></textarea>
            <Button type="submit" sx={{ background:primaryBlue, width:"100%", mt:2 }}>
              Send Message
            </Button>
          </form>

          <div style={{ display:"flex", justifyContent:"center", gap:"25px", fontSize:"38px", marginTop:"35px" }}>
            {[
              {icon: FaLinkedin, link:"https://www.linkedin.com/in/rasha-mubarak/"},
              {icon: FaGithub, link:"https://github.com/Rashamubarak"},
              {icon: FaEnvelope, link:"mailto:rashamubarak458@gmail.com"},
              {icon: FaWhatsapp, link:"https://wa.me/9656832483"},
              {icon: FaInstagram, link:"https://www.instagram.com/rashamubarak_/"}
            ].map((s,i)=>(
              <motion.a key={i} whileHover={{ scale:1.2 }} href={s.link} target="_blank" style={{ color:"#fff" }}>
                <s.icon />
              </motion.a>
            ))}
          </div>
        </Container>
      </section>

      <footer style={{ padding:"20px", textAlign:"center" }}>
        © {new Date().getFullYear()} Rasha — All Rights Reserved
      </footer>
    </div>
  );
}

const input = {
  width:"100%",
  padding:"12px",
  background:"#0A0F24",
  border:"1px solid #528FF7",
  color:"#fff",
  borderRadius:"6px",
  marginBottom:"12px"
};
