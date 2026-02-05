import { Link } from "react-router-dom";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import PageMeta from "../components/seo/PageMeta";

export default function NotFound() {
  return (
    <>
      <PageMeta title="Not Found" description="Page not found." />
      <Section>
        <Container>
          <div className="pageIntro">
            <span className="eyebrow">404</span>
            <h1>Page not found</h1>
            <p>The page you are looking for does not exist or has moved.</p>
            <Button as={Link} to="/">
              Back to home
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
