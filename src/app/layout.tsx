import type { Metadata } from "next";
import { Inter, DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Kaali Edge | MBBS Abroad Consultants in Kashmir - Official Website",
  description: "Kaali Edge: Trusted international education consultants in Anantnag, Kashmir. Expert guidance for MBBS admissions in Russia, Uzbekistan, Kazakhstan & more. Contact us for transparent student support.",
  keywords: ["Kaali Edge", "Kaali Consultants", "MBBS abroad consultants Kashmir", "Study MBBS abroad", "Education consultancy Anantnag", "Medical admission guidance", "Student visa support", "Dr. Mustansir"],
  authors: [{ name: "Dr. Mustansir" }],
  openGraph: {
    title: "Kaali Edge - Premier MBBS Abroad Consultancy",
    description: "Start your medical journey with trust. Kaali Edge provides transparent, end-to-end guidance for Kashmiri students seeking MBBS admission abroad.",
    url: "https://kaaliedge.com",
    siteName: "Kaali Edge",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://kaaliedge.com/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaali Edge - MBBS Abroad Consultants",
    description: "Trusted guidance for MBBS aspirants in Kashmir. Contact Kaali Edge for transparent admissions.",
    creator: "@kaaliedge",
  },
  alternates: {
    canonical: "https://kaaliedge.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Kaali Edge",
  "url": "https://kaaliedge.com",
  "logo": "https://kaaliedge.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-6005533853",
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": ["English", "Urdu", "Kashmiri", "Hindi"]
  },
  "sameAs": [
    "https://facebook.com/kaaliedge",
    "https://instagram.com/kaaliedge",
    "https://linkedin.com/company/kaaliedge"
  ]
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#ffffff',
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
      <body className={cn(inter.variable, dmSans.variable, playfair.variable, "font-sans antialiased text-foreground min-h-screen flex flex-col overflow-x-hidden")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <BackgroundPattern />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
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
