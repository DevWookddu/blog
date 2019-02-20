require.config({
  baseUrl: '/path/js',
  paths: {
    'hangul-js': 'lib/hangul',
    'hangul-chosung-search': 'lib/hangul-chosung-search'
  },
  shim: {
    'hangul-chosung-search': {
      deps: ['hangul-js']
    }
  }
});