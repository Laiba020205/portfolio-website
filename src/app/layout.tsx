import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const cormorantGaramond = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

const dmMono = DM_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Laiba Shaikh | Portfolio",
  description: "Portfolio of Laiba Shaikh, Aspiring Software Developer & AI/ML Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cormorantGaramond.variable} ${dmMono.variable} antialiased selection:bg-amber-500/30 selection:text-amber-900 dark:selection:text-amber-100 min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
