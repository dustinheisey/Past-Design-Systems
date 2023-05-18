import terser from "@rollup/plugin-terser";

export default {
  input: "index.js",
  output: {
    file: "_site/min.js",
    format: "iife",
  },
  plugins: [terser()],
};
