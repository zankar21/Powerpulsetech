export default function CaseStudiesPage() {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">Case Studies</h2>
      <p className="text-gray-700">
        See how PowerPulse Technologies has helped clients achieve measurable improvements in reliability, efficiency, and cost savings through our innovative solutions.
      </p>
      <ul className="mt-6 list-disc list-inside space-y-2 text-gray-600">
        <li>Thermal Power Plant – Reduced unplanned outages by 20% using predictive analytics</li>
        <li>Cement Plant – Achieved 15% maintenance cost savings through IoT integration</li>
        <li>Steel Plant – Improved safety KPIs and reduced downtime</li>
        <li>Custom solutions for your unique operational needs</li>
      </ul>
    </div>
  );
}
