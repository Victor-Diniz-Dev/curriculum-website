import { email, github, instagram, linkedin, whatsapp } from "../data";

export default function Footer() {
  return <footer className="site-footer">
    <span>Victor Diniz</span>
    <span className="footer-note">Tecnologia com atenção às pessoas.</span>
    <div className="footer-links">
      <a href={github} target="_blank" rel="noreferrer">GitHub ↗</a>
      <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
      <a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp ↗</a>
      <a href={instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
      <a href={`mailto:${email}`}>E-mail ↗</a>
    </div>
  </footer>;
}
