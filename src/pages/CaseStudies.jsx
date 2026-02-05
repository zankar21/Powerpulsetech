import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import PageMeta from "../components/seo/PageMeta";
import { caseStudies } from "../data/siteData";

export default function CaseStudies() {
  return (
    <>
      <PageMeta
        title="Case Studies"
        description="Pilot and prototype case studies highlighting PowerPulse delivery outcomes."
      />
      <Section>
        <Container>
          <div className="pageIntro">
            <span className="eyebrow">Case Studies</span>
            <h1>Pilots, prototypes, and operational wins</h1>
            <p>
              We highlight work with clear scope, measurable outcomes, and honest status
              labels.
            </p>
          </div>
        </Container>
      </Section>
      <Section className="alt">
        <Container className="pageGrid">
          {caseStudies.map((study) => (
            <Card key={study.title}>
              <span className="eyebrow">{study.label}</span>
              <h3>{study.title}</h3>
              <ul>
                <li>Problem: {study.problem}</li>
                <li>Solution: {study.solution}</li>
                <li>Outcome: {study.outcome}</li>
              </ul>
            </Card>
          ))}
        </Container>
      </Section>
    </>
  );
}
