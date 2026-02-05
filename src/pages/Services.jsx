import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import PageMeta from "../components/seo/PageMeta";
import { services } from "../data/siteData";

export default function Services() {
  return (
    <>
      <PageMeta
        title="Services"
        description="Custom software and AI-driven product development as per client requirements."
      />
      <Section>
        <Container>
          <div className="pageIntro">
            <span className="eyebrow">Services</span>
            <h1>Custom software and AI-driven product development</h1>
            <p>
              We design, build, and deploy systems based on client requirements. Every
              engagement is scoped to deliver operational impact with clear milestones.
            </p>
          </div>
        </Container>
      </Section>
      <Section className="alt">
        <Container>
          <SectionHeading
            eyebrow="Capabilities"
            title="Six delivery pillars"
            subtitle="From discovery to deployment, we cover the full product lifecycle."
          />
          <div className="pageGrid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title}>
                  <Icon size={20} />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>
      <Section>
        <Container className="pageGrid">
          <Card>
            <h3>Engagement model</h3>
            <p>
              We run discovery workshops, align on outcomes, then deliver in rapid sprints
              with steady demos and reviews.
            </p>
          </Card>
          <Card>
            <h3>Delivery focus</h3>
            <p>
              Production-grade code, observability, and clear handover documentation are
              built into every engagement.
            </p>
          </Card>
          <Card>
            <h3>Platforms we use</h3>
            <p>
              GCP, Firebase, Cloud Run, and modern frontend stacks tailored to your needs.
            </p>
          </Card>
        </Container>
      </Section>
    </>
  );
}
