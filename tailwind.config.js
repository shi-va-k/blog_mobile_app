
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [ './App.js', 
//     './src/**/*.{js,jsx,ts,tsx}',],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// module.exports = {
//   content: [
//     "./App.{js,jsx,ts,tsx}",
//     "./<custom directory>/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./app/**/*.{js,jsx,ts,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/(tabs)/index.jsx"
//   ],
//   presets: [require("nativewind/preset")],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// tailwind.config.js
 
 /** @type {import('tailwindcss').Config} */
 module.exports = {
   content: [
     "./app/**/*.{js,jsx,ts,tsx}", // Ensure it scans your App files
     "./components/**/*.{js,jsx,ts,tsx}", // Include your component directory
   ],
   theme: {
     extend: {},
   },
   plugins: [],
   presets: [require("nativewind/preset")], // Add nativewind preset
 };