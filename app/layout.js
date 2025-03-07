import { Montserrat } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/app/components/queryprovider";
import ReduxProvider from "./components/reduxprovider";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["500", "700"] });

export const metadata = {
  title: `Darren Tangamus Portfolio`,
  description: "A website created to showcase who i am and my skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <ReduxProvider>
          <QueryProvider>{children}</QueryProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
