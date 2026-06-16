import profile from "./assets/profile.jpeg";

function App() {
  const cardStyle = {
    background: "rgba(30, 41, 59, 0.8)",
    padding: "25px",
    borderRadius: "20px",
    margin: "20px auto",
    maxWidth: "800px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    border: "1px solid #334155",
  };

  const buttonStyle = {
    background: "#38bdf8",
    color: "black",
    padding: "12px 20px",
    margin: "10px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
    display: "inline-block",
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "Arial",
        textAlign: "center",
      }}
    >
      {/* Profile Photo */}
      <img
        src={profile}
        alt="Kannan"
        style={{
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "4px solid #38bdf8",
          marginBottom: "20px",
          boxShadow: "0 0 25px rgba(56, 189, 248, 0.5)",
        }}
      />

      {/* Name */}
      <h1
        style={{
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          marginBottom: "10px",
        }}
      >
        KANNAN G R
      </h1>

      {/* Title */}
      <h2 style={{ color: "#38bdf8" }}>
        Embedded Systems Engineer | IoT Enthusiast | FPGA & VLSI Learner
      </h2>

      {/* About */}
     <p
  style={{
    maxWidth: "850px",
    margin: "20px auto",
    fontSize: "18px",
    lineHeight: "1.8",
  }}
>
  I am an Electronics and Communication Engineering student
  passionate about Embedded Systems, IoT, FPGA, and VLSI
  technologies. I enjoy designing intelligent hardware-software
  solutions using Raspberry Pi, ESP32, STM32, and AI-based
  applications. My goal is to contribute to innovative embedded
  and semiconductor technologies through continuous learning
  and hands-on development.
</p>

      {/* Buttons */}
      <div style={{ marginBottom: "40px" }}>
        <a
          href="https://github.com/Kannan2503"
          target="_blank"
          rel="noreferrer"
          style={buttonStyle}
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/kannan-g-r-7426a137a"
          target="_blank"
          rel="noreferrer"
          style={buttonStyle}
        >
          LinkedIn
        </a>

        <a
          href="/Resume.pdf"
          target="_blank"
          rel="noreferrer"
          style={buttonStyle}
        >
          Resume
        </a>
      </div>

      {/* Skills */}
      <h2 style={{ color: "#38bdf8" }}>🛠 Skills</h2>

      <div style={{ fontSize: "20px", lineHeight: "2" }}>
        <p>⚡ C Programming</p>
        <p>🐍 Python</p>
        <p>☕ Java</p>
        <p>💻 Verilog</p>
        <p>🍓 Raspberry Pi</p>
        <p>📡 ESP32</p>
        <p>🔧 STM32</p>
        <p>🧠 TensorFlow Lite</p>
        <p>⚙️ FPGA</p>
        <p>🔬 Xilinx Vivado</p>
        <p>📐 Quartus Prime</p>
        <p>🛠️ Arduino IDE</p>
        <p>🔌 UART | SPI | I2C | GPIO</p>
      </div>

      {/* Projects */}
      <h2 style={{ color: "#38bdf8", marginTop: "50px" }}>
        🚀 Projects
      </h2>

      <div style={cardStyle}>
        <h3>AI-Based Plastic Waste Classification System</h3>
        <p>
         
  Developed an AI-powered plastic waste classification system
  using Raspberry Pi and TensorFlow Lite for real-time image
  processing. The system automatically identifies different
  categories of plastic waste and enables smart segregation,
  improving recycling efficiency and supporting sustainable
  waste management solutions.

        </p>
      </div>

      <div style={cardStyle}>
        <h3>Smart Waste Monitoring System</h3>
      
          <p>
  Designed and developed an IoT-based smart waste monitoring
  system using ultrasonic sensors and ESP32. The system
  continuously monitors dustbin levels and sends automated
  email alerts when the bin reaches a threshold, enabling
  efficient waste collection and reducing overflow issues.
</p>
      </div>

      <div style={cardStyle}>
        <h3>Li-Fi Communication System</h3>
        
         <p>
  Implemented a Li-Fi communication system using visible light
  communication technology. Data transmission was achieved
  through laser diode modulation and received using a solar
  panel, demonstrating secure, high-speed wireless
  communication without conventional radio frequencies.
</p>
      </div>

      {/* Internship */}
      <h2 style={{ color: "#38bdf8", marginTop: "50px" }}>
        💼 Internship
      </h2>

      <div style={cardStyle}>
        <h3>Enthu Technology Solutions, Coimbatore</h3>
        <p>
  Completed hands-on training in Embedded Systems and IoT
  development using Raspberry Pi, ESP32, and STM32
  microcontrollers. Worked on sensor interfacing, communication
  protocols, and real-time embedded applications while gaining
  practical industry exposure.
</p>
      </div>

      {/* Certifications */}
      <h2 style={{ color: "#38bdf8", marginTop: "50px" }}>
        📜 Certifications
      </h2>

      <div style={{ fontSize: "18px", lineHeight: "2" }}>
        <p>✅ MIT RISC-V on FPGA</p>
        <p>✅ SystemVerilog for Semiconductor Design</p>
        <p>✅ Digital Design – Maven Silicon</p>
        <p>✅ PCB Design Workshop</p>
        <p>✅ Analog Electronics Certification</p>
      </div>

      {/* Education */}
      <h2 style={{ color: "#38bdf8", marginTop: "50px" }}>
        🎓 Education
      </h2>

      <p>
  <strong>B.E. Electronics and Communication Engineering</strong>
</p>
<p>Dr. N.G.P Institute of Technology, Coimbatore</p>
<p>CGPA: 7.92 / 10 (2023 – 2027)</p>
      {/* Contact */}
      <h2 style={{ color: "#38bdf8", marginTop: "50px" }}>
        📞 Contact
      </h2>

    <p>📧 Email: grkannan8523@gmail.com</p>
<p>📱 Phone: +91 8523913407</p>
<p>📍 Tiruppur, Tamil Nadu, India</p>

      {/* Footer */}
      <p
        style={{
          marginTop: "50px",
          color: "#94a3b8",
        }}
      >
        © 2026 KANNAN G R | Portfolio
      </p>
    </div>
  );
}

export default App;