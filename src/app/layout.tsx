import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{children}
				<Link href="https://api.whatsapp.com/send/?phone=6281282610357&text&type=phone_number&app_absent=0">
					<div className="fixed top-3/4 -translate-y-3/4 -right-1 cursor-pointer z-[10] w-[80px] h-[80px]">
						{/* position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent */}
						<Image
							src={
								"https://alssacorp.co.id/_next/image?url=%2Fimg%2Ficon%2Fwa.png&w=96&q=75"
							}
							fill
							sizes="80px"
							className="object-contain"
							alt="wa-icon"
							loading="lazy"
							style={{
								position: "absolute",
								height: "100%",
								width: "100%",
								left: 0,
								top: 0,
								right: 0,
								bottom: 0,
								color: "transparent",
							}}
						/>
					</div>
				</Link>
			</body>
		</html>
	);
}
