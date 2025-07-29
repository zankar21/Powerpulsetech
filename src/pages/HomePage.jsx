export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-blue-100 to-white min-h-[60vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Decorative SVG blob */}
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
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4 drop-shadow-lg">
          PowerPulse Technologies
        </h1>
        <p className="max-w-xl text-lg md:text-2xl text-gray-700 mb-6">
          Unleash the Power of AI, IoT & Predictive Analytics for Smarter, Safer, and More Reliable Plant Operations.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition"
        >
          Request a Demo
        </a>
      </section>

      {/* Features / Benefits Section */}
      <section className="relative py-16 px-4 bg-gradient-to-br from-white via-blue-50 to-blue-100 overflow-hidden">
        {/* Subtle background blob */}
        <div className="absolute inset-0 pointer-events-none -z-10 opacity-25">
          <svg width="100%" height="100%">
            <ellipse
              cx="50%"
              cy="60%"
              rx="48%"
              ry="30%"
              fill="#c7d2fe"
            />
          </svg>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 text-center mb-10 drop-shadow">
          Why Choose PowerPulse?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center border-t-4 border-blue-300 hover:border-blue-600 transition group">
            <div className="text-5xl mb-4 group-hover:scale-110 transition">⚡</div>
            <h3 className="font-semibold text-xl text-blue-600 mb-2 group-hover:text-blue-800 transition">Predictive AI Analytics</h3>
            <p className="text-gray-600 text-base">
              Identify faults and anomalies before failures using advanced industry-proven AI.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center border-t-4 border-blue-300 hover:border-blue-600 transition group">
            <div className="text-5xl mb-4 group-hover:scale-110 transition">🔗</div>
            <h3 className="font-semibold text-xl text-blue-600 mb-2 group-hover:text-blue-800 transition">IoT Sensor Integration</h3>
            <p className="text-gray-600 text-base">
              Monitor every asset in real-time for a complete 360° plant view.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center border-t-4 border-blue-300 hover:border-blue-600 transition group">
            <div className="text-5xl mb-4 group-hover:scale-110 transition">📊</div>
            <h3 className="font-semibold text-xl text-blue-600 mb-2 group-hover:text-blue-800 transition">Interactive Dashboards</h3>
            <p className="text-gray-600 text-base">
              Get actionable insights with beautiful, customizable dashboards and instant alerts.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-5xl mx-auto mt-16 px-4 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-10 text-center">
          How PowerPulse Works
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow p-6 text-center flex flex-col items-center border-t-4 border-blue-200 hover:border-blue-600 transition">
            <div className="text-3xl mb-3">🟢</div>
            <div className="font-semibold text-blue-600 mb-2">1. Connect</div>
            <div className="text-gray-600 text-sm">
              Seamlessly integrate IoT sensors and data sources across all plant assets.
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 text-center flex flex-col items-center border-t-4 border-blue-200 hover:border-blue-600 transition">
            <div className="text-3xl mb-3">🔍</div>
            <div className="font-semibold text-blue-600 mb-2">2. Monitor</div>
            <div className="text-gray-600 text-sm">
              Collect and visualize real-time performance, vibration, and health data.
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 text-center flex flex-col items-center border-t-4 border-blue-200 hover:border-blue-600 transition">
            <div className="text-3xl mb-3">🤖</div>
            <div className="font-semibold text-blue-600 mb-2">3. Diagnose</div>
            <div className="text-gray-600 text-sm">
              AI engine detects anomalies, predicts failures, and gives actionable insights.
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 text-center flex flex-col items-center border-t-4 border-blue-200 hover:border-blue-600 transition">
            <div className="text-3xl mb-3">🚀</div>
            <div className="font-semibold text-blue-600 mb-2">4. Optimize</div>
            <div className="text-gray-600 text-sm">
              Get alerts, root-cause analysis, and recommendations—improve reliability and save costs.
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="max-w-5xl mx-auto mb-12 px-4">
        <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-8 text-center">
          Trusted by Industry Leaders
        </h2>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {/* Replace these with your real client/partner logos */}
          <img src="https://dummyimage.com/120x40/ccd6f6/333333&text=Mahagenco" alt="Mahagenco" className="h-10 object-contain opacity-80 grayscale hover:grayscale-0 transition" />
          <img src="https://dummyimage.com/120x40/ccd6f6/333333&text=NTPC" alt="NTPC" className="h-10 object-contain opacity-80 grayscale hover:grayscale-0 transition" />
          <img src="https://dummyimage.com/120x40/ccd6f6/333333&text=Adani" alt="Adani" className="h-10 object-contain opacity-80 grayscale hover:grayscale-0 transition" />
          <img src="https://dummyimage.com/120x40/ccd6f6/333333&text=Tata+Steel" alt="Tata Steel" className="h-10 object-contain opacity-80 grayscale hover:grayscale-0 transition" />
          <img src="https://dummyimage.com/120x40/ccd6f6/333333&text=Ultratech" alt="Ultratech" className="h-10 object-contain opacity-80 grayscale hover:grayscale-0 transition" />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-5xl mx-auto mb-16 px-4">
        <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-8 text-center">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-gray-700 italic">
              "With PowerPulse, we reduced our maintenance costs by 18% and eliminated unexpected outages in our boiler system."
            </p>
            <div className="mt-4 font-semibold text-blue-600">Maintenance Head, Mahagenco</div>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-gray-700 italic">
              "Real-time analytics and predictive alerts from PowerPulse have transformed our plant reliability."
            </p>
            <div className="mt-4 font-semibold text-blue-600">Plant Manager, NTPC</div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto mb-16 px-4">
        <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <details className="bg-white rounded-xl shadow px-6 py-4 group">
            <summary className="font-semibold text-blue-600 cursor-pointer group-open:text-blue-800 transition">
              What industries does PowerPulse support?
            </summary>
            <p className="text-gray-700 mt-2">
              PowerPulse is designed for power plants, steel, cement, manufacturing, oil & gas, and other industrial sectors where reliability and uptime matter most.
            </p>
          </details>
          <details className="bg-white rounded-xl shadow px-6 py-4 group">
            <summary className="font-semibold text-blue-600 cursor-pointer group-open:text-blue-800 transition">
              How does predictive maintenance work?
            </summary>
            <p className="text-gray-700 mt-2">
              Our system collects real-time asset data, applies AI models to detect patterns and anomalies, then notifies your team before failures can occur—minimizing downtime and repair costs.
            </p>
          </details>
          <details className="bg-white rounded-xl shadow px-6 py-4 group">
            <summary className="font-semibold text-blue-600 cursor-pointer group-open:text-blue-800 transition">
              Can PowerPulse integrate with existing equipment and systems?
            </summary>
            <p className="text-gray-700 mt-2">
              Yes! We provide flexible, non-intrusive IoT integration with legacy PLCs, SCADA, and DCS systems, as well as modern cloud platforms.
            </p>
          </details>
        </div>
      </section>

      {/* Final Call-to-Action */}
      <section className="max-w-2xl mx-auto mb-20 px-4 text-center">
        <div className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Power Up Your Plant?</h2>
          <p className="text-white mb-6">
            Get a personalized demo or talk to our experts to discover how PowerPulse can transform your operations.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3 rounded-full shadow transition"
          >
            Request a Demo
          </a>
        </div>
      </section>
    </>
  );
}
