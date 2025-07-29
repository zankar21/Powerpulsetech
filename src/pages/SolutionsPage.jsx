import { useState } from "react";
import { motion } from "framer-motion";

const solutions = [
  {
    icon: "🩺",
    title: "Plant Health Monitoring",
    desc: "Live dashboards, asset health, and instant alerts. Simple onboarding—even for small teams.",
    quote: "“We caught failures before they became shutdowns!”"
  },
  {
    icon: "🔗",
    title: "End-to-End IoT Integration",
    desc: "Fast sensor setup, wireless data, and seamless dashboards. Works with legacy and new assets.",
    quote: "“Plant was digital in less than 2 weeks.”"
  },
  {
    icon: "📊",
    title: "Analytics & Visualization",
    desc: "AI-powered insights with beautiful, simple charts—no data science degree required.",
    quote: "“Anyone on the team can use it.”"
  },
  {
    icon: "🔍",
    title: "Root Cause Analysis",
    desc: "Find the “why” fast. Our AI highlights patterns and root causes for quick problem-solving.",
    quote: "“We fixed the real issue, not just the symptom.”"
  },
  {
    icon: "🚨",
    title: "Alert & Notification System",
    desc: "Flexible, customizable, and instant—alerts on WhatsApp, email, or SMS. Set rules in seconds.",
    quote: "“The right person is notified instantly.”"
  },
  {
    icon: "📝",
    title: "Custom Digital Forms & Logs",
    desc: "Quickly digitize your old checklists, logbooks, and paper data with our easy form builder.",
    quote: "“No more searching for records!”"
  }
];

const dashboards = [
  {
    src: "https://dummyimage.com/800x350/c7d2fe/3730a3&text=Dashboard+1",
    label: "Main Plant Overview"
  },
  {
    src: "https://dummyimage.com/800x350/dbeafe/0f172a&text=Equipment+Alerts",
    label: "Equipment Alerts"
  },
  {
    src: "https://dummyimage.com/800x350/a5b4fc/1e3a8a&text=Energy+Trends",
    label: "Energy Trends"
  }
];

export default function SolutionsPage() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="relative py-16 px-4 bg-gradient-to-br from-blue-50 via-blue-100 to-white min-h-[80vh]">
      {/* Decorative SVG Blob */}
      <svg
        className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 opacity-30"
        width="700"
        height="250"
        viewBox="0 0 700 250"
        fill="none"
      >
        <ellipse
          cx="350"
          cy="120"
          rx="340"
          ry="110"
          fill="#93c5fd"
        />
      </svg>

      <h1 className="text-4xl font-extrabold text-blue-800 mb-4 text-center drop-shadow-lg">
        Our Solutions
      </h1>
      <p className="text-lg text-gray-700 mb-12 text-center max-w-2xl mx-auto">
        Smart, scalable, and ready for pilot deployment—explore our suite of AI-powered and IoT-driven solutions for any size plant. All solutions are quick to integrate, and perfect for digital transformation journeys.
      </p>

      {/* Animated Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {solutions.map((s, idx) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="relative group bg-white rounded-2xl shadow-xl p-8 flex flex-col items-start hover:scale-105 hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-200 hover:border-blue-700"
          >
            <div className="text-5xl mb-4 group-hover:rotate-12 transition">{s.icon}</div>
            <div className="font-bold text-lg text-blue-800 mb-2">{s.title}</div>
            <div className="text-gray-600 text-sm mb-4">{s.desc}</div>
            <div className="text-xs text-green-600 italic mt-auto">{s.quote}</div>
          </motion.div>
        ))}
      </div>

      {/* Dashboard Carousel */}
      <div className="flex flex-col items-center mt-16">
        <div className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-xl border border-blue-100">
          <img
            src={dashboards[current].src}
            alt={dashboards[current].label}
            className="w-full"
          />
        </div>
        <div className="flex gap-2 mt-2">
          {dashboards.map((d, idx) => (
            <button
              key={idx}
              className={`h-3 w-3 rounded-full border-2 border-blue-400 ${current === idx ? "bg-blue-600" : "bg-blue-100"}`}
              onClick={() => setCurrent(idx)}
              aria-label={d.label}
            />
          ))}
        </div>
        <p className="mt-2 text-gray-500 text-center text-sm max-w-xl">{dashboards[current].label}</p>
      </div>

      {/* Client Logos */}
      <div className="flex flex-wrap justify-center gap-8 my-12">
        <img src="/mahagenco-logo.png" alt="Mahagenco" className="h-10 grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition" />
        <img src="/ntpc-logo.png" alt="NTPC" className="h-10 grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition" />
        <img src="/adani-logo.png" alt="Adani" className="h-10 grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition" />
        {/* Add more real logos in /public/ as needed */}
      </div>

      {/* Testimonial */}
      <div className="bg-blue-50 rounded-xl shadow p-6 mb-8 text-center max-w-xl mx-auto">
        <p className="italic text-blue-900 mb-3">"PowerPulse helped us catch failures early and reduce downtime by 15% within the first month."</p>
        <span className="font-semibold text-blue-700">— Maintenance Manager, Chandrapur Plant</span>
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <a href="/contact" className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-full shadow transition">
          Try as a Pilot Project
        </a>
        <p className="text-gray-500 mt-3 text-sm">
          Early adopters get founder support & custom integration help.
        </p>
      </div>
    </section>
  );
}
