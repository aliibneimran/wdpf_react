import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <header id="header" class="fixed-top">
        <div class="container-fluid d-flex justify-content-between align-items-center">

          <h1 class="logo me-auto me-lg-0"><a href="index.html">Kelly</a></h1>
          <nav id="navbar" class="navbar order-last order-lg-0">
            <ul>
              <li><a class="active" href="index.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="resume.html">Resume</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="portfolio.html">Portfolio</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <div class="header-social-links">
            <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
            <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
            <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
            <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
      </header >

      <section id="hero" class="d-flex align-items-center">
        <div class="container d-flex flex-column align-items-center" data-aos="zoom-in" data-aos-delay="100">
          <h1>Kelly Adams</h1>
          <h2>I'm a professional illustrator from San Francisco</h2>
          <a href="about.html" class="btn-about">About Me</a>
        </div>
      </section>

      <footer id="footer">
        <div class="container">
          <div class="copyright">
            &copy; Copyright <strong><span>Kelly</span></strong>. All Rights Reserved
          </div>
          <div class="credits">

            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>
    </div >
  );
}

export default App;
