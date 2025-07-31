import type { Metadata, Viewport } from "next";
import { Architects_Daughter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const draftingMono = localFont({
  src: "../assets/DraftingMono/woff2/DraftingMono-Regular.woff2",
  display: "swap",
  variable: "--font-drafting-mono",
});

const architectsDaughter = Architects_Daughter({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-architects-daughter",
});

export const metadata: Metadata = {
  title: "Prayush here!👋",
  icons: {
    icon: [
      {
        url: "/favicon_light/favicon-32x32.png",
        sizes: "32x32",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon_light/favicon-16x16.png",
        sizes: "16x16",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon_light/android-chrome-192x192.png",
        sizes: "192x192",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon_light/android-chrome-512x512.png",
        sizes: "512x512",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon_light/favicon.ico",
        media: "(prefers-color-scheme: light)",
      },
      // { url: '/favicon_dark/favicon-32x32.png', sizes: '32x32', media: '(prefers-color-scheme: dark)' },
      // { url: '/favicon_dark/favicon-16x16.png', sizes: '16x16', media: '(prefers-color-scheme: dark)' },
      // { url: '/favicon_dark/android-chrome-192x192.png', sizes: '192x192', media: '(prefers-color-scheme: dark)' },
      // { url: '/favicon_dark/android-chrome-512x512.png', sizes: '512x512', media: '(prefers-color-scheme: dark)' },
      // { url: '/favicon_dark/favicon.ico', media: '(prefers-color-scheme: dark)' },
    ],
    apple: [
      {
        url: "/favicon_light/apple-touch-icon.png",
        media: "(prefers-color-scheme: light)",
      },
      // { url: '/favicon_dark/apple-touch-icon.png', media: '(prefers-color-scheme: dark)' },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const SvgSprite = () => (
  <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
    <symbol id="icon-x" viewBox="0 0 1200 1227">
      <path
        d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
        fill="currentColor"
      />
    </symbol>
    <symbol id="icon-instagram" viewBox="0 0 24 24">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
    </symbol>
    <symbol id="icon-linkedin" viewBox="0 0 24 24">
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="4"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <line
        x1="8"
        y1="11"
        x2="8"
        y2="17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="8" cy="8" r="1" fill="currentColor" />
      <path
        d="M12 17V13c0-1 .5-2 2-2s2 1 2 2v4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </symbol>
    <symbol id="icon-github" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
      />
    </symbol>
    <symbol id="icon-youtube" viewBox="0 0 24 24">
      <path
        d="M21.8 8s-.2-1.4-.9-2c-.8-.8-1.7-.8-2.2-.9C15.2 5 12 5 12 5s-3.2 0-6.7.1c-.5.1-1.4.1-2.2.9-.7.6-.9 2-.9 2S2 9.9 2 11.9v0c0 2 .2 3.9.2 3.9s.2 1.4.9 2c.8.8 1.8.8 2.3.9 1.7.1 7.1.1 7.1.1s3.2 0 6.7-.1c.5-.1 1.4-.1 2.2-.9.7-.6.9-2 .9-2s.2-1.9.2-3.9v0c0-2-.2-3.9-.2-3.9z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
    </symbol>
    <symbol id="icon-substack" viewBox="0 0 24 24">
      <path
        d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.539 24V10.812H1.46zM22.539 0H1.46v2.836h21.08V0z"
        fill="currentColor"
      />
    </symbol>
  </svg>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${draftingMono.variable} ${architectsDaughter.variable} font-sans`}
    >
      <body>
        <SvgSprite />
        {children}
      </body>
    </html>
  );
}
