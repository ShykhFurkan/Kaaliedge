import type { Metadata } from "next";
import { Inter, DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Kaali Edge - MBBS Abroad Consultancy",
  description: "Guiding Kashmiri students from Anantnag to global medical careers with trust and transparency. Expert counseling for MBBS in Russia, Uzbekistan, Kazakhstan, and more.",
  keywords: ["MBBS Abroad", "Kaali Edge", "Education Consultancy", "Anantnag", "Kashmir", "Study Medicine", "Russia", "Uzbekistan", "Kazakhstan", "Kyrgyzstan"],
  authors: [{ name: "Dr. Mustansir" }],
  openGraph: {
    title: "Kaali Edge - Trustworthy MBBS Abroad Consultancy",
    description: "Your gateway to a global medical career. Personalized counseling, transparent process, and end-to-end support.",
    url: "https://kaaliedge.com", // Placeholder URL
    siteName: "Kaali Edge",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaali Edge - MBBS Abroad Consultancy",
    description: "Guiding Kashmiri students toward global medical careers with trust and transparency.",
    creator: "@kaaliedge", // Placeholder handle
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ModalProvider } from "@/context/modal-context";
import { ConsultationModal } from "@/components/common/consultation-modal";
import { WhatsAppFloat } from "@/components/common/whatsapp-float";
import { Toaster } from "sonner";

import { ThemeProvider } from "@/components/theme-provider";
import { BackgroundPattern } from "@/components/layout/background-pattern";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.variable, dmSans.variable, playfair.variable, "font-sans antialiased text-foreground min-h-screen flex flex-col")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <BackgroundPattern />
          <ModalProvider>
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <ConsultationModal />
            <WhatsAppFloat />
            <Toaster position="top-center" richColors />
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
