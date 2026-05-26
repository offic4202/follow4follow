# Active Context: SocialBoost - Social Media Marketing Platform

## Current State

**Application Status**: ✅ Built and ready

Created a replica of insfamous.co with multiple social media platforms and URL redirect functionality.

## Recently Completed

- [x] Updated globals.css with dark theme and gradient text styling
- [x] Created homepage with hero section, platform selection, growth options, and stats
- [x] Created UI Button component
- [x] Created SocialIcon component with SVG icons for 8 platforms
- [x] Created /api/redirect route for short URL redirects
- [x] Created /[...slug] catch-all route for moveon= pattern redirects
- [x] Created /about page
- [x] Created /register page with social login options
- [x] Updated Next.js from ^16.1.3 to 16.2.6 to fix deployment compatibility
- [x] Implemented configurable redirect base URL via environment variable (REDIRECT_BASE_URL)

## Current Structure

| File/Directory | Purpose |
|--------------|---------|
| `src/app/page.tsx` | Home page with platform selection |
| `src/app/register/page.tsx` | Registration page with social login |
| `src/app/about/page.tsx` | About page |
| `src/app/api/redirect/route.ts` | Short URL redirect API |
| `src/app/[...slug]/route.ts` | Catch-all redirect route |
| `src/components/ui/button.tsx` | Reusable button component |
| `src/components/social-icon.tsx` | Social media icon component |

## Social Media Platforms Supported

Instagram, TikTok, YouTube, Twitter, Facebook, LinkedIn, Snapchat, Pinterest

## Redirect URL Format

Links use format: `https://shrtlnk.xyz/moveon=https://instagram.com`
