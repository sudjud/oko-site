module.exports = {
  css: {
    loaderOptions: {
      sass: {
          prependData: `
          @import "@/assets/css/vars.sass";
          `
      }
    }
  }
};