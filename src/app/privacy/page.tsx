import Link from "next/link";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 gradient-text">Privacy Policy</h1>
        <p className="text-gray-300 mb-4">
          Your privacy is our priority. We only collect your public username for service delivery.
        </p>
        <p className="text-gray-300 mb-4">
          We do not store passwords, private information, or personal data beyond what is necessary for our services.
        </p>
        <p className="text-gray-300 mb-4">
          All data is securely handled and never shared with third parties without your consent.
        </p>
        <Link href="/" className="text-blue-400 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}