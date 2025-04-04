import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/app/components/queryprovider";
import ReduxProvider from "./components/reduxprovider";

// Define font styles
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-heading",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-body",
});

export const metadata = {
  title: `Darren Tangamus Portfolio`,
  description: "A website created to showcase who i am and my skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${poppins.variable}`}>
        <ReduxProvider>
          <QueryProvider>{children}</QueryProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
