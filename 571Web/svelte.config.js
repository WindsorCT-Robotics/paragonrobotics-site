import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: '/paragonrobotics-site',
      relative: false
    },
    appDir: 'app',
    prerender: {
      handleHttpError: 'warn' 
    }
  }
};

export default config;
