import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 gradient-text">About SocialBoost</h1>
        <p className="text-gray-300 mb-6">
          SocialBoost is an independent social media marketing agency. We are not affiliated with, 
          endorsed by, or sponsored by Instagram, TikTok, YouTube, Twitter, Facebook, LinkedIn, 
          Snapchat, or Pinterest.
        </p>
        <p className="text-gray-300 mb-6">
          Your privacy is protected; we do not need your account password or any personal details 
          to deliver our services. We only need your username.
        </p>
        <Link href="/" className="text-blue-400 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}