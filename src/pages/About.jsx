import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import PageMeta from "../components/seo/PageMeta";
import { capabilities, highlights, products } from "../data/siteData";

export default function About() {
  return (
    <>
      <PageMeta
        title="About"
        description="PowerPulse Technologies builds custom software and AI-driven products with clear delivery status."
      />
      <Section>
        <Container>
          <div className="pageIntro">
            <span className="eyebrow">About</span>
            <h1>Serious product and services teams, ready to deliver</h1>
            <p>
              PowerPulse Technologies builds custom software and AI-driven products for
              industrial and enterprise teams. We deliver production-ready systems while
              also developing focused products with transparent rollout status.
            </p>
          </div>
        </Container>
      </Section>
      <Section className="alt">
        <Container className="pageGrid">
          {highlights.map((item) => (
            <Card key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Card>
          ))}
        </Container>
      </Section>
      <Section>
        <Container className="pageGridTwo">
          <Card>
            <SectionHeading
              eyebrow="Roadmap"
              title="Current product roadmap"
              subtitle="We do not claim products are fully launched until they are."
            />
            {products.map((product) => (
              <div key={product.slug}>
                <strong>{product.name}</strong>
                <p>{product.status}</p>
                <p>{product.description}</p>
              </div>
            ))}
          </Card>
          <Card>
            <SectionHeading
              eyebrow="Ways of working"
              title="Transparency is part of our brand promise"
              subtitle="We align with your goals, then deliver with clear scope and milestones."
            />
            <p>
              Every project is led by senior product and engineering contributors with a
              focus on adoption and operational reliability.
            </p>
          </Card>
        </Container>
      </Section>
      <Section className="alt">
        <Container className="pageGrid">
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <Card key={capability.title}>
                <Icon size={20} />
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </Card>
            );
          })}
        </Container>
      </Section>
    </>
  );
}
