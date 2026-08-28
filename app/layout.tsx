import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Sajuu — Motion Designer", description: "Motion designer and visual storyteller based in India." };
export default function RootLayout({ children }: LayoutProps<"/">) { return <html lang="en"><body>{children}</body></html>; }
