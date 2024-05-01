import { config } from 'process';

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.externals.push({
            "utf-8-validate": "commonjs utf-8-validate",
            bufferutil: "commonjs"
        })
        return config;
    },
    images: {
        domains: [
            "utfs.io"
        ]
    }
};

export default nextConfig;
