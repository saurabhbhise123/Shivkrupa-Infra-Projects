import "./App.css";

import coverImage from "./assets/coverimage.jpeg";
import p1 from "./assets/p1.jpeg";
import p2 from "./assets/p2.jpeg";
import p3 from "./assets/p3.jpeg";

function App() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#home">
            Shivkrupa<span className="text-warning">Infra</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${coverImage})`,
        }}
      >
        <div className="container text-center">
          <h1>Infrastructure Solutions</h1>

          <p className="lead">
            Infrastructure • Construction • Development
          </p>

          <a href="#services" className="btn btn-warning btn-lg">
            Explore Services
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="text-center mb-4">
            About Shivkrupa Infra
          </h2>

          <p className="text-center">
            Shivkrupa Infra is a leading infrastructure development company
            delivering high-quality construction projects with innovation,
            safety, and reliability.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section bg-light">
        <div className="container">
          <h2 className="text-center mb-5">
            Our Services
          </h2>

          <div className="row g-4 align-items-stretch">

            <div className="col-md-3 d-flex">
              <div className="service-box w-100">
                <i className="bi bi-building fs-1"></i>
                <h5 className="mt-3">
                  Civil Construction
                </h5>
              </div>
            </div>

            <div className="col-md-3 d-flex">
              <div className="service-box w-100">
                <i className="bi bi-road fs-1"></i>
                <h5 className="mt-3">
                  Road Projects
                </h5>
              </div>
            </div>

            <div className="col-md-3 d-flex">
              <div className="service-box w-100">
                <i className="bi bi-gear fs-1"></i>
                <h5 className="mt-3">
                  Industrial Works
                </h5>
              </div>
            </div>

            <div className="col-md-3 d-flex">
              <div className="service-box w-100">
                <i className="bi bi-clipboard-check fs-1"></i>
                <h5 className="mt-3">
                  Project Management
                </h5>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="container">

          <h2 className="text-center mb-5">
            Our Projects
          </h2>

          <div className="row g-4">

            <div className="col-md-4 project-box">
              <img src={p1} alt="Shivkrupa Infra Project 1" />
            </div>

            <div className="col-md-4 project-box">
              <img src={p2} alt="Shivkrupa Infra Project 2" />
            </div>

            <div className="col-md-4 project-box">
              <img src={p3} alt="Shivkrupa Infra Project 3" />
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="container">

          <div className="breadcrumb">
            Contact Us Mo No:- 9673472471/7744822003
          </div>

          <div className="row align-items-stretch">

            {/* CONTACT FORM */}
            <div className="col-md-5 contact-form">

              <h2>Get In Touch</h2>

              <form>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  required
                />

                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  required
                />

                <label>Message</label>
                <textarea
                  name="message"
                  required
                ></textarea>

                <button type="submit">
                  Send Message
                </button>
              </form>

            </div>

            {/* GOOGLE MAP */}
            <div className="col-md-7 contact-map">

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2353.8551245411695!2d73.93920133050817!3d19.895036683975547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddb900623bec23%3A0x2277e81c542664e9!2sShivkrupa%20wash%20pland!5e1!3m2!1sen!2sin!4v1774546253910!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shivkrupa Infra Location"
              ></iframe>

            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center p-3">
        © 2026 Shivkrupa Infra. All Rights Reserved.
      </footer>
    </>
  );
}

export default App;