module.exports = {
  extend: '@vuepress/theme-default',
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['vuepress-plugin-kano'],
    ['vuepress-plugin-mermaidjs']
  ]
}