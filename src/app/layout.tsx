import type { Metadata } from "next";
import { Inter, Itim } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });
const itim = Itim({
	weight: "400",
	subsets: ["latin", "thai"],
	display: "swap",
	variable: "--font-itim"
});

export const metadata: Metadata = {
	title: "Weather",
	description: "Weather - Mini Project - P'Tong",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="en">
			<body className={itim.variable}>
				<Background />
				<div className="relative">
					{children}
				</div>
			</body>
		</html>
	);
}
