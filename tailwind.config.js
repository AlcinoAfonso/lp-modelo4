/** @type {import('tailwindcss').Config} */
module.exports = {
  // Arquivos onde Tailwind procura classes
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  /*
   * Classes que vêm apenas de JSON ou variáveis não podem ser detectadas
   * pelo JIT.  Mantê-las aqui garante que o CSS seja gerado.
   */
  safelist: [
    // Grid
    "grid-cols-1",
    "md:grid-cols-2",

    // Visibilidade / layout
    "flex",
    "md:flex",
    "hidden",
    "md:hidden",
  ],

  theme: {
    extend: {},               // mantenha vazio por enquanto
  },
  plugins: [],
};
