// import { Inter } from "next/font/google";
import ClientLayout from "@/src/app/components/ClientLayout"; // Import the new client layout
import "./globals.css";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
//   display: "swap",
// });

export const metadata = {

  title: 'Scalixity- AI Solutions for Data-Driven Companies',
  description: 'We help data-driven companies build measurable generative AI solutions',
  keywords: 'AI, artificial intelligence, machine learning, data science, consulting',
  openGraph: {
    title: 'Scalixity - AI Solutions for Data-Driven Companies',
    description: 'We help data-driven companies build measurable generative AI solutions',
    url: 'https://Scalixity.com',
    siteName: 'Scalixity',

  

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gradient-to-b from-[#080B16] to-[#0F1629]">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
