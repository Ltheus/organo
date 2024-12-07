import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="socials">
        <a href="https://www.facebook.com" target="_blank">
          <img src="/images/fb.png" alt="Facebook" />
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <img src="/images/ig.png" alt="Instagram" />
        </a>
        <a href="https://www.twitter.com" target="_blank">
          <img src="/images/tw.png" alt="Twitter" />
        </a>
      </section>
      <section>
        <img src="/images/logo.png" alt="Logo Organo" />
      </section>
      <section>
        <h4>Desenvolvido por Matheus Lopes.</h4>
      </section>
    </footer>
  );
};

export default Footer;
