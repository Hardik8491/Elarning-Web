import withPWAInit from "@ducanh2912/next-pwa";
const withPWA = withPWAInit({
    dest: "public",
    register: true,
    skipWaiting: true,
    cacheOnFontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    swcMinify: true,
    disable: false,
    workboxOptions: {
        disableDevLogs: true,
    },
});

const nextConfig = {
    plugins: {
        "postcss-import": {},
        "tailwindcss/nesting": "postcss-nesting",
        tailwindcss: {},
        autoprefixer: {},
    },
    images: {
        domains: ["res.cloudinary.com"],
    },
};

export default withPWA(nextConfig);
