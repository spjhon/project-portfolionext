
 
import nextIntl from "next-intl/plugin";
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: { unoptimized: true },
};

// Use nextIntl to extend your configuration with the next-intl plugin
const withNextIntl = nextIntl("./src/i18n.ts");
 
export default withNextIntl(nextConfig);

//Este es el comando para el server: npx serve@latest out