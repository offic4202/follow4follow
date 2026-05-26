import Link from "next/link";

export default function Terms() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 gradient-text">Terms of Service</h1>
        <p className="text-gray-300 mb-4">
          By using SocialBoost, you agree to these terms. We provide social media marketing services 
          aimed at organic growth and engagement.
        </p>
        <p className="text-gray-300 mb-4">
          We are not affiliated with, endorsed by, or sponsored by any social media platforms.
        </p>
        <p className="text-gray-300 mb-4">
          Our services only require your public username - we never ask for passwords or sensitive data.
        </p>
        <Link href="/" className="text-blue-400 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}