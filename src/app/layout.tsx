import type { Metadata } from "next";
import { Config } from "../../config";
import { LayoutProvider } from "@/provider";
import "@/styles/styles.scss";
import { ToastContainer } from 'react-toastify';

export const metadata: Metadata = {
  title: "todo list app",
  description: "todo list app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={Config.lng} dir={Config.dir}>
      <body>
        <LayoutProvider>{children}</LayoutProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
