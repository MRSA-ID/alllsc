import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		domains: ["alssacorp.co.id"],
		// Adding recommended image optimization settings
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		minimumCacheTTL: 60,
		unoptimized: process.env.NODE_ENV === "development",
	},
	// Adding recommended performance optimizations
	compress: true,
	poweredByHeader: false,
	reactStrictMode: true,
};

export default nextConfig;
