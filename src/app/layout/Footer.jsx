import { Link } from "react-router-dom";
import Container from "../../components/ui/Container";
import styles from "./Footer.module.css";
import { footerLinks } from "../../data/siteData";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.brandBlock}>
            <div className={styles.brand}>
              <span className={styles.iconChip}>
                <img
                  src="/powerpulse-icon.png"
                  alt="PowerPulse"
                  className={styles.icon}
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <span className={styles.brandText}>
                <span className={styles.brandName}>PowerPulse</span>
                <span className={styles.brandSub}>TECHNOLOGIES</span>
              </span>
            </div>
            <p>
              Custom software and AI-driven product development for industrial and
              enterprise teams.
            </p>
            <p>Pune, India</p>
          </div>
          <div>
            <p className={styles.title}>Company</p>
            {footerLinks.company.map((link) => (
              <Link key={link.to} to={link.to} className={styles.link}>
                {link.label}
              </Link>
            ))}
          </div>
          <div>
            <p className={styles.title}>Products</p>
            {footerLinks.products.map((link) => (
              <Link key={link.to} to={link.to} className={styles.link}>
                {link.label}
              </Link>
            ))}
          </div>
          <div>
            <p className={styles.title}>Legal</p>
            {footerLinks.legal.map((link) => (
              <Link key={link.to} to={link.to} className={styles.link}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.bottom}>
          (c) 2026 PowerPulse Technologies. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
