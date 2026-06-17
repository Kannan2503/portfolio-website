import profile from "./assets/profile.jpeg";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #020617, #0f172a)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "0 8%",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "25px 0",
        }}
      >
        <h2 style={{ color: "#22d3ee", fontSize: "32px" }}>
          KANNAN
        </h2>

        <div style={{ display: "flex", gap: "30px" }}>
          <a href="#about" style={{ color: "white", textDecoration: "none" }}>
            About
          </a>
          <a href="#skills" style={{ color: "white", textDecoration: "none" }}>
            Skills
          </a>
          <a href="#projects" style={{ color: "white", textDecoration: "none" }}>
            Projects
          </a>
          <a href="#contact" style={{ color: "white", textDecoration: "none" }}>
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: "80vh",
          gap: "40px",
        }}
      >
        {/* Left Side */}
        <div style={{ flex: 1 }}>
          <p
            style={{
              color: "#22d3ee",
              fontSize: "30px",
              marginBottom: "10px",
            }}
          >
            Hello, I'm
          </p>

          <h1
            style={{
              fontSize: "90px",
              margin: 0,
              lineHeight: 1,
            }}
          >
            KANNAN G R
          </h1>

          <h2
            style={{
              fontSize: "35px",
              color: "#cbd5e1",
              marginTop: "20px",
            }}
          >
            Embedded Systems Engineer
            <br />
            IoT Enthusiast | FPGA & VLSI Learner
          </h2>

          <p
            style={{
              fontSize: "22px",
              color: "#94a3b8",
              lineHeight: 1.8,
              maxWidth: "700px",
              marginTop: "25px",
            }}
          >
            Electronics and Communication Engineering student
            passionate about Embedded Systems, IoT, FPGA,
            VLSI and AI-based solutions using Raspberry Pi,
            ESP32 and STM32.
          </p>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "35px",
            }}
          >
            <a
              href="https://github.com/Kannan2503"
              target="_blank"
              rel="noreferrer"
              style={{
                background: "#22d3ee",
                color: "black",
                padding: "14px 28px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/kannan-g-r-7426a137a"
              target="_blank"
              rel="noreferrer"
              style={{
                border: "2px solid #22d3ee",
                color: "#22d3ee",
                padding: "14px 28px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              LinkedIn
            </a>

            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noreferrer"
              style={{
                border: "2px solid white",
                color: "white",
                padding: "14px 28px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Resume
            </a>
          </div>
        </div>

        {/* Right Side Image */}
        <div>
          <img
            src={profile}
            alt="Kannan"
            style={{
              width: "350px",
              height: "350px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "6px solid #22d3ee",
              boxShadow: "0 0 40px rgba(34,211,238,0.5)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;