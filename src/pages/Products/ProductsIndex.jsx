import { Link } from "react-router-dom";
import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";
import SectionHeading from "../../components/ui/SectionHeading";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";
import PageMeta from "../../components/seo/PageMeta";
import { products } from "../../data/siteData";

export default function ProductsIndex() {
  return (
    <>
      <PageMeta
        title="Products"
        description="Explore PowerPulse products with clear rollout status."
      />
      <Section>
        <Container>
          <div className="pageIntro">
            <span className="eyebrow">Products</span>
            <h1>Built with clear delivery status</h1>
            <p>
              We are shipping two focused products alongside custom client work. Each
              product has an explicit rollout status so teams know what is ready today.
            </p>
            <div className="buttonRow">
              <Button as={Link} to="/contact">
                Book a Call
              </Button>
              <Button as={Link} to="/contact" variant="secondary">
                Request a Demo
              </Button>
            </div>
          </div>
        </Container>
      </Section>
      <Section className="alt">
        <Container>
          <div className="pageGridTwo">
            {products.map((product) => (
              <Card key={product.slug}>
                <Badge tone={product.statusTone} className="badgeLarge">
                  {product.status}
                </Badge>
                <h3>{product.name}</h3>
                <p>
                  Status:{" "}
                  {product.slug === "chandanest"
                    ? "Coming Soon (Early Access)"
                    : "Pilot-ready demo"}
                </p>
                <p>{product.descriptor}</p>
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
                {product.slug === "ash-integrity" && (
                  <>
                    <div className="buttonRow">
                      <Button
                        as="a"
                        href="https://adpims.powerpulsetech.in/"
                        variant="secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Pilot Demo
                      </Button>
                    </div>
                    <p className="mutedSmall">
                      Pilot demo environment. Manual inspection data. No live IoT sensors.
                    </p>
                  </>
                )}
              </Card>
            ))}
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <Card>
            <SectionHeading
              eyebrow="Custom delivery"
              title="Need a bespoke platform?"
              subtitle="We build custom software and AI-driven products as per client requirements."
            />
            <div className="buttonRow">
              <Button as={Link} to="/services">
                Explore services
              </Button>
              <Button as={Link} to="/contact" variant="secondary">
                Start a project
              </Button>
            </div>
          </Card>
        </Container>
      </Section>
    </>
  );
}
