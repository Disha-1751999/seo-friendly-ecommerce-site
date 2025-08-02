import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col justify-center items-center text-center">
      <h1 className="text-2xl font-bold text-red-600">404 –  Not Found</h1>
      <p className="text-gray-600 mt-2">Sorry, the data you’re looking for doesn’t exist.</p>
      <Link href="/" className="mt-4 text-green-600 hover:underline">
        Back to Home
      </Link>
    </div>
  );
}
