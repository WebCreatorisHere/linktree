import { Geist, Geist_Mono } from "next/font/google";
import "@copilotkit/react-ui/styles.css";
import "./globals.css";
import Sessionwrapperr from "./components/sessionwraper";
import 'izitoast/dist/css/iziToast.min.css';
import { CopilotKit } from "@copilotkit/react-core";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Sessionwrapperr>
        <CopilotKit runtimeUrl="/api/copilotkit"> 
            {children}
          </CopilotKit>
        </Sessionwrapperr>
      </body>
    </html>
  );
}
