import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";
import PageMeta from "../../components/seo/PageMeta";

export default function Privacy() {
  return (
    <>
      <PageMeta title="Privacy" description="PowerPulse Technologies privacy policy." />
      <Section>
        <Container>
          <div className="pageIntro">
            <span className="eyebrow">Privacy</span>
            <h1>Privacy Policy</h1>
            <p>
              We respect your privacy. We only collect information you submit through our
              contact forms or direct communications. We do not sell personal information.
            </p>
            <p>If you have questions, contact info@powerpulsetech.in.</p>
          </div>
        </Container>
      </Section>
    </>
  );
}
