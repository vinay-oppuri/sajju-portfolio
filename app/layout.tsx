import type { Metadata } from "next";
import "./globals.css";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

export const metadata: Metadata = {
    title: "Sozzoo — Motion Designer",
    description: "Motion designer and visual storyteller based in India."
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="en">
            <body className="relative">
                {children}
                {/* Natural progressive spreading bottom blur */}
                <ProgressiveBlur position="bottom" />
            </body>
        </html>
    );
}


