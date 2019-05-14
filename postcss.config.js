module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    'postcss-aspect-ratio-mini': {},
    'postcss-write-svg': {
      utf8: false
    },
    'postcss-cssnext': {},
    'postcss-px-to-viewport': {
      viewportWidth: 640, // 设备的宽度 对应的事设计稿的宽度
      viewportHeight: 1334, // 设备的高度 根据750设备的宽度来指定 一般指定1334 也可以不指定
      unitPrecision: 3, // 指定`px`转换为视窗单位的小数位数
      viewportUnit: 'vw', // 指定需要转换的视窗单位 建议使用vw
      selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视窗单位的类 可以自定义
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位
      mediaQuery: false // 允许在媒体查询中转换`px`
    },
    'cssnano': {
      preset: 'advanced',
      autoprefixer: false,
      'postcss-zindex': false
    }
  }
}