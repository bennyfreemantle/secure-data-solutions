import "@/index.css";
import type { ReactNode } from "react";
import { Providers } from "./providers";
import { Layout } from "@/components/layout/Layout";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
