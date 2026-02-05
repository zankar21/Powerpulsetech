import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";
import PageMeta from "../../components/seo/PageMeta";

export default function Terms() {
  return (
    <>
      <PageMeta title="Terms" description="PowerPulse Technologies terms of service." />
      <Section>
        <Container>
          <div className="pageIntro">
            <span className="eyebrow">Terms</span>
            <h1>Terms of Service</h1>
            <p>
              By using this website, you agree to use the content for informational purposes
              only. Product availability and timelines are subject to direct agreements with
              PowerPulse Technologies.
            </p>
            <p>
              Commercial engagements are governed by signed statements of work and service
              contracts.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
