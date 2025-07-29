const services = [
  {
    title: "Predictive Maintenance",
    desc: "AI-driven monitoring for all critical assets—catch failures before they happen and optimize your maintenance budget."
  },
  {
    title: "IoT Sensor Integration",
    desc: "Hardware and software setup for real-time data collection, including wireless sensor deployment, LoRa/Edge, and data ingestion."
  },
  {
    title: "Data Digitization",
    desc: "Convert paper records, manual logs, and legacy reports into digital format using OCR and fast data entry, with validation."
  },
  {
    title: "Custom Dashboards",
    desc: "Interactive, web-based dashboards for analytics, reporting, and live plant health—built to your workflow."
  },
  {
    title: "Consulting & Training",
    desc: "Expert advisory, upskilling, and on-site support for your engineering and maintenance teams."
  }
];

export default function ServicesPage() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-extrabold text-blue-800 mb-6">Our Services</h1>
      <div className="space-y-4">
        {services.map((s, i) => (
          <details key={i} className="bg-white rounded-xl shadow p-4 group">
            <summary className="font-semibold text-blue-600 cursor-pointer group-open:text-blue-800 transition text-lg">{s.title}</summary>
            <p className="text-gray-700 mt-2">{s.desc}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
