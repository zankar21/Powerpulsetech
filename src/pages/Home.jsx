import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import PageMeta from "../components/seo/PageMeta";
import styles from "./Home.module.css";
import {
  caseStudies,
  highlights,
  processSteps,
  products,
  services
} from "../data/siteData";

export default function Home() {
  return (
    <>
      <PageMeta
        title="Home"
        description="PowerPulse Technologies builds custom software and AI-driven products for industrial and enterprise teams."
      />
      <section className={styles.hero}>
        <div className={styles.heroBackground} />
        <div className={styles.heroGrid} />
        <Container>
          <div className={styles.heroContent}>
            <Badge tone="info">PowerPulse Technologies</Badge>
            <h1 className={styles.heroTitle}>
              AI-driven software, built for real operations.
            </h1>
            <p className={styles.heroSub}>
              We deliver custom software and AI-driven products for industrial and
              enterprise teams. From discovery to deployment, we build systems that are
              ready for production.
            </p>
            <p className={styles.heroSub}>
              Pilot-ready demos in 2-4 weeks. Delivery in sprints.
            </p>
            <div className="buttonRow">
              <Button as={Link} to="/contact" size="lg">
                Book a Call <ArrowRight size={16} />
              </Button>
              <Button as={Link} to="/contact" variant="secondary" size="lg">
                Request a Demo
              </Button>
            </div>
          </div>
          <div className={styles.heroCards}>
            {highlights.map((item) => (
              <div key={item.title} className={styles.heroCard}>
                <span className={styles.highlightTitle}>{item.title}</span>
                <span>{item.description}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Products"
            title="Focused products with clear rollout status"
            subtitle="We build products alongside client work with transparent readiness levels."
          />
          <div className={styles.split}>
            <div className={styles.productGrid}>
              {products.map((product) => (
                <Card key={product.slug}>
                  <Badge tone={product.statusTone}>{product.status}</Badge>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <ul>
                    {product.highlights.map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                  <div className="buttonRow">
                    <Button as={Link} to={`/products/${product.slug}`}>
                      Learn more
                    </Button>
                    <Button as={Link} to="/contact" variant="secondary">
                      {product.cta}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
            <Card>
              <h3>Need custom delivery?</h3>
              <p>
                We design and ship bespoke platforms, dashboards, and AI-driven tools.
                Engagements are scoped to your operational constraints and timelines.
              </p>
              <Button as={Link} to="/services">
                Explore services
              </Button>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="alt">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Custom software and AI-driven product development"
            subtitle="Six delivery pillars that cover design, build, and deployment."
          />
          <div className={styles.sectionGrid}>
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title}>
                  <div>
                    <Icon size={20} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Process"
            title="Define, design, build, deploy, support"
            subtitle="A delivery model tuned for speed and clarity."
          />
          <div className={styles.sectionGrid}>
            {processSteps.map((step, index) => (
              <Card key={step.title}>
                <span className="eyebrow">Step {index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="alt">
        <Container>
          <SectionHeading
            eyebrow="Case Studies"
            title="Pilots and prototypes with measurable outcomes"
            subtitle="No fake clients, just honest delivery snapshots."
          />
          <div className={styles.sectionGrid}>
            {caseStudies.map((study) => (
              <Card key={study.title}>
                <span className="eyebrow">{study.label}</span>
                <h3>{study.title}</h3>
                <p>{study.summary}</p>
                <strong>{study.outcome}</strong>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Card>
            <SectionHeading
              eyebrow="Ready when you are"
              title="Book a call or request a demo"
              subtitle="Talk to the team about your product goals or see our pilot-ready demos."
            />
            <div className="buttonRow">
              <Button as={Link} to="/contact">
                Book a Call
              </Button>
              <Button as={Link} to="/contact" variant="secondary">
                Request a Demo
              </Button>
            </div>
          </Card>
        </Container>
      </Section>
    </>
  );
}
