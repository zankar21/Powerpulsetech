import { Mail, MessageSquare, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import PageMeta from "../components/seo/PageMeta";
import styles from "./Contact.module.css";

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const company = formData.get("company") || "";
    const message = formData.get("message") || "";
    const label = name || company || "New inquiry";
    const subject = `PowerPulse inquiry - ${label}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Requirement/Message: ${message}`
    ].join("\n");
    const mailto = `mailto:info@powerpulsetech.in?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <>
      <PageMeta
        title="Contact"
        description="Book a call or request a demo with PowerPulse Technologies."
      />
      <Section>
        <Container className={styles.grid}>
          <div className="pageIntro">
            <span className="eyebrow">Contact</span>
            <h1>Book a call with the team</h1>
            <p>
              Tell us about your product, timelines, and constraints. We will respond with
              a clear plan and next steps.
            </p>
            <Card>
              <form className={styles.form} onSubmit={handleSubmit}>
                <label>
                  Full name
                  <input type="text" name="name" placeholder="Your name" />
                </label>
                <label>
                  Work email
                  <input type="email" name="email" placeholder="you@company.com" />
                </label>
                <label>
                  Company
                  <input type="text" name="company" placeholder="Company name" />
                </label>
                <label>
                  Project details
                  <textarea
                    rows="5"
                    name="message"
                    placeholder="Share goals, timelines, constraints"
                  />
                </label>
                <Button type="submit">Send message</Button>
              </form>
            </Card>
            <Card>
              <div className={styles.cardRow}>
                <div>
                  <strong>Prefer not to book a call yet?</strong>
                  <p>Download our 2-page capability brief.</p>
                  <Button as="a" href="/capability-brief.pdf" variant="secondary">
                    Download 2-page capability brief
                  </Button>
                </div>
              </div>
            </Card>
          </div>
          <div className={styles.cards}>
            <Card>
              <div className={styles.cardRow}>
                <Mail size={20} />
                <div>
                  <strong>Email</strong>
                  <a href="mailto:info@powerpulsetech.in">info@powerpulsetech.in</a>
                </div>
              </div>
            </Card>
            <Card>
              <div className={styles.cardRow}>
                <Phone size={20} />
                <div>
                  <strong>Phone</strong>
                  <p>Available on request</p>
                </div>
              </div>
            </Card>
            <Card>
              <div className={styles.cardRow}>
                <MessageSquare size={20} />
                <div>
                  <strong>WhatsApp</strong>
                  <p>Available on request</p>
                </div>
              </div>
            </Card>
            <Card>
              <div className={styles.faq}>
                <h3>FAQs</h3>
                <div>
                  <strong>How fast can we see a demo?</strong>
                  <p>Pilot-ready demos are typically available in 2-4 weeks.</p>
                </div>
                <div>
                  <strong>What are the deployment options?</strong>
                  <p>Client cloud, our cloud, or a hybrid model.</p>
                </div>
                <div>
                  <strong>Are IoT sensors included?</strong>
                  <p>IoT sensors are not default, but we can integrate later.</p>
                </div>
              </div>
            </Card>
            <div className={styles.legalLinks}>
              <Link to="/privacy">Privacy</Link>
              <Link to="/terms">Terms</Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
