/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: {
      autoPrerender: false,
    },
    images: {
      domains: ['https://i.etsystatic.com/22845678/r/il/cba060/4701668083/il_570xN.4701668083_lb68.jpg'], // Add the domain here
    },
  };
  
  export default nextConfig;