import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  /** Keeps file tracing anchored to this project if other lockfiles exist nearby */
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
