import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import styles from "./Navbar.module.css";
import { navLinks } from "../../data/siteData";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.row}>
          <Link to="/" className={styles.brand}>
            <span className={styles.iconChip}>
              <img
                src="/powerpulse-icon.png"
                alt="PowerPulse"
                className={styles.icon}
                loading="eager"
                decoding="async"
              />
            </span>
            <span className={styles.brandText}>
              <span className={styles.brandName}>PowerPulse</span>
              <span className={styles.brandSub}>TECHNOLOGIES</span>
            </span>
          </Link>
          <nav className={styles.nav}>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  isActive ? styles.activeLink : styles.link
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className={styles.cta}>
            <Button as={Link} to="/contact" variant="secondary">
              Request a Demo
            </Button>
            <Button as={Link} to="/contact">
              Book a Call
            </Button>
          </div>
          <button
            type="button"
            className={styles.menuButton}
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </Container>
      {open && (
        <div className={styles.mobileMenu}>
          <Container>
            <div className={styles.mobileLinks}>
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={styles.mobileLink}
                >
                  {link.label}
                </NavLink>
              ))}
              <div className={styles.mobileCta}>
                <Button as={Link} to="/contact" variant="secondary">
                  Request a Demo
                </Button>
                <Button as={Link} to="/contact">
                  Book a Call
                </Button>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
