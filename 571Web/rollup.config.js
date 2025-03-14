// rollup.config.js
export default {
    // Other Rollup config
    output: {
      // Configure the base path for the build
      sourcemap: true,
      format: 'iife',
      name: 'app',
      file: 'public/build/bundle.js',
      paths: {
        // Use the relative path when building for GitHub Pages
        "/build": "./build",
      },
    },
  };
  