module.exports = {
  extends: [
    'stylelint-config-standard', // 設定stylelint拓展插件
    'stylelint-config-standard-scss', // 設定stylelint scss插件
    'stylelint-config-recess-order', // 配置stylelint css屬性書寫順序插件,
    'stylelint-config-prettier', // 配置stylelint和prettier相容
  ],
  overrides: [
    {
      files: ['**/*.(scss|css|html)'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.(html)'],
      customSyntax: 'postcss-html',
    },
  ],
  ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
    '**/*.tsx',
    '**/*.ts',
    '**/*.json',
    '**/*.md',
    '**/*.yaml',
  ],
  /**
   * null => 關閉該規則
   * always => 必須
   */
  rules: {
    'value-keyword-case': null, // 在 css 中使用 v-bind，不報錯
    'no-descending-specificity': null, // 禁止在具有較高優先權的選擇器後出現被其覆寫的較低優先權的選擇器
    'function-url-quotes': 'always', // 要求或禁止 URL 的引號 "always(必須加上引號)"|"never(沒有引號)"
    'no-empty-source': null, // 關閉禁止空源碼
    'selector-class-pattern': null, // 關閉強制選擇器類別名稱的格式
    'property-no-unknown': null, // 禁止未知的屬性(true 為不允許)
    'block-opening-brace-space-before': 'always', //大括號之前必須有一個空格或不能有空格符
    'value-no-vendor-prefix': null, // 關閉 屬性值前綴 --webkit-box
    'property-no-vendor-prefix': null, // 關閉 屬性前綴 -webkit-mask
    'selector-pseudo-class-no-unknown': [
      // 不允許未知的選擇器
      true,
      {
        ignorePseudoClasses: ['global', 'v-deep', 'deep'], // 忽略屬性，修改element預設樣式的時候能使用到
      },
    ],
  },
}