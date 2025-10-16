function Footer() {
  return (
    <footer id="footer" className="footer fade-in">
      <div className="container">
        <p>© 2025 Victor Diniz — Feito com ❤️ e carinho.</p>
        <div className="socials">
          <a
            href="https://github.com/Victor-Diniz-Dev"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/v1ctordiniz/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&to=victordinizdev@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Email"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
