import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        themeColor: '#F5C616',
        primaryColor: '#212121',
        secondaryColor: '#23262B',
        cardColor: '#272727',
        borderColor: '#2F3031',
      },
    },
  },
  plugins: [],
};
export default config;
