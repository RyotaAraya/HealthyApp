/** @type {import('next').NextConfig} */
const path = require("path")

const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
    images: {
        domains: ["images.microcms-assets.io"],
    },
}

module.exports = nextConfig
