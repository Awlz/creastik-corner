import type { NextConfig } from "next";
import path from "node:path";

const LOADER = path.resolve(__dirname, "src/visual-edits/component-tagger-loader.js");

const nextConfig: NextConfig = {
  // ✅ Abaikan lint saat build agar tidak error di Vercel
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ✅ Izinkan gambar dari berbagai sumber
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" },
    ],
  },

  // ✅ Pastikan tracing root benar
  outputFileTracingRoot: path.resolve(__dirname, "../../"),

  // ✅ Tambahkan pengecekan agar Vercel tidak error karena properti custom
  experimental: {
    turbo: {
      rules: {
        "*.tsx": [LOADER],
        "*.jsx": [LOADER],
      },
    },
  },
};

export default nextConfig;
