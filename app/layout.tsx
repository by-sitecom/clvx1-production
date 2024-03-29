import './globals.css'
import "@/app/swiper-bundle.min.css";
import GoogleAnalytics from '@/lib/components/GoogleAnalytics/GoogleAnalytics';
import { Montserrat, Noto_Sans } from "next/font/google";

const montserrat = Montserrat({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const notoSans = Noto_Sans({
  weight: ["300", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans",
});

export const metadata = {
  title: 'CLVX1',
  description: 'CLVX1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${notoSans.variable}`}>
      <head>
        <GoogleAnalytics GA_TRACKING_ID="G-TKD02M3S8V" />
      </head>
      <body>{children}</body>
    </html>
  );
}
