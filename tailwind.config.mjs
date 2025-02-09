/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'supabase-primary': '#3ECF8E',
        'supabase-accent': '#725CFF',
        'supabase-neutral': '#6B7280',
        'supabase-background': '#F9FAFB',
        'golden-yellow': '#FFDA63',
        'lemon-yellow': '#FFF72B',
        'pastel-yellow': '#FFF9C4',
        'amber-yellow': '#FFB300',
      },
      backgroundImage: {
        'gradient-green-golden': 'linear-gradient(to right, #3ECF8E, #FFDA63)',
        'gradient-green-lemon': 'linear-gradient(to right, #3ECF8E, #FFF72B)',
        'gradient-green-pastel': 'linear-gradient(to right, #3ECF8E, #FFF9C4)',
        'gradient-green-amber': 'linear-gradient(to right, #3ECF8E, #FFB300)',
      },
    },
  },
  plugins: [],
};
