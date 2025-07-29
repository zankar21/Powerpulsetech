import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    icon: "🛠️",
    title: "Predictive Maintenance",
    desc: "Continuous monitoring of critical equipment with AI-powered algorithms—detect issues before they cause downtime, even if your plant is new to digitalization.",
    win: "Reduced unplanned failures by 20% in pilot projects."
  },
  {
    icon: "📡",
    title: "IoT Sensor Integration",
    desc: "Affordable, wireless sensors integrated seamlessly with your existing setup—no need to change your whole plant or buy expensive hardware.",
    win: "Plant data digitalized in just 2 weeks for an SME client."
  },
  {
    icon: "🗃️",
    title: "Data Digitization",
    desc: "Convert old logbooks and paper records into structured digital data using OCR and rapid entry—easy search, zero lost info.",
    win: "Digitized 5,000+ records for a 210MW power unit in 10 days."
  },
  {
    icon: "📊",
    title: "Custom Dashboards",
    desc: "Interactive dashboards showing exactly what you need—asset health, alerts, trends. Designed for plant teams, not just IT.",
    win: "Reduced daily reporting time by 50% for supervisors."
  },
  {
    icon: "👨‍🏫",
    title: "Consulting & Training",
    desc: "Expert guidance for plant reliability, digital transformation, and upskilling your team in modern maintenance best practices.",
    win: "Provided on-site workshops and support for three pilot clients."
  }
];

export default function ServicesPage() {
  const [open, setOpen] = useState(-1);

  return (
    <section className="relative py-16 px-4 bg-gradient-to-br from-blue-50 via-blue-100 to-white min-h-[80vh]">
      {/* Decorative SVG Top */}
      <svg
        className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 opacity-20"
        width="700"
        height="180"
        viewBox="0 0 700 180"
        fill="none"
      >
        <ellipse
          cx="350"
          cy="90"
          rx="340"
          ry="70"
          fill="#dbeafe"
        />
      </svg>

      <h1 className="text-4xl font-extrabold text-blue-800 mb-8 text-center drop-shadow-lg">
        Our Services
      </h1>

      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        {services.map((s, idx) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.12 }}
            className="bg-white rounded-2xl shadow group p-0"
          >
            <button
              className="flex items-center gap-3 w-full px-6 py-5 text-xl font-semibold text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition rounded-2xl"
              onClick={() => setOpen(open === idx ? -1 : idx)}
            >
              <span className="text-2xl">{s.icon}</span>
              {s.title}
              <span className="ml-auto transition-transform"
                style={{
                  transform: open === idx ? "rotate(90deg)" : "rotate(0deg)",
                  transition: "transform 0.2s"
                }}
              >
                ▶
              </span>
            </button>
            {open === idx && (
              <div className="px-8 pb-5 pt-2 text-gray-700 animate-fade-in">
                <p className="mb-2">{s.desc}</p>
                <div className="text-green-700 text-sm italic mb-2">{s.win}</div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-14">
        <a href="/contact" className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-full shadow transition">
          Request a Free Demo
        </a>
        <p className="text-gray-500 mt-2 text-sm">
          New to digital maintenance? Pilot any service with us—founder-led support included.
        </p>
      </div>
    </section>
  );
}
