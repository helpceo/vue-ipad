module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 1024,
      viewportHeight: 768,
      unitPrecision: 5,
      viewportUnit: 'vw',
      selectorBlackList: ['.ignore', '.hairlines'], //指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
      minPixelValue: 1, //小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的。
      mediaQuery: false  //允许在媒体查询中转换`px`
    }
  },
};
