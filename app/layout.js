import localFont from "next/font/local";
import "./globals.css";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/Providers/Theme";
import Header from "@/components/Header";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata = {
  title: "Abdul Wahab Malik- Data Scientist",
  description: "Experienced data scientist who builds models that learn and predict.",
  keywords:
    "Data Scientist, Computer Vision, Machine Learning , Software Engineer, Python,JS, C#, CSharp, React, Node.js, portfolio",
  author: "Abdul Wahab Malik",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <NextTopLoader />
          <Header />

          {children}

          <Footer />
          <Toaster
            position="top-right"
            toastOptions={{
              className: "font-semibold backdrop-blur-md text-black rounded-3xl",
            }}
          />

          <GridPattern
            width={200}
            height={200}
            x={-1}
            y={-1}
            className={cn("[mask-image:linear-gradient(to_bottom,white,transparent)]")}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}