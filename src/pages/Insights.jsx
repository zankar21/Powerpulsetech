import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import PageMeta from "../components/seo/PageMeta";

const posts = [
  {
    title: "Operational AI for real teams",
    description: "How to design AI features that teams actually adopt.",
    status: "Coming soon"
  },
  {
    title: "From pilot to production",
    description: "What changes when a prototype becomes an operational product.",
    status: "Coming soon"
  },
  {
    title: "Data quality in industrial workflows",
    description: "Building data habits that stick across teams.",
    status: "Coming soon"
  }
];

export default function Insights() {
  return (
    <>
      <PageMeta
        title="Insights"
        description="Insights from PowerPulse on software delivery, AI, and industrial workflows."
      />
      <Section>
        <Container>
          <div className="pageIntro">
            <span className="eyebrow">Insights</span>
            <h1>Notes from the field</h1>
            <p>We publish updates on product delivery, AI integration, and operations.</p>
          </div>
        </Container>
      </Section>
      <Section className="alt">
        <Container className="pageGrid">
          {posts.map((post) => (
            <Card key={post.title}>
              <span className="eyebrow">{post.status}</span>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </Card>
          ))}
        </Container>
      </Section>
    </>
  );
}
