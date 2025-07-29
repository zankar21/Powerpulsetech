import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-blue-600">
            <Link to="/">PowerPulse</Link>
          </div>
          <div className="space-x-4 text-sm font-medium">
            <Link to="/about" className="hover:text-blue-500">About</Link>
            <Link to="/services" className="hover:text-blue-500">Services</Link>
            <Link to="/solutions" className="hover:text-blue-500">Solutions</Link>
            <Link to="/case-studies" className="hover:text-blue-500">Case Studies</Link>
            <Link to="/blog" className="hover:text-blue-500">Blog</Link>
            <Link to="/contact" className="hover:text-blue-500">Contact</Link>
          </div>
        </nav>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-gray-100 text-center text-sm text-gray-500 py-4">
        &copy; {new Date().getFullYear()} PowerPulse Technologies. All rights reserved.
      </footer>
    </div>
  );
}
