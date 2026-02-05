import { Link } from "react-router-dom";
import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";
import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import PageMeta from "../../components/seo/PageMeta";

export default function ChandaNest() {
  return (
    <>
      <PageMeta
        title="ChandaNest"
        description="ChandaNest is an early access real estate tech platform focused on verified listings and workflow-led onboarding."
      />
      <Section>
        <Container>
          <Badge tone="warning">Coming Soon - Early Access</Badge>
          <div className="pageIntro">
            <h1>ChandaNest.in</h1>
            <p>
              A real estate tech platform built for verified listings, workflow-led
              onboarding, and transparent discovery for buyers and agents.
            </p>
            <p>
              Built for Tier-2 and Tier-3 city real estate ecosystems: owners, agents, and
              local broker partners.
            </p>
            <div className="buttonRow">
              <Button as={Link} to="/contact">
                Request Early Access
              </Button>
              <Button as={Link} to="/products" variant="secondary">
                Back to products
              </Button>
            </div>
          </div>
        </Container>
      </Section>
      <Section className="alt">
        <Container className="pageGrid">
          <Card>
            <h3>What we are building</h3>
            <ul>
              <li>- Verified listing workflows and audit trails.</li>
              <li>- Broker and builder onboarding with role-based access.</li>
              <li>- Location-first search, filters, and lead routing.</li>
              <li>- Trust signals that reduce listing noise.</li>
            </ul>
          </Card>
          <Card>
            <h3>Status</h3>
            <p>
              Early access is opening soon. We are onboarding pilot partners to refine
              verification workflows and discovery experience.
            </p>
          </Card>
          <Card>
            <h3>Early access fit</h3>
            <p>
              Designed for brokers, builders, and teams ready to co-create the workflow.
            </p>
            <Button as={Link} to="/contact">
              Join early access
            </Button>
          </Card>
        </Container>
      </Section>
    </>
  );
}
