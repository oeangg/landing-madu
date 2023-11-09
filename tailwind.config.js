/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      fontFamily: {
        Poppins: "Poppins",
        Lora : "Lora",
      },
      colors: {
        primary: "#FFF1EB",
        secondary: "#D56E3F",
        coklatgelap: "#2F231D",
        
      },
    },
  },
  plugins: [],
};
