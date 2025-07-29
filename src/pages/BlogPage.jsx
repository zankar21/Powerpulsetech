const posts = [
  {
    title: "How Predictive Maintenance Prevents Unplanned Downtime",
    desc: "Discover how AI and continuous monitoring can reduce unexpected failures by up to 30%—and see examples from Indian power plants.",
    date: "July 2025"
  },
  {
    title: "IoT Sensor Rollout: Lessons from the Field",
    desc: "Practical tips and hard-won lessons from our team’s sensor deployments across steel, cement, and thermal power units.",
    date: "June 2025"
  },
];

export default function BlogPage() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-extrabold text-blue-800 mb-4">Blog & Insights</h1>
      <p className="text-lg text-gray-700 mb-8">
        The latest on predictive maintenance, AI in industry, IoT, and real-world case studies.
      </p>
      <div className="grid gap-8 md:grid-cols-2">
        {posts.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow p-6 transition-all duration-300 hover:scale-105 hover:bg-blue-50 cursor-pointer"
          >
            <h2 className="text-xl font-bold text-blue-600 mb-2">{p.title}</h2>
            <p className="text-gray-700 mb-2">{p.desc}</p>
            <span className="text-xs text-gray-400">{p.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
