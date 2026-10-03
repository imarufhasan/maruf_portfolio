import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "Md Maruf Hasan | Senior Mobile Application Engineer (React Native & Android)",
  description:
    "Mobile Application Engineer in Dhaka, Bangladesh with 4+ years architecting and scaling production React Native & Android apps on Google Play and the App Store.",
  keywords: [
    "React Native Developer",
    "Android Developer",
    "Mobile App Engineer",
    "Expo",
    "Kotlin",
    "TypeScript",
    "Dhaka Bangladesh",
    "Google Play Store",
    "App Store",
    "Mobile Architecture",
  ],
  authors: [{ name: "Md Maruf Hasan" }],
  openGraph: {
    title: "Md Maruf Hasan | Senior Mobile Application Engineer",
    description: "4+ years shipping production React Native and native Android apps with 99.9% crash-free stability.",
    url: "https://imarufhasan.com",
    siteName: "Md Maruf Hasan Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#060913",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const t = localStorage.getItem('portfolio-theme');
                if (t) document.documentElement.setAttribute('data-theme', t);
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className={`${openSans.variable} ${openSans.className}`}>
        {children}
      </body>
    </html>
  );
}
