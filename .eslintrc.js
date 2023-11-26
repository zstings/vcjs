module.exports = {
  root: true,
  // 启用的环境
  env: {
    // 浏览器
    browser: true,
    // node
    node: true,
    // es
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended']
}
