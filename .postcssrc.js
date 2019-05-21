// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserslist" field in package.json
    // "postcss-import": {},
    "autoprefixer": {
      "browsers": [
        // "last 1 version",
        "> 0.2%",
        // "maintained node versions",
        "not dead"
      ]
    }
  }
};
