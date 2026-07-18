import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-8xl font-extrabold text-green-600">404</h1>

        <h2 className="mt-6 text-3xl font-bold text-gray-900">
          Page Not Found
        </h2>

        <p className="mt-4 text-gray-600">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex rounded-full bg-gradient-to-r from-green-700 to-green-500 px-8 py-4 font-semibold text-white transition hover:-translate-y-1"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
