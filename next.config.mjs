/** @type {import('next').NextConfig} */
const nextConfig = {//There two lines are added in order to build the static site
    output: 'export',
    images: { unoptimized: true },};

export default nextConfig;

//Este es el comando para el server: npx serve@latest out