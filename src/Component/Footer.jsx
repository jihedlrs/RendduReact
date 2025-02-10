

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Jihed Lourassi. Bienvenue dans Cours React.</p>
      <nav>
        <ul className="footer-nav">
          <li><a href="#">Contact nous </a></li> 
          <li><a href="#">A Propos de nous </a></li>
          <li><a href="#">Adresse</a></li>
        </ul>
      </nav>
      <div className="social-links">
        <p>Suivez-nous :</p>
        <a href="https://www.facebook.com/?locale=fr_FR" target="_blank">Facebook</a><br />
        <a href="https://twitter.com" target="_blank">Twitter</a><br />
        <a href="https://instagram.com" target="_blank">Instagram</a><br />
        <a href="https://linkedin.com" target="_blank">LinkedIn</a><br />
      </div>
    </footer>
  );
}

export default Footer;
