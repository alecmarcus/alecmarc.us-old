module.exports = {
  parser: 'babel-eslint',
  extends: ['standard', 'standard-react'],
  rules: {
    'react/prop-types': 0,
    'object-curly-spacing': ['error', 'always'],
    'space-before-function-paren': ['error', 'never']
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.2.0'
    }
  }
}
