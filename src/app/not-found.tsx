import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="text-royal-600 dark:text-royal-400 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 rounded-lg font-medium bg-gold-gradient text-royal-900 hover:shadow-gold hover:scale-105 transition-all"
        >
          <Home className="mr-2" size={20} />
          Return Home
        </Link>
      </div>
    </div>
  );
}