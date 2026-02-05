import { Link } from "react-router-dom";
import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";
import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import PageMeta from "../../components/seo/PageMeta";

export default function AshIntegrity() {
  return (
    <>
      <PageMeta
        title="Ash Integrity"
        description="Pilot-ready integrity management for ash disposal pipelines with manual inspection inputs and analytics."
      />
      <Section>
        <Container>
          <Badge tone="info">Pilot-ready demo - manual data input</Badge>
          <div className="pageIntro">
            <h1>Ash Disposal Pipeline Integrity Management System</h1>
            <p>
              A pilot-ready system for integrity tracking with manual inspection and
              thickness survey inputs. Built for analytics, alerts, history, and
              decision-ready reporting.
            </p>
            <p>Designed for thermal power plants with slurry and ash pipelines.</p>
            <p>
              Note: Uses manual inspection and thickness survey data entry. No IoT sensors
              are implemented in the current scope.
            </p>
            <div className="buttonRow">
              <Button as={Link} to="/contact">
                Request a Demo
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
            <h3>Pilot capabilities</h3>
            <ul>
              <li>- Manual inspection and thickness survey inputs.</li>
              <li>- Trend analysis, alerts, and risk scoring.</li>
              <li>- Asset history and inspection audit trails.</li>
              <li>- Decision-ready dashboards for maintenance teams.</li>
            </ul>
          </Card>
          <Card>
            <h3>Important note</h3>
            <p>
              This pilot demo uses manual data inputs and does not include sensor or IoT
              integration. It is ideal for validating workflows and analytics.
            </p>
          </Card>
          <Card>
            <h3>Next steps</h3>
            <p>
              We can tailor the demo to your asset layout, inspection cadence, and reporting
              requirements.
            </p>
            <Button as={Link} to="/contact">
              Book a pilot review
            </Button>
          </Card>
        </Container>
      </Section>
    </>
  );
}
