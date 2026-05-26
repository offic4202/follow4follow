import Link from "next/link";
import { Button } from "@/components/ui/button";

const socialPlatforms = [
  { name: "Instagram", icon: "instagram", color: "#E4405F", domain: "instagram.com" },
  { name: "TikTok", icon: "tiktok", color: "#000000", domain: "tiktok.com" },
  { name: "YouTube", icon: "youtube", color: "#FF0000", domain: "youtube.com" },
  { name: "Twitter", icon: "twitter", color: "#1DA1F2", domain: "twitter.com" },
  { name: "Facebook", icon: "facebook", color: "#1877F2", domain: "facebook.com" },
  { name: "LinkedIn", icon: "linkedin", color: "#0A66C2", domain: "linkedin.com" },
];

export default function Register() {
  const redirectBase = "https://shrtlnk.xyz/moveon";

  return (
    <div className="min-h-screen bg-neutral-900 text-white py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Sign Up / Register</span>
          </h1>
          <p className="text-gray-400">Continue with your preferred social media account</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {socialPlatforms.map((platform) => (
            <Link
              key={platform.name}
              href={`${redirectBase}=https://${platform.domain}`}
              className="block"
            >
              <button className="w-full flex flex-col items-center gap-3 p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300">
                <div className="p-3 rounded-full bg-gray-700" style={{ color: platform.color }}>
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    {platform.icon === "instagram" && (
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.738 1.634 4.887 4.887.058 1.266.069 1.646.069 4.85s-.011 4.606-.069 5.872c-.149 3.252-1.635 4.738-4.887 4.887-1.266.058-1.646.069-4.85.069s-4.606-.011-5.872-.069c-3.252-.149-4.738-1.635-4.887-4.887-.058-1.266-.069-1.646-.069-4.85s.011-4.606.069-5.872C2.14 5.967 3.726 4.48 6.978 4.332 8.244 4.274 8.624 4.263 11.83 4.263zM12 0C8.741 0 8.332.014 7.052.522c-.556.267-1.072.594-1.538 1.06C3.688 2.546 3 3.45 3 4.5c0 .55.078 1.125.234 1.719.156.594.422 1.219.766 1.875L12 18.125l8-10.031c.344-.656.609-1.281.766-1.875C20.922 5.625 21 5.05 21 4.5c0-1.05-.688-1.954-1.617-2.416-.466-.466-.982-.793-1.538-1.06C16.737 0 15.224 0 12 0zm0 3.5L5.5 9.5c.594 1.969 2.75 4.5 6.5 7.625 3.75-3.125 5.906-5.656 6.5-7.625L12 3.5z" />
                    )}
                    {platform.icon === "tiktok" && (
                      <path d="M9.75 2v12.5a4.25 4.25 0 10-4.25 4.25A4.25 4.25 0 0014 14.25V6.5a4.25 4.25 0 104.25-4.25h-1.5a2.75 2.75 0 012.75 2.75v8.5a6 6 0 10-1.5 0v-8.5a4.5 4.5 0 01-4.5-4.5h-1.5a4.5 4.5 0 00-4.5 4.5V11a2.75 2.75 0 10-1.5 0V6.25A6.25 6.25 0 119.75 0z" />
                    )}
                    {platform.icon === "youtube" && (
                      <path d="M23.498 6.186a3.017 3.017 0 0 0-2.122-2.122C19.552 3.78 12 3.78 12 3.78s-7.552 0-9.376.284a3.017 3.017 0 0 0-2.122 2.122C.284 7.99 0 12 0 12s0 4.01.284 5.814a3.017 3.017 0 0 0 2.122 2.122C4.448 20.22 12 20.22 12 20.22s7.552 0 9.376-.284a3.017 3.017 0 0 0 2.122-2.122C23.716 16.01 24 12 24 12s0-4.01-.502-5.814zM10 15.5V8.5l6.5 3.5-6.5 3.5z" />
                    )}
                    {platform.icon === "twitter" && (
                      <path d="M23.954 4.569a9.9 9.9 0 01-2.722.772 4.955 4.955 0 002.163-2.722c-.951.555-2 1.53-2.563 2.17a4.936 4.936 0 00-7.66 4.476c-4.083-.2-7.7-2.162-10.124-5.138a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.999 13.999 0 007.557 2.209c9.054 0 14-7.505 14-14 0-.21 0-.42-.015-.63A10 10 0 0024 4.59z" />
                    )}
                    {platform.icon === "facebook" && (
                      <path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854v-8.03H7.5v-3.824h2.625V9.797c0-2.617 1.502-4.043 3.886-4.043 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 3.824h-2.33v8.03C19.612 22.954 24 17.99 24 12z" />
                    )}
                    {platform.icon === "linkedin" && (
                      <path d="M20.447 20.452h-3.554v-5.503c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.744V20.452H9.352V9h3.414v1.561h.046c.477-.9 1.637-1.844 3.369-1.844 3.601 0 4.267 2.37 4.267 5.455V22.571zM5.337 7.433c-1.144 0-2.063-.925-2.063-2.062s.92-2.062 2.063-2.062c1.143 0 2.063.925 2.063 2.062s-.92 2.062-2.063 2.062zm1.777 13.019H3.554V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.203 24 24 23.227 24 22.271V1.729C24 .774 23.203 0 22.222 0z" />
                    )}
                  </svg>
                </div>
                <span className="font-medium">{platform.name}</span>
              </button>
            </Link>
          ))}
        </div>

        <div className="text-center space-y-4">
          <p className="text-gray-400">Or continue with email</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />
          <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600">
            Sign Up
          </Button>
          <p className="text-sm text-gray-400">
            Already have an account? <Link href="/" className="text-blue-400 hover:underline">Sign In</Link>
          </p>
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="text-blue-400 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}