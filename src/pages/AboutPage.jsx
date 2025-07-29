import { useEffect, useState } from "react";

function AnimatedNumber({ target, duration = 1000 }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(target / (duration / 20));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 20);
    return () => clearInterval(timer);
  }, [target, duration]);
  return <span>{count}</span>;
}

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-extrabold text-blue-800 mb-4">About PowerPulse Technologies</h1>
      <p className="text-lg text-gray-700 mb-8">
        PowerPulse Technologies is on a mission to revolutionize industrial maintenance using the power of Artificial Intelligence, IoT, and predictive analytics. Our team is a blend of plant engineers, data scientists, and digital innovators dedicated to smarter, safer, and more efficient plant operations.
      </p>
      <div className="bg-white rounded-xl shadow p-8 mb-10">
        <h2 className="text-2xl font-bold text-blue-700 mb-2">Our Vision</h2>
        <p className="text-gray-700">
          To enable every industrial plant—no matter the size or location—to run at peak efficiency, maximum reliability, and minimum downtime.
        </p>
      </div>
      {/* Animated stats */}
      <div className="flex justify-center gap-10 mt-10">
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-700">
            <AnimatedNumber target={100} />+
          </div>
          <div className="text-gray-600">Years Combined Experience</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-700">
            <AnimatedNumber target={50} />+
          </div>
          <div className="text-gray-600">Plants Served</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-700">
            <AnimatedNumber target={99} />%
          </div>
          <div className="text-gray-600">Uptime Improvement</div>
        </div>
      </div>
      {/* Core values grid as before */}
      <div className="grid md:grid-cols-3 gap-6 mt-14">
        <div className="bg-blue-50 rounded-xl p-6 shadow text-center">
          <div className="text-3xl mb-2">🌐</div>
          <div className="font-semibold text-blue-600 mb-1">Domain Expertise</div>
          <div className="text-gray-600 text-sm">Over 100 years of combined team experience in plant operations and maintenance.</div>
        </div>
        <div className="bg-blue-50 rounded-xl p-6 shadow text-center">
          <div className="text-3xl mb-2">🤖</div>
          <div className="font-semibold text-blue-600 mb-1">AI-Driven</div>
          <div className="text-gray-600 text-sm">Cutting-edge analytics and machine learning for actionable, real-world impact.</div>
        </div>
        <div className="bg-blue-50 rounded-xl p-6 shadow text-center">
          <div className="text-3xl mb-2">🤝</div>
          <div className="font-semibold text-blue-600 mb-1">Customer First</div>
          <div className="text-gray-600 text-sm">Solutions built with our clients, for our clients—always practical and hands-on.</div>
        </div>
      </div>
    </section>
  );
}
