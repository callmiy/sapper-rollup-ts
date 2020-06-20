const sveltePreprocess = require("svelte-preprocess");

module.exports = {
  preprocess: sveltePreprocess({
    typescript: {
      // skips type checking
      transpileOnly: true,
    },
  }),
};
